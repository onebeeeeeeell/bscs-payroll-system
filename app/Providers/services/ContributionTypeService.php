<?php

namespace App\Services;

use App\Models\ContributionType;
use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\LengthAwarePaginator;

class ContributionTypeService
{
    public function paginate(?string $search = null, int $perPage = 10): LengthAwarePaginator
    {
        return ContributionType::query()
            ->with(['contributionRates:id,contribution_type_id,rate'])
           
            ->when($search, fn ($query) => $query->where(function ($query) use ($search) {
                $query->where('name', 'ilike', "%{$search}%");
            }))
            ->latest()
            ->paginate($perPage)
            ->withQueryString(); 
    }

    public function create(array $data): ContributionType
    {
        
        return DB::transaction(
            fn () => ContributionType::create($data)
        );
    }

    public function update(ContributionType $contributionType, array $data): ContributionType
    {
        return DB::transaction(function () use ($contributionType, $data) {
            $contributionType->update($data);

            return $contributionType;
        });
    }

    public function delete(ContributionType $contributionType): void
    {
        DB::transaction(
            fn () => $contributionType->delete()
        );
    }
}