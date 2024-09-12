"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/context/AuthContext"
import { useState } from "react"

export function LoginForm() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // For loading state
    const [errors, setErrors] = useState({ email: '', password: '' }); // For validation errors

    const validate = () => {
        let valid = true;
        const newErrors = { email: '', password: '' };

        // Email validation
        if (!email) {
            newErrors.email = 'البريد الإلكتروني مطلوب';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'صيغة البريد الإلكتروني غير صحيحة';
            valid = false;
        }

        // Password validation
        if (!password) {
            newErrors.password = 'الرقم السري مطلوب';
            valid = false;
        } else if (password.length < 6) {
            newErrors.password = 'الرقم السري يجب أن يكون أكثر من 6 أحرف';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return; // Stop if validation fails
        setLoading(true); // Start loading
        await login(email, password);
        setLoading(false); // Stop loading
    };

    return (
        <Card className="mx-auto w-[350px] max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">تسجيل الدخول</CardTitle>
                <CardDescription>
                    تسجيل الدخول بالبريد الالكتروني وكلمة المرور
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">البريد الالكتروني</Label>
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                type="email"
                                placeholder="m@example.com"

                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">الرقم السري</Label>
                                <Link href="#" className="mr-auto inline-block text-sm underline">
                                    نسيت كلمة المرور؟
                                </Link>
                            </div>
                            <Input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                type="password"

                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={loading} // Disable button during loading
                        >
                            {loading ? 'جاري التحميل...' : 'تسجيل الدخول'}
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        ليس لديك حساب؟
                        <Link href="/register" className="mr-2 underline">
                            سجل حساب
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
