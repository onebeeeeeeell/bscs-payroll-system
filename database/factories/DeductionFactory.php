<?php

namespace Database\Factories;

use App\Models\Payroll;
use App\Models\Deduction;
use App\Models\ContributionRate;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Deduction>
 */
class DeductionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'payroll_id' => Payroll::factory(),
            'contribution_rate_id' => ContributionRate::factory(),
            'amount',
        ];
    }
}
