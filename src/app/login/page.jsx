"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log("Login Data:", data);
  };

  const handleGoogleLogin = () => {
    console.log("Google Login");
  };

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gray-50 px-4 py-10 dark:bg-gray-950">
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Login to your IdeaVault account.
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900">
          <Form className="flex w-full flex-col gap-5" onSubmit={handleSubmit}>
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

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type="password"
              className="w-full"
              validate={(value) => {
                if (!value) {
                  return "Password is required";
                }

                return null;
              }}
            >
              <Label>Password</Label>

              <Input type="password" placeholder="Enter your password" />

              <FieldError />
            </TextField>

            {/* Login Button */}
            <Button
              type="submit"
              variant="primary"
              className="mt-2 h-11 w-full font-semibold"
            >
              Login
            </Button>
          </Form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />

            <span className="text-xs font-medium text-gray-500">OR</span>

            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
          </div>

          {/* Google Login */}
          <Button
            type="button"
            variant="secondary"
            className="h-11 w-full font-semibold"
            onPress={handleGoogleLogin}
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </Button>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Do not have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
