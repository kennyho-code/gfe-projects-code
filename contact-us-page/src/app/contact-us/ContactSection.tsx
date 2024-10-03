"use client";
import Button from "@/components/Button";
import H2 from "@/components/H2";
import Input from "@/components/Input";
import Text from "@/components/MyText";
import TextArea from "@/components/TextArea";

const contactDetails = [
  { emoji: "🏠", text: "123 Maple Street," },
  { emoji: "🏙️", text: "Springfield, IL, USA" },
  { emoji: "📞", text: "+1 (650) 555-0198" },
  { emoji: "✉️", text: "hello@abstractly.com" },
];

function ContactSection() {
  return (
    <section className="flex flex-col lg:flex-row lg:gap-12 md:py-16">
      <div className="lg:w-1/2 flex flex-col gap-8 mb-8 lg:mb-0">
        <div>
          <H2>Talk to our team</H2>
          <Text>
            We&apos;re committed to delivering the support you require to make
            your experience as smooth as possible.
          </Text>
        </div>

        <ul className="flex flex-col space-y-3">
          {contactDetails.map((detail, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span
                className="mr-3 text-xl"
                role="img"
                aria-label="contact icon"
              >
                {detail.emoji}
              </span>
              <span>{detail.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:w-1/2">
        <form className="shadow-lg p-4 border-2 rounded-lg flex flex-col">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <Input
                label="Username"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <TextArea label="Message" placeholder="Write your message..." />

          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
