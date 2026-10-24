<?php
namespace App\Http\Requests\ContributionRate;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
class ContributionRateRequest extends FormRequest
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
            'contribution_type_id' => [$required, 'integer', 'exists:contribution_types,id'],
            'rate' => [$required, 'numeric', 'min:0'],
        ];
    }
}