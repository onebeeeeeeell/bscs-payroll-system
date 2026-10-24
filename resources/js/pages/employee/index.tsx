import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import type { Employee, PaginatedData } from '@/types/models';
import { Head, Link, router } from '@inertiajs/react';
import { useState, type FormEvent } from 'react';

type Props = {
    employees: PaginatedData<Employee>;
    filters: {
        search: string;
    };
};

export default function EmployeeIndex({ employees, filters }: Props) {
    const [search, setSearch] = useState(filters.search);

    function submitSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        router.get(route('employees.index'), { search }, { preserveState: true, replace: true });
    }

    return (
        <AppLayout>
            <Head title="Employees" />
            <div className="flex w-full min-w-0 flex-col gap-6 p-4 md:p-6">
                <div className="flex min-w-0 flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-semibold tracking-tight">Employees</h1>
                        <p className="text-muted-foreground text-sm">Manage employee records.</p>
                    </div>
                    <Button className="w-full sm:w-auto" asChild>
                        <Link href={route('employees.create')}>Add Employee</Link>
                    </Button>
                </div>

                <form onSubmit={submitSearch} className="flex min-w-0 flex-col gap-2 sm:flex-row">
                    <Input
                        className="min-w-0 sm:flex-1"
                        aria-label="Search employees"
                        placeholder="Search name or identification number"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <Button className="w-full sm:w-auto" type="submit">
                        Search
                    </Button>
                    {filters.search && (
                        <Button className="w-full sm:w-auto" type="button" variant="outline" asChild>
                            <Link href={route('employees.index')}>Clear</Link>
                        </Button>
                    )}
                </form>

                <div className="bg-card text-card-foreground hidden overflow-x-auto rounded-xl border md:block">
                    <table className="w-full min-w-[760px] text-sm">
                        <thead>
                            <tr className="border-b text-left">
                                <th className="px-4 py-3 font-medium">Employee</th>
                                <th className="px-4 py-3 font-medium">Position</th>
                                <th className="px-4 py-3 font-medium">Department</th>
                                <th className="px-4 py-3 font-medium">Date Hired</th>
                                <th className="px-4 py-3 font-medium">Daily Rate</th>
                                <th className="px-4 py-3 font-medium">Status</th>
                                <th className="px-4 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.data.length > 0 ? (
                                employees.data.map((employee) => (
                                    <tr key={employee.id} className="border-b last:border-0">
                                        <td className="px-4 py-3">
                                            {[employee.first_name, employee.last_name, employee.suffix].filter(Boolean).join(' ')}
                                        </td>
                                        <td className="px-4 py-3">{employee.position?.title ?? '—'}</td>
                                        <td className="px-4 py-3">{employee.department?.department_name ?? '—'}</td>
                                        <td className="px-4 py-3">{employee.date_hired}</td>
                                        <td className="px-4 py-3">
                                            {Number(employee.daily_rate).toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })}
                                        </td>
                                        <td className="px-4 py-3">{employee.status}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline" size="sm" asChild>
                                                    <Link href={route('employees.edit', employee.id)}>Edit</Link>
                                                </Button>
                                            </div>

                                            <div className="grid min-w-0 gap-3 md:hidden">
                                                {employees.data.length > 0 ? (
                                                    employees.data.map((employee) => (
                                                        <article
                                                            key={employee.id}
                                                            className="bg-card text-card-foreground min-w-0 space-y-4 rounded-xl border p-4"
                                                        >
                                                            <div className="min-w-0">
                                                                <h2 className="font-semibold break-words">
                                                                    {[employee.first_name, employee.last_name, employee.suffix]
                                                                        .filter(Boolean)
                                                                        .join(' ')}
                                                                </h2>
                                                                <p className="text-muted-foreground text-sm break-words">
                                                                    {employee.position?.title ?? 'Position not set'}
                                                                    {employee.department?.department_name
                                                                        ? ` · ${employee.department.department_name}`
                                                                        : ''}
                                                                </p>
                                                            </div>
                                                            <dl className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
                                                                <div>
                                                                    <dt className="text-muted-foreground">Status</dt>
                                                                    <dd className="break-words">{employee.status}</dd>
                                                                </div>
                                                                <div>
                                                                    <dt className="text-muted-foreground">Daily rate</dt>
                                                                    <dd>
                                                                        {Number(employee.daily_rate).toLocaleString(undefined, {
                                                                            minimumFractionDigits: 2,
                                                                            maximumFractionDigits: 2,
                                                                        })}
                                                                    </dd>
                                                                </div>
                                                                <div className="col-span-2">
                                                                    <dt className="text-muted-foreground">Date hired</dt>
                                                                    <dd>{employee.date_hired}</dd>
                                                                </div>
                                                            </dl>
                                                            <Button className="w-full" variant="outline" asChild>
                                                                <Link href={route('employees.edit', employee.id)}>Edit Employee</Link>
                                                            </Button>
                                                        </article>
                                                    ))
                                                ) : (
                                                    <p className="text-muted-foreground rounded-xl border px-4 py-10 text-center text-sm">
                                                        No employees found.
                                                    </p>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="text-muted-foreground px-4 py-10 text-center">
                                        No employees found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <nav aria-label="Employee pagination" className="flex flex-wrap justify-end gap-2">
                    {employees.links.map((link, index) => {
                        const label = link.label.replace(/&laquo;|&raquo;/g, '').trim();

                        return link.url ? (
                            <Link
                                key={`${link.label}-${index}`}
                                href={link.url}
                                preserveScroll
                                className={`rounded-md border px-3 py-2 text-sm ${
                                    link.active ? 'bg-primary text-primary-foreground' : 'bg-background'
                                }`}
                                aria-current={link.active ? 'page' : undefined}
                            >
                                {label}
                            </Link>
                        ) : (
                            <span key={`${link.label}-${index}`} className="text-muted-foreground rounded-md border px-3 py-2 text-sm">
                                {label}
                            </span>
                        );
                    })}
                </nav>
            </div>
        </AppLayout>
    );
}
