<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Department;
use Illuminate\Http\Request;
class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $departments = Department::select(['id', 'department_name'])->with([
            'employees:id, first_name, last_name, suffix, position_id, department_id, date_hired, daily_rate, sss_no, philhealth_no, pagibig_no, tin_no, status',
        ]);
        dd($departments);
        return Inertia::render('department/index', [
            'departments' => $departments,
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
    public function show(Department $department)
    {
        //
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Department $department)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Department $department)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        //
    }
}