<?php
namespace App\Http\Requests\Deduction;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
class DeductionRequest extends FormRequest
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
            'payroll_id' => [$required, 'integer', 'exists:payrolls,id'],
            'contribution_rate_id' => [$required, 'integer', 'exists:contribution_rates,id'],
            'amount' => [$required, 'numeric', 'min:0'],
        ];
    }
}