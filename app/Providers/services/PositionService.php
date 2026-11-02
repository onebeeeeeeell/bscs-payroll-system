<?php

namespace App\Services;

use App\Models\Position;
use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\LengthAwarePaginator;

class PositionService
{
    public function paginate(?string $search = null, int $perPage = 10): LengthAwarePaginator
    {
        return Position::query()
            ->withCount('employees')
           
            ->when($search, fn ($query) => $query->where(function ($query) use ($search) {
                $query->where('title', 'ilike', "%{$search}%");
            }))
            ->latest()
            ->paginate($perPage)
            ->withQueryString(); 
    }

    public function create(array $data): Position
    {
       
        return DB::transaction(
            fn () => Position::create($data)
        );
    }

    public function update(Position $position, array $data): Position
    {
        return DB::transaction(function () use ($position, $data) {
            $position->update($data);

            return $position;
        });
    }

    public function delete(Position $position): void
    {
        DB::transaction(
            fn () => $position->delete()
        );
    }
}