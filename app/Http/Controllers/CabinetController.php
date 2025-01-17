<?php
namespace App\Http\Controllers;

use App\Models\Cabinet;
use App\Models\CabinetItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CabinetController extends Controller
{
    // Fetch all cabinets for the authenticated user with their items
    public function index()
    {
        // Fetch cabinets and their associated items for the authenticated user
        $cabinets = Cabinet::where('user_id', Auth::id())
            ->with('items') // Directly eager load the related items
            ->get();

        return response()->json(['error' => false, 'data' => $cabinets]);
    }

    // Create a new cabinet for the authenticated user
    public function create(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
        ]);

        // Create the new cabinet
        $cabinet = Cabinet::create([
            'title' => $request->input('title'),
            'user_id' => Auth::id(),
        ]);

        return response()->json(['error' => false, 'data' => $cabinet]);
    }

    // Add an item to a cabinet
    public function addItem(Request $request, $cabinetId)
    {
        $request->validate([
            'item' => 'required|string|max:255',
        ]);

        $cabinet = Cabinet::where('id', $cabinetId)
            ->where('user_id', Auth::id()) // Ensure the cabinet belongs to the authenticated user
            ->firstOrFail();

        // Create the new item for the cabinet
        $cabinet->items()->create([
            'item' => $request->input('item'),
            'cabinet_id' => $cabinetId,  // Ensure to link the item to the cabinet
        ]);

        return response()->json(['error' => false, 'data' => $cabinet->items]);
    }

    // Delete cabinets for the authenticated user
    public function delete(Request $request)
    {
        $ids = $request->input('ids');

        // Ensure the cabinets being deleted belong to the authenticated user
        $cabinets = Cabinet::whereIn('id', $ids)->where('user_id', Auth::id())->get();

        if ($cabinets->isEmpty()) {
            return response()->json(['error' => true, 'data' => 'Cabinet not found']);
        }

        // Proceed with the deletion
        CabinetItem::whereIn('cabinet_id', $ids)->delete();
        Cabinet::whereIn('id', $ids)->delete();

        return response()->json(['error' => false, 'data' => 'Cabinets deleted successfully']);
    }

    public function deleteItem(Request $request, $cabinetId)
    {
        $request->validate([
            'itemId' => 'required|integer|exists:cabinet_items,id',
        ]);

        $cabinet = Cabinet::where('id', $cabinetId)
            ->where('user_id', Auth::id())
            ->firstOrFail();

        $cabinet->items()->where('id', $request->input('itemId'))->delete();
        $cabinet->refresh();

        return response()->json(['error' => false, 'data' => $cabinet->items]);
    }

    public function update(Request $request, $cabinetId) {
        $request->validate([
            'id' => 'required|integer|exists:cabinets,id',
            'title' => 'required|string|max:25',
            //'validItems' => 'required|array',
            //'validItems.*' => 'required|string'
        ]);

        $cabinet = Cabinet::where('id', $cabinetId)
            ->where('user_id', Auth::id())
            ->firstOrFail();

        $cabinet->title = $request->get('title');
        $cabinet->save();

        $newItems = $request->get('validItems');

        foreach ($newItems as $itemData) {
            if (empty($itemData)) {
                continue;
            }

            $item = $cabinet->items()->updateOrCreate(
                [
                    'item' => $itemData
                ],
                [
                    'cabinet_id' => $cabinet->id,
                    'item' => $itemData,
                ]
            );
        }

        $newItemNames = array_map(fn($item) => $item, $newItems);
        $cabinet->items()->whereNotIn('item', $newItemNames)->delete();

        $cabinet->refresh();

        $cabinet->items;

        return response()->json(['error' => false, 'data' => $cabinet]);
    }

}
