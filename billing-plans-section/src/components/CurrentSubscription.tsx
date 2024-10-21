import React from "react";

interface RowItemProps {
  label: string;
  value: string;
}

const RowItem: React.FC<RowItemProps> = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-sm text-gray-500">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

function CurrentSubsciption() {
  return (
    <div className="rounded-md border-2 bg-white p-4">
      <h2 className="text-xl font-bold mb-4">Your current subscription</h2>
      <div className="flex flex-col gap-4">
        <RowItem label="Plan type" value="Basic plan" />
        <div className="border-b-2" />
        <RowItem label="Pricing" value="$6 per month" />
        <div className="border-b-2" />
        <RowItem label="Next billing" value="10th June, 2024" />
      </div>
    </div>
  );
}

export default CurrentSubsciption;
