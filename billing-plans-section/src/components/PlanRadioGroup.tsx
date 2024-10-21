"use client";
import { useState } from "react";
import Badge from "./Badge";

interface PlanRadioGroupProps {
  plans: Plan[];
}

function PlanRadioGroup({ plans }: PlanRadioGroupProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanChange = (planLabel: string) => {
    setSelectedPlan(planLabel);
  };

  function handleSave() {
    alert("Changes saved successfully");
  }
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-4 ">
        {plans.map((plan) => (
          <PlanRadioSelect
            key={plan.label}
            plan={plan}
            isSelected={selectedPlan === plan.label}
            onSelect={handlePlanChange}
          />
        ))}
      </div>
      <button
        onClick={handleSave}
        className="bg-gray-100 w-[178px] py-2 rounded-md self-end"
      >
        Save Changes
      </button>
    </div>
  );
}

interface PlanRadioSelectProps {
  plan: Plan;
  isSelected: boolean;
  onSelect: (planLabel: string) => void;
}

function PlanRadioSelect({ plan, isSelected, onSelect }: PlanRadioSelectProps) {
  return (
    <label className="border-2 rounded-md p-4 flex flex-col gap-2 cursor-pointer">
      <div className="flex justify-between">
        <span>😊</span>
        <input
          className="h-[24px] w-[24px]"
          type="radio"
          name="plan"
          value="basic"
          checked={isSelected}
          onChange={() => onSelect(plan.label)}
        />
      </div>
      <h2 className="font-semibold text-lg">{plan.label}</h2>
      <div>
        {plan.tags.map((tag) => (
          <Badge key={tag} text={tag} color="success" />
        ))}
      </div>
      <p className="text-gray-600">{plan.description}</p>
    </label>
  );
}

export type Plan = {
  icon: string;
  label: string;
  description: string;
  tags: string[];
};

export default PlanRadioGroup;
