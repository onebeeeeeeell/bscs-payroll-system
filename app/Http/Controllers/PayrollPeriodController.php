<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\PayrollPeriod;
use Illuminate\Http\Request;
class PayrollPeriodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $payrollPeriods = PayrollPeriod::select(['id', 'start_date', 'end_date', 'pay_date', 'status'])->with([
           'payrolls:id,employee_id,payroll_period_id,user_id,gross_pay,total_deductions,net_pay,date_processed',
           ])->get();
           
           dd($payrollPeriods);
           
           return Inertia::render('payroll-period/index', [
            'payrollPeriods' => $payrollPeriods,
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
    public function show(PayrollPeriod $payrollPeriod)
    {
        //
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PayrollPeriod $payrollPeriod)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PayrollPeriod $payrollPeriod)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PayrollPeriod $payrollPeriod)
    {
        //
    }
}