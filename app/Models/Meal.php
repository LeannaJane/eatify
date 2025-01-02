<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    protected $fillable = ['food_api_id', 'name', 'calories', 'carbohydrate', 'protein', 'fat', 'saturated_fat', 'polyunsaturated_fat', 'monounsaturated_fat',
                        'cholesterol', 'sodium', 'potassium', 'fiber', 'sugar', 'vitamin_a', 'vitamin_c', 'calcium', 'iron'];
}
