<?php

namespace App\Services;

use App\Models\Attendance;
use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\LengthAwarePaginator;

class AttendanceService
{
    public function paginate(?string $search = null, int $perPage = 10): LengthAwarePaginator
    {
        return Attendance::query()
            ->with(['employee:id,first_name,last_name,suffix'])
           
            ->when($search, fn ($query) => $query->where(function ($query) use ($search) {
                $query->whereHas('employee', fn ($employee) => $employee
                    ->where('first_name', 'ilike', "%{$search}%")
                    ->orWhere('last_name', 'ilike', "%{$search}%"));
            }))
            ->latest('work_date')
            ->paginate($perPage)
            ->withQueryString(); 
    }

    public function create(array $data): Attendance
    {
       
        return DB::transaction(
            fn () => Attendance::create($data)
        );
    }

    public function update(Attendance $attendance, array $data): Attendance
    {
        return DB::transaction(function () use ($attendance, $data) {
            $attendance->update($data);

            return $attendance;
        });
    }

    public function delete(Attendance $attendance): void
    {
        DB::transaction(
            fn () => $attendance->delete()
        );
    }
}