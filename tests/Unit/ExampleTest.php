<?php

namespace Tests\Unit;

use App\News;
use Carbon\Carbon;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ExampleTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $this->assertTrue(true);
    }

    /**
     * @test
     */
    public function it_can_list_news()
    {
        // Two news posted in different months
        $first = factory(News::class)->create();
        $second = factory(News::class)->create([
            'created_at' => Carbon::parse('-1 month')
        ]);

        $archive = News::archives();

        $this->assertCount(2, $archive);
        $this->assertEquals([
            [
                'year'  => (int)$first->created_at->format('Y'),
                'month' => $first->created_at->format('F'),
                'count' => 1
            ],
            [
                'year'  => (int)$second->created_at->format('Y'),
                'month' => $second->created_at->format('F'),
                'count' => 1
            ]
        ], $archive);
    }
}
