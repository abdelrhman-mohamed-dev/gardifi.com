"use client";

import * as React from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Otp() {
    const router = useRouter();
    const [otp, setOtp] = React.useState<string>('');
    const [loading, setLoading] = React.useState(false); // For loading state
    const [errors, setErrors] = React.useState<string | null>(null); // For error messages

    const handleChange = (value: string) => {
        setOtp(value);
    };

    const handleSendCode = async () => {
        // Handle send code logic
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('https://click.gardifi.com/api/users/verifyEmail', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: ""
            });

            if (response.ok) {
                toast.success('Verification Code sent again!');
            }
            else {
                toast.error('Failed to send verification code. Please try again.');
            }
        } catch (error) {
            console.error('Verification failed', error);
            setErrors('Failed to connect to the server. Please try again.');
        } finally {
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrors(null);
        const token = localStorage.getItem('token');
        const formData = new FormData();

        formData.append('code', otp);

        try {
            const response = await fetch('https://click.gardifi.com/api/users/verifyEmail', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData
            });

            const data = await response.json();

            if (response.ok && data.status === 200) {
                toast.success('Verification successful!');
                router.push('/dashboard');
                // Handle successful verification, e.g., redirect user or show success message
            } else {
                // Handle errors from server
                if (data.error) {
                    setErrors(data.error.otp ? data.error.otp[0] : 'An error occurred');
                } else {
                    setErrors('An unexpected error occurred');
                }
            }
        } catch (error) {
            console.error('Verification failed', error);
            setErrors('Failed to connect to the server. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ direction: 'ltr' }} className="flex flex-col items-center justify-center min-h-[100vh] px-4 sm:px-6 md:px-8">
            <div className="max-w-md border shadow-md p-8 w-full space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-black dark:text-white">Verify Your Identity</h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">Enter the 6-digit code sent to your email.</p>
                </div>
                <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                    <InputOTP
                        maxLength={4}
                        value={otp}
                        onChange={handleChange}
                    >
                        <InputOTPGroup className="flex items-center justify-center space-x-2">
                            <InputOTPSlot className=" border border-slate-900 text-black dark:border-slate-100 dark:text-white" index={0} />
                            <InputOTPSlot className=" border border-slate-900 text-black dark:border-slate-100 dark:text-white" index={1} />
                            <InputOTPSlot className=" border border-slate-900 text-black dark:border-slate-100 dark:text-white" index={2} />
                            <InputOTPSlot className=" border border-slate-900 text-black dark:border-slate-100 dark:text-white" index={3} />
                        </InputOTPGroup>
                    </InputOTP>
                    {errors && <p className="text-red-500 text-sm mt-2">{errors}</p>}
                    <Button type="submit" className="w-full mt-4" disabled={loading}>
                        {loading ? 'Verifying...' : 'Verify Code'}
                    </Button>
                    <Link href="#" onClick={handleSendCode} className="text-sm underline text-black dark:text-white mt-4 text-center">Resend Code ?</Link>
                </form>
            </div>
        </div>
    );
}
