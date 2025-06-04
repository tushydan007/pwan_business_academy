"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Image from "next/image";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import signupImg from "@/public/assets/loginImg.jpg";
import logo from "@/public/assets/pbaLogo.png";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
// import axios from "axios";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   SelectValue,
// } from "@/components/ui/select";
import toast from "react-hot-toast";

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
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      interests: [],
    },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create account");
      }

      toast.success("Account created successfully!");
      reset(); // Reset form fields
    } catch (error: any) {
      toast.error(error.message || "An unexpected error occurred");
    }
  };

  return (
    <div className="h-screen w-full flex">
      {/* Left: Image */}
      <div className="relative hidden md:block w-1/2 h-full">
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
      <div className="h-full overflow-y-auto relative bg-blue-100 shadow-lg flex flex-col text-black scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-200 px-4 md:w-1/2 w-full">
        <Card className="flex flex-col border-none rounded-none shadow-none p-6 md:p-12 bg-transparent flex-grow">
          <div className="flex justify-center mb-0">
            <Image src={logo} alt="logo" width={150} height={100} />
          </div>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-black">
              Create Your Account
            </CardTitle>
            <p className="text-sm mt-1 text-center text-gray-600">
              Join us and explore the platform
            </p>
          </CardHeader>

          <CardContent className="flex-1 flex items-center justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-md space-y-7"
            >
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  className="border border-gray-300 shadow-md"
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
                  className="border border-gray-300 shadow-md"
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
                  className="border border-gray-300 shadow-md"
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
                  className="border border-gray-300 shadow-md"
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Gender */}
              <div>
                <Label>Gender</Label>
                <Controller
                  control={control}
                  name="gender"
                  render={({ field }) => (
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="flex gap-4 mt-1"
                    >
                      {["Male", "Female", "Other"].map((gender) => (
                        <div
                          key={gender}
                          className="flex items-center space-x-2"
                        >
                          <RadioGroupItem
                            value={gender}
                            id={gender}
                            className="border border-gray-300 shadow-md"
                          />
                          <Label htmlFor={gender}>{gender}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                />
                {errors.gender && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.gender.message}
                  </p>
                )}
              </div>

              {/* Interests */}
              <div>
                <Label>Interests</Label>
                <Controller
                  control={control}
                  name="interests"
                  render={({ field }) => (
                    <div className="flex flex-col gap-1 mt-1">
                      {["Real Estate", "Investment", "Property Management"].map(
                        (interest) => (
                          <label
                            key={interest}
                            className="flex items-center gap-2"
                          >
                            <Checkbox
                              checked={field.value.includes(interest)}
                              className="border border-gray-300 shadow-md"
                              onCheckedChange={(checked) => {
                                const newValues = checked
                                  ? [...field.value, interest]
                                  : field.value.filter((i) => i !== interest);
                                field.onChange(newValues);
                              }}
                            />
                            <span>{interest}</span>
                          </label>
                        )
                      )}
                    </div>
                  )}
                />
                {errors.interests && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.interests.message}
                  </p>
                )}
              </div>

              {/* Country */}
              {/* <div>
                <Label htmlFor="country">Country</Label>
                <Controller
                  control={control}
                  name="country"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full" id="country">
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Nigeria">Nigeria</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                        <SelectItem value="UK">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.country && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div> */}

              {/* Account Type */}
              {/* <div>
                <Label htmlFor="accountType">Account Type</Label>
                <Controller
                  control={control}
                  name="accountType"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger id="accountType" className="w-full">
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Individual">Individual</SelectItem>
                        <SelectItem value="Business">Business</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.accountType && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.accountType.message}
                  </p>
                )}
              </div> */}

              {/* Description */}
              <div>
                <Label htmlFor="description">Tell us about yourself</Label>
                <Textarea
                  id="description"
                  {...register("description")}
                  className="w-full h-24 text-black p-2 border border-gray-300 shadow-md"
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
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Creating Account...
                  </div>
                ) : (
                  "Sign Up"
                )}
              </Button>

              <div className="flex items-center justify-between text-sm mt-4">
                <span className="text-gray-700">Already have an account?</span>
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
