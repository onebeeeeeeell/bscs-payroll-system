<?php
namespace App\Http\Requests\Payslip;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class PayslipRequest extends FormRequest
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
        $payslip = $this->route('payslip');
        return [
            'payroll_id' => [
                $required,
                'integer',
                'exists:payrolls,id',
                Rule::unique('payslips', 'payroll_id')->ignore($payslip),
            ],
            'date_generated' => [$required, 'date'],
        ];
    }
}