<?php

namespace Database\Factories;

use App\Models\ContributionType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<ContributionType>
 */
class ContributionTypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
        ];
    }
}
