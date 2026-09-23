"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect") || "/";
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.imageUrl,
    });

    if (error) {
      toast.error(error.message || "Registration failed!");
      return;
    }

    toast.success("Registration successful!");
  };
  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: redirect,
    });
  };

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gray-50 px-4 py-10 dark:bg-gray-950">
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Create Your Account
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Join IdeaVault and start sharing your ideas.
          </p>
        </div>

        {/* Register Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900">
          <Form onSubmit={onSubmit} className="flex w-full flex-col gap-5">
            {/* Name */}
            <TextField isRequired name="name" className="w-full">
              <Label>Name</Label>

              <Input type="text" placeholder="Enter your name" />

              <FieldError />
            </TextField>

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label>Email</Label>

              <Input type="email" placeholder="john@example.com" />

              <FieldError />
            </TextField>

            {/* Photo URL */}
            <TextField name="imageUrl" className="w-full">
              <Label>Photo URL</Label>

              <Input type="url" placeholder="Enter your photo URL" />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={6}
              name="password"
              type="password"
              className="w-full"
              validate={(value) => {
                if (value.length < 6) {
                  return "Password must be at least 6 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[a-z]/.test(value)) {
                  return "Password must contain at least one lowercase letter";
                }

                return null;
              }}
            >
              <Label>Password</Label>

              <Input type="password" placeholder="Enter your password" />

              <Description>
                Minimum 6 characters with uppercase and lowercase letters.
              </Description>

              <FieldError />
            </TextField>

            {/* Create Account */}
            <Button
              type="submit"
              variant="primary"
              className="mt-2 h-11 w-full font-semibold"
            >
              Create Account
            </Button>
          </Form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />

            <span className="text-xs font-medium text-gray-500">OR</span>

            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
          </div>

          {/* Google Register */}
          <Button
            onClick={handleGoogleSignin}
            type="button"
            variant="secondary"
            className="h-11 w-full font-semibold"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </Button>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
