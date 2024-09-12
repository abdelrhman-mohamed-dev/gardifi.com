"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext"; // Import useAuth if you need to call register

export function RegisterForm() {
    const { register } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    // const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        // country: '',
    });

    const validate = () => {
        let valid = true;
        const newErrors = {
            name: '',
            email: '',
            phone: '',
            password: '',
            // country: '',
        };

        // Name validation
        if (!name) {
            newErrors.name = 'الاسم مطلوب';
            valid = false;
        }

        // Email validation
        if (!email) {
            newErrors.email = 'البريد الإلكتروني مطلوب';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'صيغة البريد الإلكتروني غير صحيحة';
            valid = false;
        }

        // Phone validation
        if (!phone) {
            newErrors.phone = 'رقم الجوال مطلوب';
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

        // Country validation
        // if (!country) {
        //     newErrors.country = 'البلد مطلوب';
        //     valid = false;
        // }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
        await register(name, email, phone, password, '1');
        setLoading(false);
    };

    return (
        <Card className="mx-auto w-[350px] max-w-sm">
            <CardHeader>
                <CardTitle className="text-xl">انشاء حساب</CardTitle>
                <CardDescription>
                    اضف البيانات الخاصة بك لانشاء حساب
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">الاسم</Label>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="الاسم"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        {/* <div className="grid gap-2">
                            <Label htmlFor="country">البلد</Label>
                            <Input
                                id="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder="البلد"
                            />
                            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                        </div> */}
                        <div className="grid gap-2">
                            <Label htmlFor="phone">رقم الجوال</Label>
                            <Input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+966 123456789"
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">البريد الالكتروني</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="m@example.com"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">الرقم السري</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={loading}
                        >
                            {loading ? 'جاري التحميل...' : 'انشاء حساب'}
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        لديك حساب بالفعل؟
                        <Link href="/login" className="mr-2 underline">
                            تسجيل الدخول
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
