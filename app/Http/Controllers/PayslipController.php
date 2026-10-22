<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Payslip;
use Illuminate\Http\Request;
class PayslipController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $payslips = Payslip::select(['id', 'payroll_id', 'date_generated'])->with([
            'payrolls:id,employee_id,payroll_period_id,user_id,gross_pay,total_deductions,net_pay,date_processed',
            ])->get();
            
            dd($payslips);
            
            return Inertia::render('payslip/index', [
                'payslips' => $payslips,
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
    public function show(Payslip $payslip)
    {
        //
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Payslip $payslip)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Payslip $payslip)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Payslip $payslip)
    {
        //
    }
}