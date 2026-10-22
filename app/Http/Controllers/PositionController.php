<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Position;
use Illuminate\Http\Request;
class PositionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $positions = Position::select(['id', 'title'])->with([
            'employees:id, first_name, last_name, suffix, position_id, department_id, date_hired, daily_rate, sss_no, philhealth_no, pagibig_no, tin_no, status',
            ])->get();
            
            dd($positions);
            
            return Inertia::render('position/index', [
                'positions' => $positions,
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
    public function show(Position $position)
    {
        //
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Position $position)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Position $position)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Position $position)
    {
        //
    }
}