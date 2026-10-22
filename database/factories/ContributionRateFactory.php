<?php

namespace Database\Factories;

use App\Models\ContributionRate;
use App\Models\ContributionType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<ContributionRate>
 */
class ContributionRateFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'contribution_type_id' => ContributionType::factory(),
            'rate' => $this->faker->randomFloat(2, 10, 99),
        ];
    }
}
