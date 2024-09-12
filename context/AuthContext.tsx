/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
// context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { baseUrl } from '@/lib/api';

interface AuthContextType {
    isAuth: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, phone: string, password: string, country: string) => Promise<void>;
    logout: () => void;
    updateProfile: (name: string, phone: string, address: string, email: string) => Promise<void>;
    updatePassword: (oldPassword: string, newPassword: string) => Promise<void>;
    user: any;
    loading: boolean;
    token: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState<any>(null);
    const router = useRouter();  // Always call useRouter here
    const [hasMounted, setHasMounted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState<string | null>(null);


    const login = async (email: string, password: string) => {
        try {
            const formData = new FormData();
            formData.append('login', email);
            formData.append('password', password);

            const response = await fetch(`${baseUrl}/users/login`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok && data.status === 200 || data.status === 101) {
                // Save token locally and mark the user as authenticated
                localStorage.setItem('token', data.token);
                setToken(data.token);
                setIsAuth(true);
                await getUserInfo();
                toast.success('تم تسجيل الدخول بنجاح');
                router.push('/dashboard');  // Redirect to dashboard
            } else if (data.status === 100) {
                // Invalid credentials
                toast.error('البريد الإلكتروني أو كلمة المرور غير صحيحة!');
            } else {
                // Handle unexpected error messages
                toast.error('حدث خطأ غير متوقع، حاول مرة أخرى لاحقًا.');
            }
        } catch (error) {
            console.error('Login failed', error);
            toast.error('فشل في الاتصال بالخادم، حاول مرة أخرى.');
        }
    };


    const register = async (name: string, email: string, phone: string, password: string, country: string) => {
        try {
            const payload = {
                name,
                email,
                phone,
                password,
                country
            };
            const response = await fetch(`${baseUrl}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.user.token);
                setToken(data.user.token);
                console.log('Registered successfully', data.user.token);
                toast.success('تم التسجيل بنجاح');
                router.push('/dashboard');
            } else {
                if (data.status === 100 && data.error) {

                    toast.error('البريد الإلكتروني أو رقم الهاتف موجود مسبقاً');
                } else if (data.status === 100) {
                    toast.error('حدث خطأ غير متوقع، حاول مرة أخرى لاحقًا.');
                }

            }
        } catch (error) {
            console.error('Registration failed', error);
            toast.error('حدث خطأ غير متوقع، حاول مرة أخرى لاحقًا.');
        }
    };

    const updateProfile = async (name: string, phone: string, address: string, email: string) => {
        const formData = new FormData();
        if (name) formData.append('name', name);
        if (phone) formData.append('phone', phone);
        if (address) formData.append('address', address);
        if (email) formData.append('email', email);
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('No token found');

            const response = await fetch(`${baseUrl}/users/update`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });

            const data = await response.json();
            if (response.ok) {
                // Update the user state with the new information
                setUser((prevUser: any) => ({ ...prevUser, ...data.data }));
                toast.success('تم تحديث البيانات بنجاح');
            } else {
                if (data.status === 100 && data.error) {
                    toast.error('تحديث البيانات فشل. تحقق من المدخلات.');
                } else if (data.status === 100) {
                    toast.error('حدث خطأ غير متوقع، حاول مرة أخرى لاحقًا.');
                }
            }
        } catch (error) {
            console.error('Profile update failed', error);
            toast.error('حدث خطأ غير متوقع، حاول مرة أخرى لاحقًا.');
        }
    };

    const updatePassword = async (oldPassword: string, newPassword: string) => {
        const formData = new FormData();
        if (oldPassword) formData.append('password_old', oldPassword);
        if (newPassword) formData.append('password', newPassword);
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('phone', user.phone);
        formData.append('address', user.address);
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('No token found');
            const response = await fetch(`${baseUrl}/users/update`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            })
            const data = await response.json();
            if (response.ok) {
                // Update the user state with the new information
                setUser((prevUser: any) => ({ ...prevUser, ...data.data }));
                toast.success('تم تحديث البيانات بنجاح');
            } else {
                if (data.status === 100 && data.error) {
                    toast.error('تحديث البيانات فشل. تحقق من المدخلات.');
                } else if (data.status === 100) {
                    toast.error('حدث خطأ غير متوقع، حاول مرة أخرى لاحقًا.');
                }
            }
        } catch (error) {
            console.error('Password update failed', error);
            toast.error('حدث خطأ غير متوقع، حاول مرة أخرى لاحقًا.');
        }
    }

    const getUserInfo = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            setToken(token);
            try {
                const response = await fetch(`${baseUrl}/users/info`, {
                    method: 'GET',
                    headers: { Authorization: `Bearer ${token}` },
                });
                const data = await response.json();
                if (response.ok && data.data.is_verified === 1) {
                    setUser(data.data);
                    setIsAuth(true);
                } else if (response.ok && data.data.is_verified === 0) {
                    setUser(data.data);
                    setIsAuth(true);
                    router.push('/verify');
                } else {
                    setIsAuth(false);
                }
            } catch (error) {
                console.error('User info retrieval failed', error);
                setIsAuth(false);
            }
        } else {
            setIsAuth(false);
        }
        setLoading(false);  // Done loading whether authenticated or not
    };

    useEffect(() => {
        console.log("isAuth updated:", isAuth);
    }, [isAuth]);

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuth(false);
        setUser(null);
        router.push('/login');  // Redirect to login after logout
    };

    useEffect(() => {
        setHasMounted(true);  // Ensure this effect only runs client-side
        getUserInfo();
    }, []);

    if (!hasMounted) return null;  // Return null on the server to avoid router errors

    return (
        <AuthContext.Provider value={{ isAuth, token, login, updateProfile, register, updatePassword, logout, user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
