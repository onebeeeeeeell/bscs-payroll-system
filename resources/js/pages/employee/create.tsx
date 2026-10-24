import AppLayout from '@/layouts/app-layout';
import type { Department, Position } from '@/types/models';
import { Head } from '@inertiajs/react';
import EmployeeForm from './employee-form';

type Props = {
    positions: Pick<Position, 'id' | 'title'>[];
    departments: Pick<Department, 'id' | 'department_name'>[];
};

export default function CreateEmployee({ positions, departments }: Props) {
    return (
        <AppLayout>
            <Head title="Create Employee" />
            <div className="mx-auto w-full max-w-4xl min-w-0 space-y-6 p-4 md:p-6">
                <div className="space-y-1">
                    <h1 className="text-2xl font-semibold tracking-tight">Create Employee</h1>
                    <p className="text-muted-foreground text-sm">Enter the employee details below.</p>
                </div>
                <EmployeeForm positions={positions} departments={departments} />
            </div>
        </AppLayout>
    );
}
