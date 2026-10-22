<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Employee;
use Illuminate\Http\Request;
class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::select(['id', 'first_name', 'last_name', 'suffix', 'position_id', 'department_id', 'date_hired', 'daily_rate', 'sss_no', 'philhealth_no', 'pagibig_no', 'tin_no', 'status'])->with([
          'positions:id,title',
           'departments:id, department_name',
           'attendances:id,employee_id,work_date,time_in,time_out,hours_worked,overtime_hours',
           'payrolls:id,employee_id,payroll_period_id,user_id,gross_pay,total_deductions,net_pay,date_processed',
           ])->get();
           
           dd($employees);
           
           return Inertia::render('employee/index', [
            'employees' => $employees,
            ]);//
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
    public function show(Employee $employee)
    {
        //
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        //
    }
}