"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import signupImg from "@/public/assets/loginImg.jpg";
import logo from "@/public/assets/pbaLogo.png";

const signupSchema = z
  .object({
    fullName: z.string().min(2, { message: "Full name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpFormValues = z.infer<typeof signupSchema>;

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log(data);
    // Handle sign-up logic
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 overflow-y-hidden">
      {/* Left: Image */}
      <div className="relative hidden md:block flex-1 w-full h-full">
        <Image
          src={signupImg}
          alt="Sign Up"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Form */}
      <div className="flex-1 bg-blue-100 shadow-lg h-screen flex flex-col text-white">
        <Card className="flex flex-col flex-1 border-none rounded-none shadow-none p-6 md:p-12 bg-transparent">
          <div className="flex justify-center mb-4">
            <Image src={logo} alt="logo" width={150} height={100} />
          </div>
          <CardHeader className="text-left">
            <CardTitle className="text-2xl font-bold grid place-content-center">
              Create Your Account
            </CardTitle>
            <p className="text-muted-foreground text-sm mt-1 text-center">
              Join us and explore the platform
            </p>
          </CardHeader>

          <CardContent className="flex-1 flex items-center justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-md space-y-2 md:space-y-4"
            >
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  className="shadow-md"
                />
                {errors.fullName && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="shadow-md"
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  className="shadow-md"
                />
                {errors.password && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                  className="shadow-md"
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full hover:bg-red-600 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating Account..." : "Sign Up"}
              </Button>

              <div className="flex items-center justify-between text-sm mt-4">
                <span className="text-muted-foreground">
                  Already have an account?
                </span>
                <Link
                  href="/login"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Sign in
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUpForm;
