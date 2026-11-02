import AppLogoIcon from '@/components/app-logo-icon';
import { Button } from '@/components/ui/button';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowRight, CalendarCheck, FileText, ShieldCheck, Users } from 'lucide-react';

const GREEN = 'text-[#1fe0a0]';

const highlights = [
    { icon: 'peso', title: 'Philippine Peso', text: 'Accurate & reliable payroll' },
    { icon: 'shield', title: 'SSS • PhilHealth • Pag-IBIG', text: 'Government contributions' },
    { icon: 'file', title: 'Digital Payslips', text: 'Secure & accessible' },
];

const features = [
    { icon: Users, title: 'Employee Records', text: 'Keep your team’s information organized and up to date, all in one place.' },
    { icon: CalendarCheck, title: 'Attendance & Overtime', text: 'Log time in, time out and overtime for every work day.' },
    { icon: FileText, title: 'Payroll & Payslips', text: 'Process payroll, calculate deductions, and generate payslips with ease.' },
];

const steps = [
    { title: 'Add your people', text: 'Create employee records with position, department, rate and government numbers.' },
    { title: 'Record attendance', text: 'Log time in, time out and overtime for every work day.' },
    { title: 'Process payroll', text: 'Compute pay and deductions, then generate payslips in pesos.' },
];

function HighlightIcon({ type }: { type: string }) {
    if (type === 'shield') return <ShieldCheck className="size-9 stroke-[1.5]" />;
    if (type === 'file') return <FileText className="size-9 stroke-[1.5]" />;
    return (
        <span className="flex size-9 items-center justify-center rounded-full border-2 border-current text-lg leading-none font-semibold">₱</span>
    );
}

export default function Welcome() {
    const { auth, name } = usePage<SharedData>().props;
    const brand = name || 'BAYAN PAY';
    const [first, ...rest] = brand.split(' ');

    return (
        <div className="relative min-h-dvh overflow-hidden bg-[#03100c] text-white">
            <Head title="Welcome" />

            {

            }
            <header className="relative z-20 border-b border-white/5 bg-[#03100c]/80 backdrop-blur">
                <div className="mx-auto flex h-[78px] max-w-6xl items-center justify-between px-6">
                    <Link href="/" className="flex items-center gap-3">
                        <div className={`flex size-10 items-center justify-center rounded-xl bg-[#1fe0a0] text-[#03100c]`}>
                            <AppLogoIcon className="size-6 fill-current" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight">
                            {first} <span className={GREEN}>{rest.join(' ')}</span>
                        </span>
                    </Link>

                    <nav className="hidden h-full items-center gap-2 text-sm md:flex">
                        <a href="#platform" className="relative flex h-full items-center px-5 font-medium text-white">
                            Platform
                            <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-[#1fe0a0]" />
                        </a>
                        <a href="#how" className="flex h-full items-center px-5 text-white/80 hover:text-white">
                            How It Works
                        </a>
                    </nav>

                    <div className="flex items-center gap-4">
                        {auth.user ? (
                            <Button className="rounded-full bg-gradient-to-r from-[#0fb582] to-[#16d79b] px-6 font-semibold text-white" asChild>
                                <Link href="/dashboard">
                                    Dashboard <ArrowRight />
                                </Link>
                            </Button>
                        ) : (
                            <>
                                <Link href="/login" className="text-sm font-medium text-white/90 hover:text-white">
                                    Log In
                                </Link>
                                <Button className="rounded-full bg-gradient-to-r from-[#0fb582] to-[#16d79b] px-6 font-semibold text-white" asChild>
                                    <Link href="/register">
                                        Get Started <ArrowRight />
                                    </Link>
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </header>

            {

            }
            <section className="relative">
                {

                }
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                        backgroundImage:
                            'radial-gradient(700px circle at 0% 45%, rgba(16,185,129,0.28), transparent 60%), radial-gradient(900px circle at 85% 40%, rgba(6,95,70,0.55), transparent 65%), linear-gradient(180deg, #03140f 0%, #02221a 100%)',
                    }}
                />

                {
                }
                <svg
                    aria-hidden
                    viewBox="0 0 700 560"
                    className="pointer-events-none absolute top-0 right-0 hidden h-full w-[58%] lg:block"
                    preserveAspectRatio="xMaxYMid slice"
                >
                    <defs>
                        <linearGradient id="blob" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#0b7a56" stopOpacity="0.85" />
                            <stop offset="100%" stopColor="#03281d" stopOpacity="0.2" />
                        </linearGradient>
                        <linearGradient id="arc" x1="0" y1="1" x2="1" y2="0">
                            <stop offset="0%" stopColor="#1fe0a0" stopOpacity="0" />
                            <stop offset="60%" stopColor="#1fe0a0" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#1fe0a0" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                    <path d="M470 150 C560 130 640 140 650 210 C660 270 600 300 540 300 L480 300 Z" fill="url(#blob)" />
                    <path d="M330 300 C420 270 560 270 610 330 C660 400 600 470 520 480 L400 480 Z" fill="url(#blob)" />
                    <path d="M380 130 C250 190 180 330 200 480" fill="none" stroke="url(#arc)" strokeWidth="1.4" />
                    <path d="M520 20 C380 80 260 230 240 420 C236 470 250 520 270 560" fill="none" stroke="url(#arc)" strokeWidth="1.4" />
                    <path d="M390 150 C480 190 560 230 610 260" fill="none" stroke="url(#arc)" strokeWidth="1.2" />
                    <path d="M700 330 C650 420 600 500 520 560" fill="none" stroke="url(#arc)" strokeWidth="1.4" />
                </svg>

                <div id="platform" className="relative mx-auto max-w-6xl px-6 pt-14 pb-16">
                    <span className="inline-flex items-center gap-2.5 rounded-full border border-[#1fe0a0]/40 bg-[#04130e]/60 px-4 py-1.5 text-sm text-[#5af0bd]">
                        <span className="size-2 rounded-full bg-[#1fe0a0]" />
                         Payroll System
                    </span>

                    <h1 className="mt-7 text-5xl leading-[1.08] font-bold tracking-tight sm:text-7xl">
                        Payroll made simple,
                        <br />
                        <span className={GREEN}>for a stronger team.</span>
                    </h1>

                    <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/85">
                        {brand} helps you manage employee records, attendance, and payroll — all in one secure and easy-to-use platform.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        {auth.user ? (
                            <Button size="lg" className="h-12 rounded-full bg-gradient-to-r from-[#0fb582] to-[#16d79b] px-8 font-semibold text-white" asChild>
                                <Link href="/dashboard">
                                    Go to Dashboard <ArrowRight />
                                </Link>
                            </Button>
                        ) : (
                            <>
                                <Button size="lg" className="h-12 rounded-full bg-gradient-to-r from-[#0fb582] to-[#16d79b] px-8 font-semibold text-white" asChild>
                                    <Link href="/register">
                                        Get Started <ArrowRight />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 rounded-full border-[#1fe0a0]/40 bg-transparent px-8 font-semibold text-white hover:bg-white/5 hover:text-white"
                                    asChild
                                >
                                    <Link href="/login">Log In</Link>
                                </Button>
                            </>
                        )}
                    </div>

                    <div className="mt-12 flex flex-wrap items-center gap-y-6">
                        {highlights.map((item, i) => (
                            <div key={item.title} className={`flex items-center gap-3 pr-8 ${i > 0 ? 'border-l border-white/15 pl-8' : ''}`}>
                                <span className={GREEN}>
                                    <HighlightIcon type={item.icon} />
                                </span>
                                <div>
                                    <p className="text-sm font-medium">{item.title}</p>
                                    <p className="text-xs text-white/60">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {

            }
            <section id="features" className="relative mx-auto max-w-6xl px-6 py-16">
                <div className="flex items-center justify-center gap-4 text-xs font-medium tracking-[0.2em] text-white/80">
                    <span className="h-px w-8 bg-[#1fe0a0]" />
                    OUR FEATURES
                    <span className="h-px w-8 bg-[#1fe0a0]" />
                </div>
                <h2 className="mt-5 text-center text-3xl leading-tight font-bold sm:text-4xl">
                    Everything you need for
                    <br />
                    <span className={GREEN}>a smarter payroll process.</span>
                </h2>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex items-center gap-5 rounded-xl border border-[#1fe0a0]/30 bg-[#041a13]/60 p-5"
                        >
                            <div className="flex size-[70px] shrink-0 items-center justify-center rounded-2xl bg-[#0a3b2c] text-[#1fe0a0]">
                                <feature.icon className="size-8" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-lg font-semibold">{feature.title}</h3>
                                <p className="mt-1 text-sm leading-relaxed text-white/70">{feature.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {

            }
            <section id="how" className="relative mx-auto max-w-6xl px-6 pb-20">
                <div className="flex items-center justify-center gap-4 text-xs font-medium tracking-[0.2em] text-white/80">
                    <span className="h-px w-8 bg-[#1fe0a0]" />
                    HOW IT WORKS
                    <span className="h-px w-8 bg-[#1fe0a0]" />
                </div>
                <h2 className="mt-5 text-center text-3xl font-bold sm:text-4xl">
                    Three steps to <span className={GREEN}>payday.</span>
                </h2>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <div key={step.title} className="rounded-xl border border-[#1fe0a0]/30 bg-[#041a13]/60 p-6">
                            <div className="flex size-10 items-center justify-center rounded-full bg-[#0a3b2c] text-lg font-semibold text-[#1fe0a0]">
                                {index + 1}
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-white/70">{step.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {

            }
            <section className="relative mx-auto max-w-6xl px-6 pb-20">
                <div
                    className="flex flex-col items-center gap-5 rounded-3xl border border-[#1fe0a0]/30 px-6 py-14 text-center"
                    style={{ backgroundImage: 'linear-gradient(115deg, #04281d 0%, #06553d 60%, #0a8f69 100%)' }}
                >
                    <h2 className="max-w-xl text-3xl font-bold">Ready for a calmer pay cycle?</h2>
                   
                    <Button size="lg" className="h-12 rounded-full bg-white px-8 font-semibold text-emerald-900 hover:bg-white/90" asChild>
                        <Link href={auth.user ? '/dashboard' : '/register'}>{auth.user ? 'Open Dashboard' : 'Create Your Account'}</Link>
                    </Button>
                </div>
            </section>

            <footer className="relative border-t border-white/5 py-6 text-center text-xs text-white/50">
                © {new Date().getFullYear()} {brand}
            </footer>
        </div>
    );
}