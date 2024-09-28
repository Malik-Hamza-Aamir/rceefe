"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterUserMutation } from "@/redux/services/user.service";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const registrationSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string()
        .min(1, "Password is required")
        .min(6, "Must be 6 characters long")
        .regex(/[A-Z]/, "At least one uppercase letter required")
        .regex(/\d/, "Must contain at least one number")
        .regex(/[@$!%*?&#]/, "Must contain at least one special character"),
});

type FromRegistration = z.infer<typeof registrationSchema>;

const Register = () => {
    const [registerUser, { isLoading }] = useRegisterUserMutation();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError
    } =
        useForm<FromRegistration>({
            resolver: zodResolver(registrationSchema)
        });

    const onSubmit: SubmitHandler<FromRegistration> = async (data) => {
        try {
            await registerUser(data).unwrap();
            reset();
            if (isLoading === false && isSubmitting === false) {
                router.push("/login");
            }
        } catch (error: any) {
            setError("root", {
                message: error?.data?.message
            })
        }
    };

    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <Card className="mx-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-xl">Sign Up</CardTitle>
                        <CardDescription>
                            Enter your information to create an account
                            {
                                errors.root && <div className="text-red-500">{errors.root.message}</div>
                            }
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="grid gap-6 mb-3" onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2 relative">
                                    <Label htmlFor="first-name">First name</Label>
                                    <Input
                                        id="first-name"
                                        placeholder="Max"
                                        {...register("firstName")}
                                        className={errors.firstName ? ' outline-red-500 border-red-500' : ''}
                                    />
                                    {errors.firstName && <small className="absolute text-red-500 pl-5 text-[11px] bottom-[-17px]">{errors.firstName.message}</small>}
                                </div>
                                <div className="grid gap-2 relative">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input
                                        id="last-name"
                                        placeholder="Robinson"
                                        {...register("lastName")}
                                        className={errors.lastName ? ' outline-red-500 border-red-500' : ''}
                                    />
                                    {errors.lastName && <small className="absolute text-red-500 pl-5 text-[11px] bottom-[-17px]">{errors.lastName.message}</small>}
                                </div>
                            </div>
                            <div className="grid gap-2 relative">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    {...register("email")}
                                    className={errors.email ? ' outline-red-500 border-red-500' : ''}
                                />
                                {errors.email && <small className="absolute text-red-500 pl-5 text-[11px] bottom-[-17px]">{errors.email.message}</small>}
                            </div>
                            <div className="grid gap-2 relative">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    {...register("password")}
                                    className={errors.password ? ' outline-red-500 border-red-500' : ''}
                                />
                                {errors.password && <small className="absolute text-red-500 pl-5 text-[11px] bottom-[-17px]">{errors.password.message}</small>}
                            </div>
                            <Button disabled={isSubmitting} type="submit" className="w-full">
                                {
                                    isSubmitting || isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Create an Account'
                                }
                            </Button>
                        </form>

                        <Button variant="outline" className="w-full">
                            Sign up with GitHub
                        </Button>

                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link href="/login" className="underline">
                                Sign in
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Register;
