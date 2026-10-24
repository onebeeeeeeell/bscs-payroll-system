<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Employee;
use App\Models\Department;
use App\Models\Position;
use App\Http\Requests\Employee\EmployeeRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $search = request()->string('search')->trim()->toString();

        $employees = Employee::query()
            ->with(['position:id,title', 'department:id,department_name'])
            ->when($search !== '', function ($query) use ($search) {
                $query->where(function ($query) use ($search) {
                    $query->where('first_name', 'like', "%{$search}%")
                        ->orWhere('last_name', 'like', "%{$search}%")
                        ->orWhere('sss_no', 'like', "%{$search}%")
                        ->orWhere('philhealth_no', 'like', "%{$search}%")
                        ->orWhere('pagibig_no', 'like', "%{$search}%")
                        ->orWhere('tin_no', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('employee/index', [
            'employees' => $employees,
            'filters' => ['search' => $search],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('employee/create', [
            'positions' => Position::query()->orderBy('title')->get(['id', 'title']),
            'departments' => Department::query()->orderBy('department_name')->get(['id', 'department_name']),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EmployeeRequest $request): RedirectResponse
    {
        Employee::create($request->validated());

        return to_route('employees.index')->with('success', 'Employee created successfully.');
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
    public function edit(Employee $employee): Response
    {
        return Inertia::render('employee/edit', [
            'employee' => $employee,
            'positions' => Position::query()->orderBy('title')->get(['id', 'title']),
            'departments' => Department::query()->orderBy('department_name')->get(['id', 'department_name']),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EmployeeRequest $request, Employee $employee): RedirectResponse
    {
        $employee->update($request->validated());

        return to_route('employees.index')->with('success', 'Employee updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        $employee->delete();

        return to_route('employees.index')->with('success', 'Employee deleted successfully.');
    }
}
