import {
  ReactNode,
  DetailedHTMLProps,
  LabelHTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

function clsx(...classnames: any[]) {
  return classnames.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-50 p-4">
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

          <form className="border-2 rounded-lg p-4 flex flex-col gap-4 lg:w-1/2">
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
                <Label htmlFor="name-input">Email</Label>
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
        </section>
      </main>
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
