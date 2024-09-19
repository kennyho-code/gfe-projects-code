import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from "react";
import { twMerge } from "tailwind-merge";

// https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form/Example

export default function Home() {
  return (
    <div>
      <main className="p-4 flex flex-col gap-6">
        <header className="flex flex-col">
          <h1 className="text-xl font-bold">Billing Information</h1>
          <div className="text-gray-500 text-md">
            Update your billing details and address
          </div>
        </header>

        <form className="flex flex-col gap-6">
          <section className="flex flex-col md:flex-row justify-between gap-4">
            <H2>Payment Details</H2>
            <div className="flex flex-col gap-4 grow-[2]">
              <div>
                <Label htmlFor="card-number-input">Card number</Label>
                <Input
                  id="card-number-input"
                  type="tel"
                  name="card-number-input"
                />
              </div>

              <div>
                <Label htmlFor="card-holder-input">Cardholder name</Label>
                <Input
                  id="card-holder-input"
                  type="text"
                  name="card-holder-input"
                />
              </div>

              <div className="flex gap-8">
                <div className="grow">
                  <Label htmlFor="expiration-input">Expiration</Label>
                  <Input
                    id="expiration-input"
                    type="month"
                    name="expiration-input"
                  />
                </div>
                <div className="grow">
                  <Label htmlFor="cvv-input">CVV</Label>
                  <Input
                    id="cvv-input"
                    type="number"
                    minLength={3}
                    maxLength={3}
                    name="cvv-input"
                  />
                </div>
              </div>
            </div>
          </section>

          <hr />

          <section className="flex flex-col md:flex-row justify-between gap-4">
            <H2>Email Address</H2>
            <div className="grow-[2]">
              <Label htmlFor="cvv-input">Email</Label>
              <Input id="email-input" type="email" name="email-input" />
            </div>
          </section>

          <hr />

          <section className="flex flex-col md:flex-row justify-between gap-4">
            <H2>Address Details</H2>
            <div className="flex flex-col gap-4 grow-[2]">
              <div>
                <Label htmlFor="country-input">Country / Region</Label>
                <Select id="country-input">
                  <option value="US">United States</option>
                </Select>
              </div>

              <div>
                <Label htmlFor="address-input">Address</Label>
                <Input id="street-input" type="text" name="street-input" />
              </div>

              <div>
                <Input
                  id="street-2-input"
                  type="text"
                  name="street-2-input"
                  aria-label="Street"
                />
              </div>

              <div className="flex gap-8">
                <div className="basis-0 grow">
                  <Label htmlFor="city-input">City</Label>
                  <Input id="city-input" type="text" name="city-input" />
                </div>

                <div className="basis-0 grow">
                  <Label htmlFor="state-input">State</Label>
                  <Select id="state-input">
                    <option value="fl">FL</option>
                  </Select>
                </div>

                <div className="basis-0  grow">
                  <Label htmlFor="zip-input">Zip</Label>
                  <Input id="zip-input" type="text" name="zip-input" />
                </div>
              </div>
            </div>
          </section>
          <div>
            <button className="border-2 rounded-md bg-gray-100 px-8 py-2 text-gray-500 float-right">
              Save Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-semibold basis-1/4">{children}</h2>;
}

interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  className?: string;
  children: ReactNode;
}

function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={twMerge(
        "w-full border-2 rounded-md px-4 py-2 bg-gray-100",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
}

function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge(
        "w-full border-2 rounded-md px-4 py-2 bg-gray-100",
        className,
      )}
      {...props}
    />
  );
}

interface LabelProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  className?: string;
  children: ReactNode;
}

function Label({ className, children, ...props }: LabelProps) {
  return (
    <label
      className={twMerge("block text-gray-600 font-semibold", className)}
      {...props}
    >
      {children}
    </label>
  );
}
