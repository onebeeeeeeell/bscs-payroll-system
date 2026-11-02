<?php

namespace App\Services;

use App\Models\ContributionRate;
use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\LengthAwarePaginator;

class ContributionRateService
{
    public function paginate(?string $search = null, int $perPage = 10): LengthAwarePaginator
    {
        return ContributionRate::query()
            ->with(['contributionType:id,name'])
           
            ->when($search, fn ($query) => $query->where(function ($query) use ($search) {
                $query->whereHas('contributionType', fn ($type) => $type->where('name', 'ilike', "%{$search}%"));
            }))
            ->latest()
            ->paginate($perPage)
            ->withQueryString(); 
    }

    public function create(array $data): ContributionRate
    {
       
        return DB::transaction(
            fn () => ContributionRate::create($data)
        );
    }

    public function update(ContributionRate $contributionRate, array $data): ContributionRate
    {
        return DB::transaction(function () use ($contributionRate, $data) {
            $contributionRate->update($data);

            return $contributionRate;
        });
    }

    public function delete(ContributionRate $contributionRate): void
    {
        DB::transaction(
            fn () => $contributionRate->delete()
        );
    }
}