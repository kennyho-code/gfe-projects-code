"use client";
import Button from "@/components/Button";
import H2 from "@/components/H2";
import Text from "@/components/MyText";
import { useState } from "react";

function FaqSection() {
  return (
    <section className="flex flex-col gap-8 py-16">
      <div className="text-center">
        <H2>Frequently asked questions</H2>
        <Text>Choose any questions you need</Text>
      </div>

      <div className="flex flex-col gap-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="flex flex-col shadow-lg rounded-lg gap-4 p-6 md:flex-row md:justify-between border-2">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-bold">
            Can&apos;t find the answer you&apos;re looking for?
          </div>
          <Text>Reach out to our customer support team.</Text>
        </div>
        <div
          className="w-full md:w-auto md:min-w-[138px]
"
        >
          <Button
            onClick={() => {
              /* Add your contact logic here */
            }}
            className="mt-2 w-full"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text className="font-semibold text-lg">{question}</Text>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <Text className="mt-2 text-gray-600">{answer}</Text>}
    </div>
  );
}

const faqs = [
  {
    question: "What types of images are available on your platform?",
    answer:
      "Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.",
  },
  {
    question: "How can I access and download images from your platform?",
    answer:
      "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.",
  },
  {
    question: "Do you offer free images, or is there a subscription required?",
    answer:
      "We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.",
  },
  {
    question: "What payment methods do you accept for subscriptions?",
    answer:
      "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users.",
  },
  {
    question: "Can I cancel or modify my subscription at any time?",
    answer:
      "Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.",
  },
  {
    question: "How frequently do you update your image collection?",
    answer:
      "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.",
  },
];

export default FaqSection;
