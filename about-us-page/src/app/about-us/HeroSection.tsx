import Button from "@/components/Button";
import H2 from "@/components/H2";
import Text from "@/components/Text";

function HeroSection() {
  return (
    <section className="flex flex-col gap-8 lg:flex-row lg:items-center py-8">
      <div className="flex flex-col gap-12">
        <div>
          <H2>Well crafted abstract gradient</H2>
          <Text>
            As a lean, passionate team, we&apos;ve made something that most
            would think is impossible - premium abstract images for free and for
            all.
          </Text>
        </div>
        <div className="flex gap-4">
          <Button className="bg-white text-black shadow-md max-w-[213px] py-4">
            Features
          </Button>
          <Button className="max-w-[213px] py-4">See pricing</Button>
        </div>
      </div>
      <div>
        <img src="/img/prism.png" />
      </div>
    </section>
  );
}

export default HeroSection;
