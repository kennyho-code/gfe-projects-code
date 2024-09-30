"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Toast from "@/components/Toast";
import Link from "next/link";
import { useState } from "react";

type PasswordValidator = { fn: (s: string) => boolean; label: string };

const validator: PasswordValidator[] = [
  {
    fn: (s: string) => s.length >= 8 && s.length <= 64,
    label: "8-64 characters",
  },
  { fn: (s: string) => /[A-Z]/.test(s), label: "One uppercase letter" },
  {
    fn: (s: string) => /[a-z]/.test(s),
    label: "One lowercase letter",
  },
  {
    fn: (s: string) => /\d/.test(s),
    label: "One number",
  },
  {
    fn: (s: string) => /[!@#$%^&*]/.test(s),
    label: "One special character (e.g., ! @ # $ % ^ & *)",
  },
];

function SignupPage() {
  const [showError, setShowError] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [tosCheckedValue, setTosCheckedValue] = useState(false);

  return (
    <main className="bg-white p-4 rounded-md h-screen flex flex-col lg:flex-row justify-center">
      {showError && (
        <Toast
          onClick={() => {
            setShowError(false);
          }}
        >
          <span>
            You must agree to the Terms of Service to create an account.
          </span>
        </Toast>
      )}
      <div className="lg:flex items-center w-full max-w-[1200px] gap-48">
        <div className="flex flex-col gap-8 justify-center lg:w-1/2">
          <div>
            <h1 className="text-3xl font-semibold">Create your account</h1>
          </div>
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              const isError = true;
              if (isError) {
                setShowError(true);
              }
            }}
          >
            <div>
              <Label htmlFor="email-input">Email</Label>
              <Input name="email-input" type="email" />
            </div>

            <div>
              <Label htmlFor="password-input">Password</Label>
              <Input
                value={passwordValue}
                onChange={(e) => {
                  setPasswordValue(e.currentTarget.value);
                }}
                name="password-input"
                type="password"
              />
            </div>
            <PasswordValidator validator={validator} password={passwordValue} />

            <div className="inline-flex gap-4 items-center">
              <input
                checked={tosCheckedValue}
                onChange={(e) => {
                  setTosCheckedValue(e.currentTarget.checked);
                }}
                className="h-[16px] w-[16px] "
                type="checkbox"
                id="tos-input"
                name="tos-input"
              />
              <label htmlFor="tos-input">
                I agree with CodePulse{" "}
                <Link href="#" className="text-blue-700">
                  Terms of Service
                </Link>
              </label>
            </div>

            <div>
              <Button>Create account</Button>
            </div>
          </form>

          <div className="text-center">
            <span>
              Already have an account?{" "}
              <Link className="text-blue-700" href="/sign-in">
                {" "}
                Sign in
              </Link>{" "}
            </span>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <img className="rounded-md" src="/img/sign-up.jpg" />
        </div>
      </div>
    </main>
  );
}

function PasswordValidator({
  validator,
  password,
}: {
  validator: PasswordValidator[];
  password: string;
}) {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {validator.map(({ fn, label }) => (
          <div className="flex gap-4" key={label}>
            <div>{fn(password) ? <span>✅</span> : <span>✔️</span>}</div>
            <div>{label}</div>
          </div>
        ))}
      </ul>
      Password Validator
    </div>
  );
}

export default SignupPage;
