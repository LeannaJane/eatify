<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'password_confirmation' => 'required'
        ]);

        if($validator->fails()) {
            return json_encode(["error" => true, "data" => $validator->errors()]);
        }

        if($request->get('password') != $request->get('password_confirmation')) {
            return json_encode(["error" => true, "data" => "Passwords do not match"]);
        }

        User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password'))
        ]);

        if(Auth::attempt(["email" => $request->get("email"), "password" => $request->get("password")])) {
            return json_encode(["error" => false, "data" => Auth::user()]);
        }

        return json_encode(["error" => true, 'data' => null]);
    }
}
