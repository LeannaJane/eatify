<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cabinet extends Model
{
    protected $fillable = ['title', 'user_id'];

    public function items() {
        return $this->hasMany(CabinetItem::class);
    }
}
