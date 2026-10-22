<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Attendance;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $attendances = Attendance::select(['id', 'employee_id', 'work_date', 'time_in', 'time_out', 'hours_worked', 'overtime_hours'])->with([
            'employees:id, first_name, last_name, suffix, position_id, department_id, date_hired, daily_rate, sss_no, philhealth_no, pagibig_no, tin_no, status',
        ])->get();
        dd($attendances);
        return Inertia::render('attendance/index', [
            'attendances' => $attendances,
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
    public function show(Attendance $attendance)
    {
        //
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Attendance $attendance)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Attendance $attendance)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Attendance $attendance)
    {
        //
    }
}
