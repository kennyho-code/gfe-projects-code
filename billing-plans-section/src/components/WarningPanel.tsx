function WarningPanel() {
  return (
    <div className="p-4 border-2 rounded-md bg-amber-50 flex">
      <div className="mr-2">⚠️</div>
      <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
        <p className="font-semibold">
          You will be downgraded from Professional plan to Basic plan at the end
          of your current billing period.
        </p>
        <div>
          <button className="bg-white shadow-md border-2 rounded-md p-2 font-semibold whitespace-nowrap">
            Cancel downgrade
          </button>
        </div>
      </div>
    </div>
  );
}

export default WarningPanel;
