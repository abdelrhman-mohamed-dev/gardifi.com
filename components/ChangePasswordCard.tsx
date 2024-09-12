"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconEye, IconEyeOff, IconCheck, IconAlertOctagonFilled } from "@tabler/icons-react";
import { toast } from "react-hot-toast";

import { useAuth } from "@/context/AuthContext";

export default function ChangePasswordCard() {
    const { updatePassword } = useAuth();

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    // Password validation checks
    const isMinLength = newPassword.length >= 8;
    const hasLowerCase = /[a-z]/.test(newPassword);
    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasNumber = /[0-9]/.test(newPassword);
    const hasSpecialChar = /[!@#$%^&*]/.test(newPassword);

    const isFormValid =
        oldPassword &&
        newPassword &&
        confirmPassword &&
        newPassword === confirmPassword &&
        isMinLength &&
        hasLowerCase &&
        hasUpperCase &&
        hasNumber &&
        hasSpecialChar;

    const handleSubmit = async () => {
        if (!isFormValid) {
            toast.error("Please make sure all fields are filled and passwords match the rules.");
            return;
        }

        try {
            setLoading(true);
            await updatePassword(oldPassword, newPassword);
            toast.success("Password updated successfully!");
        } catch (error) {
            toast.error("Failed to update password.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Change Password</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Left column with password inputs */}
                    <div className="w-full md:w-[50%]">
                        {/* Old Password */}
                        <div className="flex flex-col gap-5 mt-4">
                            <Label htmlFor="oldPassword">Old Password</Label>
                            <div className="relative">
                                <Input
                                    id="oldPassword"
                                    type={showOldPassword ? "text" : "password"}
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    placeholder="Enter Old Password"
                                />
                                <button
                                    type="button"
                                    className="absolute right-2 top-2"
                                    onClick={() => setShowOldPassword(!showOldPassword)}
                                >
                                    {showOldPassword ? <IconEyeOff /> : <IconEye />}
                                </button>
                            </div>
                        </div>

                        {/* New Password */}
                        <div className="flex flex-col gap-5 mt-4">
                            <Label htmlFor="newPassword">New Password</Label>
                            <div className="relative">
                                <Input
                                    id="newPassword"
                                    type={showNewPassword ? "text" : "password"}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="Enter New Password"
                                />
                                <button
                                    type="button"
                                    className="absolute right-2 top-2"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                >
                                    {showNewPassword ? <IconEyeOff /> : <IconEye />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="flex flex-col gap-5 mt-4">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <div className="relative">
                                <Input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Enter Confirm Password"
                                />
                                <button
                                    type="button"
                                    className="absolute right-2 top-2"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <IconEyeOff /> : <IconEye />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right column with password validation */}
                    <div className="w-full md:w-[50%]">
                        <h2 className="text-lg mb-6">New Password Must Contain:</h2>

                        <p className="flex gap-2 p-2 mt-2">
                            {isMinLength ? <IconCheck className="text-green-500" /> : <IconAlertOctagonFilled />}
                            At least 8 characters
                        </p>
                        <Separator />

                        <p className="flex gap-2 p-2 mt-2">
                            {hasLowerCase ? <IconCheck className="text-green-500" /> : <IconAlertOctagonFilled />}
                            At least 1 lowercase letter (a-z)
                        </p>
                        <Separator />

                        <p className="flex gap-2 p-2 mt-2">
                            {hasUpperCase ? <IconCheck className="text-green-500" /> : <IconAlertOctagonFilled />}
                            At least 1 uppercase letter (A-Z)
                        </p>
                        <Separator />

                        <p className="flex gap-2 p-2 mt-2">
                            {hasNumber ? <IconCheck className="text-green-500" /> : <IconAlertOctagonFilled />}
                            At least 1 number (0-9)
                        </p>
                        <Separator />

                        <p className="flex gap-2 p-2 mt-2">
                            {hasSpecialChar ? <IconCheck className="text-green-500" /> : <IconAlertOctagonFilled />}
                            At least 1 special character (!@#$%^&*)
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    variant="default"
                    className="mt-4"
                    onClick={handleSubmit}
                    disabled={loading || !isFormValid}
                >
                    {loading ? "Updating..." : "Change Password"}
                </Button>
            </CardFooter>
        </Card>
    );
}
