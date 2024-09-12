"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useData } from '@/context/DataContext'; // Use your DataContext

export function AddAccountDialog() {
    const { addNewAccount } = useData();
    const [googleId, setGoogleId] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    // Validation states
    const [googleIdError, setGoogleIdError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateForm = () => {
        let isValid = true;

        // Clear previous errors
        setGoogleIdError('');
        setEmailError('');
        setNameError('');

        // Google ID validation
        if (!googleId.trim()) {
            setGoogleIdError('Google ID is required.');
            isValid = false;
        }

        // Email validation
        if (!email.trim()) {
            setEmailError('Email is required.');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            setEmailError('Invalid email format.');
            isValid = false;
        }

        // Name validation
        if (!name.trim()) {
            setNameError('Account name is required.');
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Run validation
        if (!validateForm()) {
            return; // Stop if validation fails
        }

        // Proceed with adding the account if the form is valid
        await addNewAccount(googleId, email, name);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">Add Account</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-black dark:text-white">Add New Account</DialogTitle>
                    <DialogDescription>
                        Add a new Google Ads account.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    {/* Google ID Field */}
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Label htmlFor="google_id" className="">
                                Google ID
                            </Label>
                            <Input
                                className={`text-black dark:text-white ${googleIdError && 'border-red-500'}`}
                                id="google_id"
                                value={googleId}
                                onChange={(e) => setGoogleId(e.target.value)}
                                placeholder="Enter Google ID"
                                required
                            />
                            {googleIdError && <p className="text-red-500 text-sm">{googleIdError}</p>}
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Label htmlFor="email" className="">
                                Google Email
                            </Label>
                            <Input
                                className={`text-black dark:text-white ${emailError && 'border-red-500'}`}
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Google Email"
                                required
                            />
                            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                        </div>
                    </div>

                    {/* Account Name Field */}
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Label htmlFor="name" className="">
                                Account Name
                            </Label>
                            <Input
                                className={`text-black dark:text-white ${nameError && 'border-red-500'}`}
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter Account Name"
                                required
                            />
                            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
                        </div>
                    </div>

                    <DialogFooter className="flex !justify-between">
                        <Button type="submit">Add Account</Button>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" className='max-sm:mb-4'>
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
