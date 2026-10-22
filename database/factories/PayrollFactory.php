<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Payroll;
use App\Models\Employee;
use App\Models\PayrollPeriod;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Payroll>
 */
class PayrollFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'employee_id' => Employee::factory(),
            'payroll_period_id' => PayrollPeriod::factory(),
            'user_id' => User::factory(),
            'gross_pay',
            'total_deductions',
            'net_pay',
            'date_processed'
        ];
    }
}
