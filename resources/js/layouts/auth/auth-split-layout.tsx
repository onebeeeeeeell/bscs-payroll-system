import AppLogoIcon from '@/components/app-logo-icon';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ShieldCheck } from 'lucide-react';

interface AuthLayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

export default function AuthSplitLayout({ children, title, description }: AuthLayoutProps) {
    const { name } = usePage<SharedData>().props;

    return (
        <div className="bg-background grid min-h-dvh lg:grid-cols-2">
            <div className="relative hidden flex-col justify-between border-r p-10 lg:flex">
                <Link href="/" className="flex items-center gap-3">
                    <div className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-lg">
                        <AppLogoIcon className="size-5 fill-current" />
                    </div>
                    <span className="font-semibold">{name}</span>
                </Link>

                <div className="max-w-md space-y-4">
                    <span className="bg-primary/15 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide uppercase">
                        <span className="bg-primary size-1.5 rounded-full" />
                        Payroll, attendance &amp; compliance
                    </span>
                    <h2 className="text-4xl leading-tight font-medium tracking-tight">The calm center for every pay cycle.</h2>
                    <p className="text-muted-foreground text-sm">
                        Run accurate payroll, review attendance, and keep statutory records ready, all from one secure workspace.
                    </p>
                </div>

                <p className="text-muted-foreground flex items-center gap-2 text-xs">
                    <ShieldCheck className="text-primary size-4" /> Encrypted access · Audit logged
                </p>
            </div>

            <div className="relative flex items-center justify-center overflow-hidden p-6">
                <div className="bg-primary/5 pointer-events-none absolute -top-24 -right-24 size-96 rounded-full" />
                <div className="bg-card relative z-10 w-full max-w-sm space-y-6 rounded-2xl border p-8 shadow-lg">
                    <div className="space-y-1">
                        <p className="text-primary text-[11px] font-semibold tracking-wide uppercase">Secure workspace</p>
                        <h1 className="text-2xl font-medium">{title}</h1>
                        <p className="text-muted-foreground text-sm">{description}</p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}