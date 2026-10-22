<?php

namespace Database\Factories;

use App\Models\Employee;
use App\Models\Position;
use App\Models\Department;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_name' => $this->faker->factory(),
            'last_name' => $this->faker->factory(),
            'suffix' => $this->faker->factory(),
            'position_id' => Position::factory(),
            'department_id' => Department::factory(),
            'date_hired',
            'daily_rate',
            'sss_no',
            'philhealth_no',
            'pagibig_no',
            'tin_no',
            'status'
        ];
    }
}
