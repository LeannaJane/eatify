<?php

namespace App\Http\Controllers;

use App\Models\Cabinet;
use App\Models\CabinetItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CabinetController extends Controller
{
    public function create() {
        $Cabinet = Cabinet::create(['title' => 'Fridge', 'user_id' => Auth::id()]);

        foreach(['Milk', 'Grated Cheese', 'Smoked Ham', 'Yogurt'] as $item) {
            CabinetItem::create(['item' => $item, 'cabinet_id' => $Cabinet->id]);
        }

        $Cabinet = $Cabinet->refresh()->load('items');

        return json_encode($Cabinet);
    }

    public function getAll() {
        return json_encode(Cabinet::with('items')->where('user_id', Auth::id())->get());
    }

    public function delete(Request $request) {
        $ids = $request->get('ids');
        Cabinet::destroy($ids);

        return json_encode(true);
    }
}
