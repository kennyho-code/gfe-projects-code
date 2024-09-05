"use client";
import { useState } from "react";

export default function Home() {
  const [checkedItems, setCheckedItems] = useState(Array(3).fill(false));
  function toggleCheckedItem(idx: number) {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[idx] = !newCheckedItems[idx];
    setCheckedItems(newCheckedItems);
  }
  return (
    <div className="flex justify-center items-center">
      <div>
        <form>
          <fieldset className="flex flex-col">
            <div>
              <input
                className="hidden"
                checked={checkedItems[0]}
                onClick={() => toggleCheckedItem(0)}
                id="one"
                type="radio"
                value={1}
              />
              <label htmlFor="one">One</label>
            </div>

            <div>
              <input
                onClick={() => toggleCheckedItem(1)}
                checked={checkedItems[1]}
                id="two"
                type="radio"
                value={2}
              />
              <label htmlFor="two">Two</label>
            </div>

            <div>
              <input
                onClick={() => toggleCheckedItem(2)}
                checked={checkedItems[2]}
                id="three"
                type="radio"
                value={3}
              />
              <label htmlFor="three">Three</label>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

function RadioInput() {
  return (
    <div>
      <input id="one" type="radio" value={1} />
      <label htmlFor="one">One</label>
    </div>
  );
}
