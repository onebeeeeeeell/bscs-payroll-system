<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\ContributionRate;
use Illuminate\Http\Request;
class ContributionRateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contributionRates = ContributionRate::select(['id', 'contribution_type_id', 'rate'])->with([
            'contribution_type:id,name',
            'deductions:payroll_id, contribution_rate_id, amount',
        ])->get();
        dd($contributionRates);
        return Inertia::render('contribution-rate/index', [
            'contributionRates' => $contributionRates,
        ]);
        //
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }
    /**
     * Display the specified resource.
     */
    public function show(ContributionRate $contributionRate)
    {
        //
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ContributionRate $contributionRate)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ContributionRate $contributionRate)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContributionRate $contributionRate)
    {
        //
    }
}