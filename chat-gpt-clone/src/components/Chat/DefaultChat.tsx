function DefaultChat({
  setPromptType,
}: {
  setPromptType: (promptType: string) => void;
}) {
  return (
    <div className="h-screen lg:mt-48 flex flex-1">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-gray-600">
          <span className="text-black">Hey, I’m Chat AI.</span> Your AI
          assistant and companion for any occasion.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {promptCards.map((card) => (
            <PromptCard
              onClick={(e) => {
                e.preventDefault();
                setPromptType(card.promptType);
              }}
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const promptCards = [
  {
    icon: "✉️",
    promptType: "email",
    title: "Draft Email",
    description: "Generate email for any occasion you need.",
  },
  {
    icon: "✏️",
    promptType: "essay",
    title: "Write an Essay",
    description: "Generate essay for any occasion you need.",
  },
  {
    promptType: "planning",
    icon: "📜",
    title: "Planning",
    description: "Plan for any occasion, from holiday to family.",
  },
  {
    promptType: "assistant",
    icon: "🤖",
    title: "Assistant",
    description: "Become your personal assistant. Helping you.",
  },
];

interface PromptCardProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon: string;
  title: string;
  description: string;
}

function PromptCard({ icon, title, description, onClick }: PromptCardProps) {
  return (
    <button
      className="min-w-[166px] min-h-[156px] border-2 rounded-md p-4 m-4 cursor-pointer"
      onClick={onClick}
    >
      <span>{icon}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </button>
  );
}

export default DefaultChat;
