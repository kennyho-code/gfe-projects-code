import {
  DetailedHTMLProps,
  LabelHTMLAttributes,
  ReactNode,
  InputHTMLAttributes,
} from "react";

export default function Home() {
  return (
    <div>
      <main>
        <header>
          <h1>Manage Your Account</h1>
          <div>
            Update your account details below for a tailored experience on our
            platform.
          </div>
        </header>
        <div>
          <div>Avatar</div>
          <div>Change Avatar</div>
        </div>

        <form>
          <div>
            <div>
              <Label>First name</Label>
              <Input />
            </div>

            <div>
              <Label>Last name</Label>
              <Input />
            </div>
          </div>

          <div>
            <Label>Email</Label>
            <Input />
          </div>

          <div>
            <Label>UserName</Label>
            <Input />
          </div>

          <div>Allows others to find and interact with you easily.</div>
          <button>Save Changes</button>
        </form>
      </main>
    </div>
  );
}

interface LabelProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  children: ReactNode;
  className?: string;
}

function Label({ children, ...props }: LabelProps) {
  return <label {...props}>{children}</label>;
}

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
}

function Input({ className, ...props }: InputProps) {
  return <input className={className} {...props} />;
}
