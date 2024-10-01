import H2 from "@/components/H2";
import H3 from "@/components/H3";
import Text from "@/components/Text";
interface StatItem {
  label: string;
  value: string;
}

const stats: StatItem[] = [
  {
    label: "Downloads",
    value: "25,664,890",
  },
  {
    label: "Paid Users",
    value: "17,219",
  },
  {
    label: "Images in library",
    value: "190,654,321",
  },
];

function StatsSection() {
  return (
    <section className="flex flex-col gap-8 py-8">
      <div className="text-center flex flex-col gap-4">
        <H3>Statistics</H3>
        <H2>More than premium abstract imagery</H2>
        <Text>
          Our platform is more than just as a service to us - it is a catalyst
          for enriching lives through premium abstract imagery.
        </Text>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row ">
        <div className="lg:w-1/2 flex justify-center">
          <img src="/img/white-blocks.png" />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-8">
          <Text>Our mission, in numbers</Text>
          <ul className="flex flex-col gap-8 justify-between h-full">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat }: { stat: StatItem }) {
  return (
    <div className="p-4 border-2 rounded-md flex flex-col items-center gap-2 h-full justify-center">
      <div className="text-4xl text-blue-600 font-semibold">{stat.value} </div>
      <Text>{stat.label} </Text>
    </div>
  );
}

export default StatsSection;
