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
import loginImg from "@/public/assets/login.jpg";
import logo from "@/public/assets/pbaLogo.png";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
    // Handle login logic
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      {/* Left: Image */}
      <div className="relative hidden md:block flex-1 w-full h-full">
        <Image
          src={loginImg}
          alt="Login"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Right: Form */}
      <div className="flex-1 h-screen w-full flex flex-col items-center justify-center text-white">
        <div className="p-4 md:p-6 flex items-center justify-center h-full w-full bg-blue-100">
          <Card className="flex flex-col flex-1 border-none rounded-none shadow-none p-6 md:p-12 bg-transparent">
            {/* Centered Logo and Header */}
            <div className="flex flex-col items-center justify-center space-y-4 mb-6">
              <figure>
                <Image src={logo} alt="logo" width={150} height={100} />
              </figure>
              <CardHeader className="space-y-2 text-center p-0">
                <CardTitle className="text-2xl font-bold">
                  Welcome Back
                </CardTitle>
                <p className="text-muted-foreground">Sign in to your account</p>
              </CardHeader>
            </div>

            {/* Form */}
            <CardContent className="flex-1 flex items-center justify-center">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md space-y-6"
              >
                {/* Email */}
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="shadow-sm border border-gray-300"
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
                    className="shadow-sm border border-gray-300"
                  />
                  {errors.password && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full hover:bg-red-600 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </Button>

                <div className="flex items-center justify-between text-sm mt-4">
                  <Link
                    href="/forgot-password"
                    className="text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                  <Link
                    href="/sign-up"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Create account
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
