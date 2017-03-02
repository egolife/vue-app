<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class PageAccessTest extends TestCase
{
    /**
     * @test
     * @dataProvider pages
     */
    public function it_can_access_pages($url, $contentFragment)
    {
        $this->get($url)
            ->assertStatus(200)
            ->assertSee($contentFragment);
    }

    public function pages()
    {
        return [
            ['es6-learning', 'Learning es6'],
        ];
    }
}
