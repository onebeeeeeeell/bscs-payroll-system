<?php

namespace App\Services;

use App\Models\Employee;
use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\LengthAwarePaginator;

class EmployeeService
{
    public function paginate(?string $search = null, int $perPage = 10): LengthAwarePaginator
    {
        return Employee::query()
            ->with(['position:id,title', 'department:id,department_name'])
           
            ->when($search, fn ($query) => $query->where(function ($query) use ($search) {
                $query->where('first_name', 'ilike', "%{$search}%")
                    ->orWhere('last_name', 'ilike', "%{$search}%");
            }))
            ->latest()
            ->paginate($perPage)
            ->withQueryString(); 
    }

    public function create(array $data): Employee
    {
        
        return DB::transaction(
            fn () => Employee::create($data)
        );
    }

    public function update(Employee $employee, array $data): Employee
    {
        return DB::transaction(function () use ($employee, $data) {
            $employee->update($data);

            return $employee;
        });
    }

    public function delete(Employee $employee): void
    {
        DB::transaction(
            fn () => $employee->delete()
        );
    }
}