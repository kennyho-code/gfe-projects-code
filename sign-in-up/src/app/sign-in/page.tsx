"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Toast from "@/components/Toast";
import Link from "next/link";
import { FormEvent, useState } from "react";

function SigninPage() {
  const [showToast, setShowToast] = useState(false);

  function signin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // fake error
    setShowToast(true);
  }
  return (
    <div className="bg-white p-4 rounded-md h-screen flex flex-col justify-center">
      {showToast && (
        <Toast
          onClick={() => {
            setShowToast(false);
          }}
        >
          Incorrect email or password
        </Toast>
      )}
      <main className="flex flex-col lg:flex-row lg:gap-8">
        <div className="flex flex-col justify-center lg:w-1/2">
          <div className="flex flex-col justify-center gap-8 lg:w-[384px] lg:mx-auto">
            <div>
              <h1 className="text-3xl font-bold">Log in to your account</h1>
            </div>

            <form onSubmit={signin} className="flex flex-col gap-8">
              <div>
                <Label htmlFor="email-input">Email</Label>
                <Input type="email" name="email-input" />
              </div>

              <div>
                <Label htmlFor="password-input">Password</Label>
                <Input type="password" name="password-input" />
              </div>

              <div>
                <Button type="submit">Submit</Button>
              </div>
            </form>

            <div className="text-center">
              Don’t have an account?{" "}
              <Link className="text-blue-500 font-semibold" href="/sign-up">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 hidden lg:block">
          <img className="rounded-md" src="/img/sign-in.jpg" />
        </div>
      </main>
    </div>
  );
}

export default SigninPage;
