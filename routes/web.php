<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PayrollController;
use App\Http\Controllers\PayslipController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\PositionController;
use App\Http\Controllers\DeductionController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\PayrollPeriodController;
use App\Http\Controllers\ContributionRateController;
use App\Http\Controllers\ContributionTypeController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('attendances', AttendanceController::class);
    Route::resource('contribution-rates', ContributionRateController::class);
    Route::resource('contribution-types', ContributionTypeController::class);
    Route::resource('departments', DepartmentController::class);
    Route::resource('positions', PositionController::class);
    Route::resource('payrolls', PayrollController::class);
    Route::resource('deductions', DeductionController::class);
    Route::resource('payslips', PayslipController::class);
    Route::resource('payroll-periods', PayrollPeriodController::class);
    Route::resource('employees', EmployeeController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';