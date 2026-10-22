export interface PaginatedData<T> {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    links: { url: string | null, label: string, active: boolean }[];
}
export interface User {
    id: number;
    name: string;
    email: string;
}
export interface Position {
    id: number;
    title: string;
}
export interface Department {
    id: number;
    department_name: string;
}
export interface ContributionType {
    id: number;
    name: string;
}
export interface PayrollPeriod {
    id: number;
    start_date: string;
    end_date: string;
    pay_date: string;
    status: 'Pending' | 'Processing' | 'Paid' | 'Failed';
}
export interface Employee {
    id: number;
    first_name: string;
    last_name: string;
    suffix: string | null;
    position_id: number;
    department_id: number;
    date_hired: string;
    daily_rate: string;
    sss_no: string | null;
    philhealth_no: string | null;
    pagibig_no: string | null;
    tin_no: string | null;
    status: 'Casual' | 'Regular' | 'Permanent';
    position?: Position;
    department?: Department;
    created_at: string;
}
export interface Attendance {
    id: number;
    employee_id: number;
    work_date: string;
    time_in: string;
    time_out: string;
    hours_worked: string;
    overtime_hours: string;
    employee?: Employee;
    created_at: string;
}
export interface Payroll {
    id: number;
    employee_id: number;
    payroll_period_id: number;
    user_id: number;
    gross_pay: string;
    total_deductions: string;
    net_pay: string;
    date_processed: string;
    employee?: Employee;
    payroll_period?: PayrollPeriod;
    user?: User;
    created_at: string;
}
export interface Payslip {
    id: number;
    payroll_id: number;
    date_generated: string;
    payroll?: Payroll;
    created_at: string;
}
export interface ContributionRate {
    id: number;
    contribution_type_id: number;
    rate: string;
    contribution_type?: ContributionType;
    created_at: string;
}
export interface Deduction {
    id: number;
    payroll_id: number;
    contribution_rate_id: number;
    amount: string;
    payroll?: Payroll;
    contribution_rate?: ContributionRate;
    created_at: string;
}