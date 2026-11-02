<?php

namespace App\Services;

use App\Models\Payslip;
use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\LengthAwarePaginator;

class PayslipService
{
    public function paginate(int $perPage = 10): LengthAwarePaginator
    {
        return Payslip::query()
            ->with(['payroll:id,employee_id,gross_pay,total_deductions,net_pay', 'payroll.employee:id,first_name,last_name,suffix'])
            ->latest('date_generated')
            ->paginate($perPage)
            ->withQueryString(); 
    }

    public function create(array $data): Payslip
    {
       
        return DB::transaction(
            fn () => Payslip::create($data)
        );
    }

    public function update(Payslip $payslip, array $data): Payslip
    {
        return DB::transaction(function () use ($payslip, $data) {
            $payslip->update($data);

            return $payslip;
        });
    }

    public function delete(Payslip $payslip): void
    {
        DB::transaction(
            fn () => $payslip->delete()
        );
    }
}