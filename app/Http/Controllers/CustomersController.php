<?php

namespace App\Http\Controllers;

use App\Customer;

class CustomersController extends Controller
{
    public function index()
    {
        return view('customers.index');
    }

    public function show(Customer $customer)
    {
    }
}
