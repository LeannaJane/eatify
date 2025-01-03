<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('meals', function (Blueprint $table) {
            $table->id();
            $table->integer('food_api_id');
            $table->string('name');
            $table->string('image_id');
            $table->double('calories')->default(0);
            $table->double('carbohydrate')->default(0);
            $table->double('protein')->default(0);
            $table->double('fat')->default(0);
            $table->double('saturated_fat')->default(0);
            $table->double('polyunsaturated_fat')->default(0);
            $table->double('monounsaturated_fat')->default(0);
            $table->double('cholesterol')->default(0);
            $table->double('sodium')->default(0);
            $table->double('potassium')->default(0);
            $table->double('fiber')->default(0);
            $table->double('sugar')->default(0);
            $table->double('vitamin_a')->default(0);
            $table->double('vitamin_c')->default(0);
            $table->double('calcium')->default(0);
            $table->double('iron')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meals');
    }
};
