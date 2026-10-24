import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Department, Employee, Position } from '@/types/models';
import { Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';

type Props = {
    employee?: Employee;
    positions: Pick<Position, 'id' | 'title'>[];
    departments: Pick<Department, 'id' | 'department_name'>[];
};

function getTodayDate(): string {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${today.getFullYear()}-${month}-${day}`;
}

export default function EmployeeForm({ employee, positions, departments }: Props) {
    const editing = Boolean(employee);
    const today = getTodayDate();
    const form = useForm({
        first_name: employee?.first_name ?? '',
        last_name: employee?.last_name ?? '',
        suffix: employee?.suffix ?? '',
        position_id: employee ? String(employee.position_id) : '',
        department_id: employee ? String(employee.department_id) : '',
        date_hired: employee?.date_hired ?? '',
        daily_rate: employee ? String(employee.daily_rate) : '',
        sss_no: employee?.sss_no ?? '',
        philhealth_no: employee?.philhealth_no ?? '',
        pagibig_no: employee?.pagibig_no ?? '',
        tin_no: employee?.tin_no ?? '',
        status: employee?.status ?? 'Casual',
    });

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (employee) {
            form.put(route('employees.update', employee.id));
            return;
        }

        form.post(route('employees.store'));
    }

    function fieldError(name: keyof typeof form.data) {
        const message = form.errors[name];
        return message ? <p className="text-destructive text-sm">{message}</p> : null;
    }

    return (
        <form onSubmit={submit} className="min-w-0 space-y-6">
            <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="first_name">First name</Label>
                    <Input
                        id="first_name"
                        value={form.data.first_name}
                        onChange={(event) => form.setData('first_name', event.target.value)}
                        maxLength={255}
                        required
                        disabled={form.processing}
                        aria-invalid={Boolean(form.errors.first_name)}
                    />
                    {fieldError('first_name')}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="last_name">Last name</Label>
                    <Input
                        id="last_name"
                        value={form.data.last_name}
                        onChange={(event) => form.setData('last_name', event.target.value)}
                        maxLength={255}
                        required
                        disabled={form.processing}
                        aria-invalid={Boolean(form.errors.last_name)}
                    />
                    {fieldError('last_name')}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="suffix">Suffix</Label>
                    <Input
                        id="suffix"
                        value={form.data.suffix}
                        onChange={(event) => form.setData('suffix', event.target.value)}
                        maxLength={50}
                        disabled={form.processing}
                        aria-invalid={Boolean(form.errors.suffix)}
                    />
                    {fieldError('suffix')}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="position_id">Position</Label>
                    <select
                        id="position_id"
                        value={form.data.position_id}
                        onChange={(event) => form.setData('position_id', event.target.value)}
                        required
                        disabled={form.processing}
                        aria-invalid={Boolean(form.errors.position_id)}
                        className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                    >
                        <option value="" disabled>
                            Select a position
                        </option>
                        {positions.map((position) => (
                            <option key={position.id} value={position.id}>
                                {position.title}
                            </option>
                        ))}
                    </select>
                    {fieldError('position_id')}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="department_id">Department</Label>
                    <select
                        id="department_id"
                        value={form.data.department_id}
                        onChange={(event) => form.setData('department_id', event.target.value)}
                        required
                        disabled={form.processing}
                        aria-invalid={Boolean(form.errors.department_id)}
                        className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                    >
                        <option value="" disabled>
                            Select a department
                        </option>
                        {departments.map((department) => (
                            <option key={department.id} value={department.id}>
                                {department.department_name}
                            </option>
                        ))}
                    </select>
                    {fieldError('department_id')}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="date_hired">Date hired</Label>
                    <Input
                        id="date_hired"
                        type="date"
                        min={today}
                        value={form.data.date_hired}
                        onChange={(event) => form.setData('date_hired', event.target.value)}
                        required
                        disabled={form.processing}
                        aria-invalid={Boolean(form.errors.date_hired)}
                    />
                    {fieldError('date_hired')}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="daily_rate">Daily rate</Label>
                    <Input
                        id="daily_rate"
                        type="number"
                        min="0"
                        step="0.01"
                        value={form.data.daily_rate}
                        onChange={(event) => form.setData('daily_rate', event.target.value)}
                        required
                        disabled={form.processing}
                        aria-invalid={Boolean(form.errors.daily_rate)}
                    />
                    {fieldError('daily_rate')}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="status">Employment status</Label>
                    <select
                        id="status"
                        value={form.data.status}
                        onChange={(event) => form.setData('status', event.target.value as typeof form.data.status)}
                        required
                        disabled={form.processing}
                        aria-invalid={Boolean(form.errors.status)}
                        className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                    >
                        <option value="Casual">Casual</option>
                        <option value="Regular">Regular</option>
                        <option value="Permanent">Permanent</option>
                    </select>
                    {fieldError('status')}
                </div>

                {(
                    [
                        ['sss_no', 'SSS number'],
                        ['philhealth_no', 'PhilHealth number'],
                        ['pagibig_no', 'Pag-IBIG number'],
                        ['tin_no', 'TIN'],
                    ] as const
                ).map(([name, label]) => (
                    <div key={name} className="space-y-2">
                        <Label htmlFor={name}>{label}</Label>
                        <Input
                            id={name}
                            value={form.data[name]}
                            onChange={(event) => form.setData(name, event.target.value)}
                            maxLength={20}
                            disabled={form.processing}
                            aria-invalid={Boolean(form.errors[name])}
                        />
                        {fieldError(name)}
                    </div>
                ))}
            </div>

            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
                <Button className="w-full sm:w-auto" type="submit" disabled={form.processing}>
                    {form.processing ? 'Saving...' : editing ? 'Update Employee' : 'Create Employee'}
                </Button>
                <Button className="w-full sm:w-auto" type="button" variant="outline" asChild>
                    <Link href={route('employees.index')}>Cancel</Link>
                </Button>
            </div>
        </form>
    );
}
