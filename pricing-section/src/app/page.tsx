"use client";

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const [paymentType, setPaymentType] = useState<"monthly" | "annually">(
    "annually",
  );

  return (
    <div className="bg-gray-50 p-4 h-screen">
      <main className="flex flex-col gap-8 bg-white rounded-lg p-4 text-gray-600 lg:h-screen lg:justify-center">
        <header className="flex flex-col gap-4 text-center">
          <h1 className="text-blue-500 text-sm font-bold">Pricing Tiers</h1>
          <div className="text-3xl font-semibold text-black">
            Fit for all your needs
          </div>
          <div>
            Pick the plan that suits you today and step up as your demands grow
            - our flexible options have your journey mapped out.
          </div>
        </header>
        <div className="flex gap-2 justify-center">
          <Button
            onClick={() => {
              setPaymentType("monthly");
            }}
            className={twMerge(
              "md:max-w-[140px]",
              paymentType !== "monthly" ? "border-none" : "",
            )}
          >
            Monthly
          </Button>
          <Button
            onClick={() => {
              setPaymentType("annually");
            }}
            className={twMerge(
              "md:max-w-[140px]",
              paymentType !== "annually" ? "border-none" : "",
            )}
          >
            Anually
          </Button>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:justify-center ">
          {plans.map((plan) => (
            <PricingCard
              isPopular={plan.name === "Standard Plan"}
              paymentType={paymentType}
              plan={plan}
              key={plan.name}
            ></PricingCard>
          ))}
        </div>
      </main>
    </div>
  );
}

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  className?: string;
}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge("w-full border-2 rounded-lg py-2", className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PricingCard({
  isPopular = false,
  plan,
  paymentType,
}: {
  isPopular: boolean;
  plan: Plan;
  paymentType: "monthly" | "annually";
}) {
  return (
    <div
      className={twMerge(
        "lg:max-w-[384px] border-2 rounded-lg flex flex-col justify-between",
        isPopular && "border-blue-500 overflow-hidden shadow-2xl",
      )}
    >
      {isPopular && (
        <div className="bg-blue-50 w-full">
          <div className="text-2xl font-semibold text-center text-blue-500 py-4">
            Most Popular
          </div>
        </div>
      )}
      <div className="p-4 flex flex-col gap-6 ">
        <div>
          <h2 className="text-xl font-semibold text-black">{plan.name}</h2>
          <div>{plan.description}</div>
        </div>

        <div>
          <div>
            <span className="text-black text-5xl font-semibold">
              {paymentType === "monthly"
                ? plan.monthlyPayment.monthlyBill
                : plan.annualPayment.monthlyBill}
            </span>
            <span className="font-semibold"> / month</span>
          </div>
          {paymentType === "annually" ? (
            <div>Billed annually ({plan.annualPayment.annualBill})</div>
          ) : (
            <div>Billed Monthly</div>
          )}
        </div>
        <ul className="flex flex-col gap-4">
          {plan.descriptionList.map((desc, idx) => (
            <li className="flex gap-2" key={idx}>
              <div>✔️</div>
              <div>{desc}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4">
        <Button
          className={isPopular ? "bg-blue-500 text-white border-blue-500" : ""}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}

interface Payment {
  monthlyBill: string;
  annualBill?: string;
}

interface Plan {
  name: string;
  description: string;
  annualPayment: Payment;
  monthlyPayment: Payment;
  descriptionList: string[];
}

const plans: Plan[] = [
  {
    name: "Basic Plan",
    description: "Access to a curated selection of abstract images",
    annualPayment: {
      monthlyBill: "$6.99",
      annualBill: "$84",
    },
    monthlyPayment: {
      monthlyBill: "$9.99",
    },
    descriptionList: [
      "Standard quality images",
      "Limited to personal use",
      "Email support",
    ],
  },
  {
    name: "Standard Plan",
    description: "Next-level Integrations, priced economically",
    annualPayment: {
      monthlyBill: "$15.99",
      annualBill: "$192",
    },
    monthlyPayment: {
      monthlyBill: "$19.99",
    },
    descriptionList: [
      "Expanded library with more diverse abstract images",
      "High-resolution images available",
      "Suitable for commercial use",
      "Priority email support",
      "Advanced analytics",
    ],
  },
  {
    name: "Premium Plan",
    description: "Experience limitless living for power users",
    annualPayment: {
      monthlyBill: "$25.99",
      annualBill: "$312",
    },
    monthlyPayment: { monthlyBill: "$29.99" },
    descriptionList: [
      "Full access to the entire image library, including exclusive content",
      "Highest quality images, including premium collections",
      "Commercial and resale rights",
      "Dedicated customer support line",
      "24/7 support response time",
      "Advanced analytics and insights",
    ],
  },
];
