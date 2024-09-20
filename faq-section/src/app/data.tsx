export type Tab = {
  id: number;
  header: string;
  panel: string;
};

const DATA: Tab[] = [
  {
    id: 1,
    header: "What types of images are available on your platform?",
    panel:
      "Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.",
  },
  {
    id: 2,
    header: "How can I access and download images from your platform?",
    panel:
      "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.",
  },
  {
    id: 3,
    header: "Do you offer free images, or is there a subscription required?",
    panel:
      "We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.",
  },
  {
    id: 4,
    header: "What payment methods do you accept for subscriptions?",
    panel:
      "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users.",
  },
  {
    id: 5,
    header: "Can I cancel or modify my subscription at any time?",
    panel:
      "Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.",
  },
  {
    id: 6,
    header: "How frequently do you update your image collection?",
    panel:
      "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.",
  },
];

export default DATA;
