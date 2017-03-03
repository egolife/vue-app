<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::truncate();
        \App\News::truncate();
        $this->call(UsersTableSeeder::class);
//        $this->call(NewsTableSeeder::class);
    }
}
