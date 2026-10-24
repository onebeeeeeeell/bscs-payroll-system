<?php
namespace App\Http\Requests\Attendance;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
class AttendanceRequest extends FormRequest
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
        return [
            'employee_id' => [$required, 'integer', 'exists:employees,id'],
            'work_date' => [$required, 'date'],
            'time_in' => [$required, 'date_format:H:i'],
            'time_out' => [$required, 'date_format:H:i'],
            'hours_worked' => [$required, 'numeric', 'min:0'],
            'overtime_hours' => [$required, 'numeric', 'min:0'],
        ];
    }
}