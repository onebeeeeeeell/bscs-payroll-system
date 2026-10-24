import AppLayout from '@/layouts/app-layout';
import type { Department, Employee, Position } from '@/types/models';
import { Head } from '@inertiajs/react';
import EmployeeForm from './employee-form';

type Props = {
    employee: Employee;
    positions: Pick<Position, 'id' | 'title'>[];
    departments: Pick<Department, 'id' | 'department_name'>[];
};

export default function EditEmployee({ employee, positions, departments }: Props) {
    return (
        <AppLayout>
            <Head title={`Edit ${employee.first_name} ${employee.last_name}`} />
            <div className="mx-auto w-full max-w-4xl min-w-0 space-y-6 p-4 md:p-6">
                <div className="space-y-1">
                    <h1 className="text-2xl font-semibold tracking-tight">Edit Employee</h1>
                    <p className="text-muted-foreground text-sm">
                        Update {employee.first_name} {employee.last_name}&apos;s details.
                    </p>
                </div>
                <EmployeeForm employee={employee} positions={positions} departments={departments} />
            </div>
        </AppLayout>
    );
}
