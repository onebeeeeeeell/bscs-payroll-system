import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import type { Attendance, PaginatedData } from '@/types/models';
import { Head, Link, router } from '@inertiajs/react';
import { useState, type FormEvent } from 'react';

type AttendanceRow = Omit<Attendance, 'time_out'> & {
    time_out: string | null;
};

type Props = {
    attendances: PaginatedData<AttendanceRow>;
    filters: {
        search: string;
    };
};

function employeeName(row: AttendanceRow): string {
    const employee = row.employee;

    return employee ? [employee.first_name, employee.last_name, employee.suffix].filter(Boolean).join(' ') : '—';
}

function formatTime(time: string | null): string {
    if (!time) {
        return '—';
    }

    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 === 0 ? 12 : hours % 12;

    return `${String(hour12).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`;
}

function formatDate(date: string): string {
    const parsed = new Date(`${date.slice(0, 10)}T00:00:00`);
    const monthDay = parsed.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
    const weekday = parsed.toLocaleDateString('en-US', { weekday: 'short' });

    return `${monthDay}, ${weekday}`;
}

function formatTotal(row: AttendanceRow): string {
    if (!row.time_out) {
        return '—';
    }

    const minutes = Math.round(Number(row.hours_worked) * 60);

    return `${Math.floor(minutes / 60)}h ${String(minutes % 60).padStart(2, '0')}m`;
}

export default function AttendanceIndex({ attendances, filters }: Props) {
    const [search, setSearch] = useState(filters.search);

    function submitSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        router.get(route('attendance.index'), { search }, { preserveState: true, replace: true });
    }

    return (
        <AppLayout>
            <Head title="Attendance" />
            <div className="flex w-full min-w-0 flex-col gap-6 p-4 md:p-6">
                <div className="space-y-1">
                    <h1 className="text-2xl font-semibold tracking-tight">Attendance</h1>
                    <p className="text-muted-foreground text-sm">Review who timed in and timed out.</p>
                </div>

                <form onSubmit={submitSearch} className="flex min-w-0 flex-col gap-2 sm:flex-row">
                    <Input
                        className="min-w-0 sm:flex-1"
                        aria-label="Search attendance"
                        placeholder="Search employee name"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <Button className="w-full sm:w-auto" type="submit">
                        Search
                    </Button>
                    {filters.search && (
                        <Button className="w-full sm:w-auto" type="button" variant="outline" asChild>
                            <Link href={route('attendance.index')}>Clear</Link>
                        </Button>
                    )}
                </form>

                <div className="bg-card text-card-foreground hidden overflow-x-auto rounded-xl border md:block">
                    <table className="w-full min-w-[760px] text-sm">
                        <thead>
                            <tr className="border-b text-left">
                                <th className="px-4 py-3 font-medium">Employee</th>
                                <th className="px-4 py-3 font-medium">Department</th>
                                <th className="px-4 py-3 font-medium">Date</th>
                                <th className="px-4 py-3 font-medium">Time In</th>
                                <th className="px-4 py-3 font-medium">Time Out</th>
                                <th className="px-4 py-3 font-medium">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendances.data.length > 0 ? (
                                attendances.data.map((row) => (
                                    <tr key={row.id} className="border-b last:border-0">
                                        <td className="px-4 py-3">{employeeName(row)}</td>
                                        <td className="px-4 py-3">{row.employee?.department?.department_name ?? '—'}</td>
                                        <td className="px-4 py-3">{formatDate(row.work_date)}</td>
                                        <td className="px-4 py-3">{formatTime(row.time_in)}</td>
                                        <td className="px-4 py-3">{formatTime(row.time_out)}</td>
                                        <td className="px-4 py-3">{formatTotal(row)}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="text-muted-foreground px-4 py-10 text-center">
                                        No attendance records found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="grid min-w-0 gap-3 md:hidden">
                    {attendances.data.length > 0 ? (
                        attendances.data.map((row) => (
                            <article key={row.id} className="bg-card text-card-foreground min-w-0 space-y-4 rounded-xl border p-4">
                                <div className="min-w-0">
                                    <h2 className="font-semibold break-words">{employeeName(row)}</h2>
                                    <p className="text-muted-foreground text-sm break-words">
                                        {formatDate(row.work_date)}
                                        {row.employee?.department?.department_name ? ` · ${row.employee.department.department_name}` : ''}
                                    </p>
                                </div>
                                <dl className="grid grid-cols-3 gap-x-3 text-sm">
                                    <div>
                                        <dt className="text-muted-foreground">Time In</dt>
                                        <dd>{formatTime(row.time_in)}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-muted-foreground">Time Out</dt>
                                        <dd>{formatTime(row.time_out)}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-muted-foreground">Total</dt>
                                        <dd>{formatTotal(row)}</dd>
                                    </div>
                                </dl>
                            </article>
                        ))
                    ) : (
                        <p className="text-muted-foreground rounded-xl border px-4 py-10 text-center text-sm">No attendance records found.</p>
                    )}
                </div>

                <nav aria-label="Attendance pagination" className="flex flex-wrap justify-end gap-2">
                    {attendances.links.map((link, index) => {
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