<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CabinetItem extends Model
{
    protected $fillable = ['item', 'cabinet_id'];

    public function cabinet()
    {
        return $this->belongsTo(Cabinet::class, 'cabinet_id');
    }
}
