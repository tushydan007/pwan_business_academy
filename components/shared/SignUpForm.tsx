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
    gender: z.enum(["Male", "Female", "Other"]),
    interests: z
      .array(z.string())
      .min(1, { message: "Select at least one interest" }),
    country: z.string().min(1, { message: "Please select your country" }),
    accountType: z.enum(["Individual", "Business"]),
    description: z
      .string()
      .min(10, { message: "Description should be at least 10 characters" }),
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
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 overflow-hidden">
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
      <div className="flex-1 bg-blue-100 shadow-lg h-screen flex flex-col text-white overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-200 px-4">
        <Card className="flex flex-col border-none rounded-none shadow-none p-6 md:p-12 bg-transparent flex-grow">
          <div className="flex justify-center mb-0">
            <Image src={logo} alt="logo" width={150} height={100} />
          </div>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Create Your Account
            </CardTitle>
            <p className="text-muted-foreground text-sm mt-1 text-center">
              Join us and explore the platform
            </p>
          </CardHeader>

          <CardContent className="flex-1 flex items-center justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-md space-y-3"
            >
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  className="shadow-sm border border-gray-300"
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

              {/* Confirm Password */}
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                  className="shadow-sm border border-gray-300"
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Gender (Radio) */}
              <div>
                <Label>Gender</Label>
                <div className="flex gap-4 mt-1">
                  <label className="flex items-center gap-1">
                    <input type="radio" value="Male" {...register("gender")} />
                    Male
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      value="Female"
                      {...register("gender")}
                    />
                    Female
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" value="Other" {...register("gender")} />
                    Other
                  </label>
                </div>
                {errors.gender && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.gender.message}
                  </p>
                )}
              </div>

              {/* Interests (Checkboxes) */}
              <div>
                <Label>Interests</Label>
                <div className="flex flex-col gap-1 mt-1">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Real Estate"
                      {...register("interests")}
                    />
                    Real Estate
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Investment"
                      {...register("interests")}
                    />
                    Investment
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Property Management"
                      {...register("interests")}
                    />
                    Property Management
                  </label>
                </div>
                {errors.interests && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.interests.message}
                  </p>
                )}
              </div>

              {/* Country (Select) */}
              <div>
                <Label htmlFor="country">Country</Label>
                <select
                  id="country"
                  {...register("country")}
                  className="shadow-sm border border-gray-300 w-full mt-1 text-black"
                >
                  <option value="">Select Country</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">United Kingdom</option>
                </select>
                {errors.country && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div>

              {/* Account Type (Select) */}
              <div>
                <Label htmlFor="accountType">Account Type</Label>
                <select
                  id="accountType"
                  {...register("accountType")}
                  className="shadow-sm border border-gray-300 w-full mt-1 text-black"
                >
                  <option value="">Select Type</option>
                  <option value="Individual">Individual</option>
                  <option value="Business">Business</option>
                </select>
                {errors.accountType && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.accountType.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description">Tell us about yourself</Label>
                <textarea
                  id="description"
                  {...register("description")}
                  className="shadow-sm border border-gray-300 w-full h-24 text-black p-2"
                />
                {errors.description && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.description.message}
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
