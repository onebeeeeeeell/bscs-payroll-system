<?php

namespace Database\Factories;

use App\Models\Attendance;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Attendance>
 */
class AttendanceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'employee_id' => Attendance::factory(),
            'work_date' => $this->faker->date(),
            'time_in' => $this->faker,
            'time_out' => $this->faker,
            'hours_worked',
            'overtime_hours'


        ];
    }
}
