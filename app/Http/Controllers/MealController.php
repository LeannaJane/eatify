<?php

namespace App\Http\Controllers;

use App\Models\Meal;
use Illuminate\Http\Request;

class MealController extends Controller
{
    public function getMeals(Request $request) {
        $meals = null;
        if($request->has('search')) {
            $meals = Meal::where('name', 'LIKE', '%'.$request->get('search').'%')->get();
        } else {
            $meals = Meal::all();
        }
        return json_encode(['error' => false, 'data' => $meals]);
    }

    public function getMeal(Request $request, $id) {
        if($id == null && !is_numeric($id)) {
            return json_encode(['error' => true, 'data' => "Invalid food id"]);
        }

        $Meal = Meal::find($id);
        return json_encode(['error' => false, 'data' => $Meal]);
    }
}
