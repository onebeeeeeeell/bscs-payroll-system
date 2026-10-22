<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Payroll;
use Illuminate\Http\Request;
class PayrollController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $payrolls = Payroll::select(['id', 'employee_id', 'payroll_period_id', 'user_id', 'gross_pay', 'total_deductions', 'net_pay', 'date_processed'])->with([
            'employees:id, first_name, last_name, suffix, position_id, department_id, date_hired, daily_rate, sss_no, philhealth_no, pagibig_no, tin_no, status',
            'payroll_periods:id,start_date,end_date,pay_date,status',
            'users:id,name,email,password',
        ])->get();
        dd($payrolls);
        return Inertia::render('payroll/index', [
            'payrolls' => $payrolls,
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
    public function show(Payroll $payroll)
    {
        //
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Payroll $payroll)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Payroll $payroll)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Payroll $payroll)
    {
        //
    }
}