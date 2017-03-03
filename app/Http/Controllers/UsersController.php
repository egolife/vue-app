<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Response;

class UsersController extends Controller
{
    public function index()
    {
        return response()->json(['users' => User::latest()->get()]);
    }

    public function store()
    {
        $this->validate(request(), [
            'username' => 'required',
            'email'    => 'required|email|unique:users'
        ]);

        $user = User::create([
            'email'    => request('email'),
            'username' => request('username'),
            'password' => bcrypt('secret')
        ]);

        return response()->json(['user' => $user], Response::HTTP_CREATED);
    }

    public function update(User $user)
    {
        $user->update(request()->all());
        return response()->json(['mesasge' => 'User updated', 'user' => $user]);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return response()->json(['message' => 'User was deleted'], Response::HTTP_NO_CONTENT);
    }
}
