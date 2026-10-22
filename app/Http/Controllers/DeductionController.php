<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Deduction;
use Illuminate\Http\Request;
class DeductionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $deductions = Deduction::select(['id', 'payroll_id', 'contribution_rate_id', 'amount',])->with([
            'payrolls:id,employee_id,payroll_period_id,user_id,gross_pay,total_deductions,net_pay,date_processed',
            'contribution_rate:id,contribution_type_id,rate',
        ])->get();
        dd($deductions);
        return Inertia::render('deduction/index', [
            'deductions' => $deductions,
        ]);
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
    public function show(Deduction $deduction)
    {
        //
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Deduction $deduction)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Deduction $deduction)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Deduction $deduction)
    {
        //
    }
}