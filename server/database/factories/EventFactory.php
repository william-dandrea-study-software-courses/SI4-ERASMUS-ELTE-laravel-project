<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title'     => $this->faker->jobTitle(),
            'location'  => $this->faker->address(),
            'note'      => $this->faker->realText($maxNbChars = 200, $indexSize = 2),
            'date'      => $this->faker->iso8601($max = 'now'),
        ];
    }
}
