<?php

namespace App\Http\Requests\Employee;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EmployeeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $required = $this->isMethod('PATCH') ? 'sometimes' : 'required';
        $employee = $this->route('employee');

        return [
            'first_name' => [$required, 'string', 'max:255'],
            'last_name' => [$required, 'string', 'max:255'],
            'suffix' => ['nullable', 'string', 'max:50'],
            'position_id' => [$required, 'integer', 'exists:positions,id'],
            'department_id' => [$required, 'integer', 'exists:departments,id'],
            'date_hired' => [$required, 'date', 'after_or_equal:today'],
            'daily_rate' => [$required, 'numeric', 'min:0'],
            'sss_no' => ['nullable', 'string', 'max:20', Rule::unique('employees', 'sss_no')->ignore($employee)],
            'philhealth_no' => ['nullable', 'string', 'max:20', Rule::unique('employees', 'philhealth_no')->ignore($employee)],
            'pagibig_no' => ['nullable', 'string', 'max:20', Rule::unique('employees', 'pagibig_no')->ignore($employee)],
            'tin_no' => ['nullable', 'string', 'max:20', Rule::unique('employees', 'tin_no')->ignore($employee)],
            'status' => [$required, Rule::in(['Casual', 'Regular', 'Permanent'])],
        ];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'date_hired.after_or_equal' => 'The hire date must be today or a future date.',
        ];
    }
}
