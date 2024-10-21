import CurrentSubsciption from "@/components/CurrentSubscription";
import Header from "@/components/Header";
import PlanRadioGroup, { Plan } from "@/components/PlanRadioGroup";
import WarningPanel from "@/components/WarningPanel";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:flex-row gap-8 p-4">
        <div className="flex flex-col gap-8">
          <Header />
          <WarningPanel />
          <PlanRadioGroup plans={plans} />
        </div>
        <div className="mt-[200px]">
          <CurrentSubsciption />
        </div>
      </div>
    </div>
  );
}

const plans: Plan[] = [
  {
    icon: "😊",
    label: "Starter plan • $0/month",
    description:
      "Includes up to 10 users, 20GB individual data and access to all features.",
    tags: [],
  },
  {
    icon: "🚀",
    label: "Basic plan • $6/month",
    description:
      "Includes up to 20 users, 40GB individual data and access to all features.",
    tags: ["Recommended"],
  },
  {
    icon: "🏆",
    label: "Professional plan • $12/month",
    description:
      "Includes up to 50 users, 100GB individual data and access to all features.",
    tags: [],
  },
];
