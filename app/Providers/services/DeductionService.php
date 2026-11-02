<?php

namespace App\Services;

use App\Models\Deduction;
use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\LengthAwarePaginator;

class DeductionService
{
    public function paginate(int $perPage = 10): LengthAwarePaginator
    {
        return Deduction::query()
            ->with(['payroll:id,employee_id,net_pay', 'contributionRate.contributionType:id,name'])
            ->latest()
            ->paginate($perPage)
            ->withQueryString();
    }

    public function create(array $data): Deduction
    {
        
        return DB::transaction(
            fn () => Deduction::create($data)
        );
    }

    public function update(Deduction $deduction, array $data): Deduction
    {
        return DB::transaction(function () use ($deduction, $data) {
            $deduction->update($data);

            return $deduction;
        });
    }

    public function delete(Deduction $deduction): void
    {
        DB::transaction(
            fn () => $deduction->delete()
        );
    }
}