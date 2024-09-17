"use client";
import {
  ReactNode,
  DetailedHTMLProps,
  LabelHTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  FormEvent,
  useState,
} from "react";

function clsx(...classnames: any[]) {
  return classnames.filter(Boolean).join(" ");
}

function fakeFetch(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<boolean> {
  console.log(`calling url: ${input} with inout ${JSON.stringify(init)}`);
  return Promise.resolve(true);
}

export default function Home() {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name-input");
    const email = formData.get("email-input");
    const message = formData.get("message-input");

    const response = await fakeFetch("www.abstract.com", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (response) {
      setShowSuccess(true);
    } else {
      setShowError(true);
      // error
    }
  }
  return (
    <div className="w-full h-screen bg-gray-50 p-4 relative">
      {showError && <Error onClose={() => setShowError(false)} />}
      <main className="border-2 rounded-lg p-4 bg-white h-screen flex lg:justify-center lg:items-center">
        <section className="flex flex-col gap-10 lg:flex-row max-w-[1216px]">
          <div className="flex flex-col gap-8 lg:w-1/2">
            <header className="flex flex-col gap-4">
              <h1 className="font-bold text-3xl lg:text-5xl">
                Talk to our team{" "}
              </h1>
              <div>
                We&apos;re committed to delivering the support you require to
                make your experience as smooth as possible.
              </div>
            </header>
            <ul className="flex flex-col gap-6">
              <ListItem>
                <span>🏠</span>
                <span className="whitespace-pre">{`123 Maple Street,\nSpringfield, IL, USA`}</span>
              </ListItem>
              <ListItem>
                <span>📱</span>
                <span>+1 (650) 555-0198</span>
              </ListItem>
              <ListItem>
                <span>✉️</span>
                <span>hello@abstractly.com</span>
              </ListItem>
            </ul>
          </div>
          {showSuccess ? (
            <div className="border-2 rounded-lg p-4 flex justify-center  items-center flex-col gap-8 lg:w-1/2">
              <div>✅</div>
              <div>
                Submission successful! We will get back to you in 3-5 days via
                email.
              </div>
              <button
                onClick={() => {
                  setShowSuccess(false);
                }}
                className="px-4 py-2 border-2 rounded-lg "
              >
                Send another message
              </button>
            </div>
          ) : (
            <Form onSubmit={handleSubmit} />
          )}
        </section>
      </main>
    </div>
  );
}

function Form({
  onSubmit,
}: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form
      className="border-2 rounded-lg p-4 flex flex-col gap-4 lg:w-1/2"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-grow">
          <Label htmlFor="name-input">Name</Label>
          <Input
            placeholder="Your name"
            type="text"
            id="name-input"
            name="name-input"
          />
        </div>
        <div className="flex-grow">
          <Label htmlFor="email-input">Email</Label>
          <Input
            placeholder="example@example.com"
            type="text"
            id="email-input"
            name="email-input"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message-input">Name</Label>
        <TextArea
          placeholder="Write your message..."
          id="message-input"
          name="message-input"
        />
      </div>

      <button
        className="w-full bg-blue-500 py-2 rounded-md mt-12"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

function Error({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed left-[50%] -translate-x-1/2 bg-red-50 text-red-500 max-w-[650px] w-full flex justify-center items-center gap-4 rounded-full p-2 ">
      <div className=" h-8 rounded-full  px-2 border-2 bg-white text-red-500  inline-flex justify-center items-center">
        Error
      </div>
      <div>
        Failed to submit. Please ensure your details are correct or try again
        later.
      </div>
      <button onClick={onClose}>X</button>
    </div>
  );
}

function ListItem({ children }: { children: ReactNode }) {
  return <li className="flex gap-2">{children}</li>;
}

interface LabelProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  children?: ReactNode;
}

function Label({ children, ...props }: LabelProps) {
  return (
    <label className={clsx("block", props.className)} {...props}>
      {children}
    </label>
  );
}

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}
function Input({ ...props }: InputProps) {
  return (
    <input
      className={clsx("border-2 rounded-lg w-full px-2 py-2", props.className)}
      {...props}
    />
  );
}

interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}
function TextArea({ ...props }: TextAreaProps) {
  return (
    <div>
      <textarea
        className={clsx(
          "border-2 rounded-lg w-full px-2 py-2 h-[108px]",
          props.className,
        )}
        {...props}
      />
      <span className="float-right">0/500</span>
    </div>
  );
}
