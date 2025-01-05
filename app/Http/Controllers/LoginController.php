<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:255',
            'password' => 'required|max:255'
        ]);

        if($validator->fails()) {
            return json_encode(["error" => true, "data" => $validator->errors()]);
        }

        if(Auth::attempt(["email" => $request->get("email"), "password" => $request->get("password")], $request->get("remember"))) {
            $request->session()->regenerate();
            return json_encode(["error" => false, "data" => Auth::user()]);
        } else {
            return json_encode(["error" => true, "data" => "Invalid username/password"]);
        }
    }

    public function check(Request $request) {
        if(Auth::check()) {
            return json_encode(["error" => false, "data" => Auth::user()]);
        } else {
            return json_encode(["error" => false, "data" => null]);
        }
    }

    public function logout(Request $request) {
        Auth::logout();
        return json_encode(["error" => false, "data" => true]);
    }
}
