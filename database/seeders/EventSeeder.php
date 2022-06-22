<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('events')->insert(
            [
                'name' => 'Pulp Summer Slam 2022',
                'slug' => 'PULP22',
                'startAt' => '2022-11-10 08:00:00',
                'endAt' => '2022-11-11 23:00:00',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
        );

        DB::table('events')->insert(
            [
                'name' => 'BTS Army Fan Club',
                'slug' => 'BTS',
                'startAt' => '2022-12-25 08:00:00',
                'endAt' => '2022-12-25 23:00:00',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
        );

        DB::table('events')->insert(
            [
                'name' => 'Taylor Swift',
                'slug' => 'TS22',
                'startAt' => '2022-01-01 06:00:00',
                'endAt' => '2022-12-30 23:00:00',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
        );

        DB::table('events')->insert(
            [
                'name' => 'Meta',
                'slug' => 'METAFB',
                'startAt' => '2023-01-01 12:00:00',
                'endAt' => '2023-01-01 00:00:00',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
        );

        DB::table('events')->insert(
            [
                'name' => 'Crypto',
                'slug' => 'CRYGODS',
                'startAt' => '2023-12-01 09:00:00',
                'endAt' => '2023-12-01 00:00:00',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
        );
    }
}
