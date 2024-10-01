import Button from "@/components/Button";
import H2 from "@/components/H2";
import Text from "@/components/Text";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

interface ContactInfo {
  content: string;
  icon: string; // This could be a string for icon name or a component reference
}

const contactDetails: ContactInfo[] = [
  {
    content: "123 Maple Street, Springfield, IL, USA",
    icon: "MapPin", // or "location", depending on your icon library
  },
  {
    content: "+1 (650) 555-0198",
    icon: "Phone", // or "phone-alt", depending on your icon library
  },
  {
    content: "hello@abstractly.com",
    icon: "Envelope", // or "email", depending on your icon library
  },
];

function ContactUsSection() {
  return (
    <section className="py-16 flex flex-col lg:flex-row gap-8">
      <div className="flex flex-col gap-4 lg:w-1/2">
        <div className="flex flex-col gap-2">
          <H2>Talk to our team</H2>
          <Text>
            We&apos;re committed to delivering the support you require to make
            your experience as smooth as possible.
          </Text>
        </div>
        <ul className="flex flex-col gap-6">
          {contactDetails.map((contact, idx) => (
            <div className="flex gap-2" key={idx}>
              <div>😊</div>
              <div>{contact.content}</div>
            </div>
          ))}
        </ul>
      </div>

      <form className="border-2 p-8 rounded-md shadow-lg flex flex-col gap-4 lg:w-1/2">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="md:w-1/2">
            <Label htmlFor="name-input">Name</Label>
            <Input type="text" name="name-input" placeholder="Your name" />
          </div>
          <div className="md:w-1/2">
            <Label htmlFor="email-input">Email</Label>
            <Input
              type="email"
              name="email-input"
              placeholder="example@example.com"
            />
          </div>
        </div>

        <div>
          <Label>Message</Label>
          <TextArea placeholder="Write your message..." />
        </div>

        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </section>
  );
}

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

function Input({ ...props }: InputProps) {
  return (
    <input
      className="bg-gray-100 text-gray-600 p-4 w-full rounded-md"
      {...props}
    />
  );
}

interface LabelProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  children: ReactNode;
}
function Label({ children, ...props }: LabelProps) {
  return (
    <label className="block text-gray-600 font-semibold pb-2" {...props}>
      {children}
    </label>
  );
}

type TextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

function TextArea({ ...props }: TextAreaProps) {
  return (
    <div>
      <textarea
        className="h-[108px] w-full bg-gray-100 text-gray-600 rounded-md p-4"
        {...props}
      />
      <div className="text-gray-600 float-right">0/500</div>
    </div>
  );
}

export default ContactUsSection;
