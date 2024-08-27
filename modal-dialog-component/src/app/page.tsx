"use client";
import {
  ReactNode,
  useEffect,
  useState,
  RefObject,
  useRef,
  useId,
} from "react";

import { createPortal } from "react-dom";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg"
        >
          Open
        </button>
        <Modal
          title="Are you sure you want to leave the process?"
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className="flex flex-col gap-4">
            <p>
              Your upgrade plan process will be cancelled. You need to start
              again if you leave the process.
            </p>

            <div className="flex gap-2 mb-4 justify-center">
              <button className="bg-white border-2 w-[140px] px-4 py-2 border-none shadow-lg">
                No
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                className="text-white border-2 w-[140px] px-4 py-2 bg-blue-600 border-none rounded-lg"
              >
                Yes
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </main>
  );
}

function useOnKeyDown(key: string, fn: () => void) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === key) {
        fn();
      }
    }
    document.addEventListener("keydown", onKeyDown);
  }, [fn]);
}

function useOnClickOutside(elRef: RefObject<HTMLDivElement>, fn: () => void) {
  useEffect(() => {
    function onClickOutside(event: MouseEvent | TouchEvent) {
      console.log("clicked");
      if (
        event.target instanceof Node &&
        elRef.current != null &&
        !elRef.current?.contains(event.target)
      ) {
        fn();
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("touchstart", onClickOutside);
  }, [fn]);
}

function Modal({
  open,
  onClose,
  children,
  title,
}: {
  title: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useOnKeyDown("Escape", onClose);
  useOnClickOutside(dialogRef, onClose);
  const titleId = useId();
  const contentId = useId();
  if (!open) {
    return null;
  }

  return createPortal(
    <div
      aria-labelledby={contentId}
      aria-describedby={titleId}
      role="dialog"
      className="bg-white rounded-lg fixed inset-0 flex justify-center items-center bg-gray-500/50"
    >
      <div
        className="w-[375px] p-4 flex justify-center items-center  border-none rounded-lg flex-col gap-4 bg-white"
        ref={dialogRef}
      >
        <h1 id={titleId} className="font-bold text-3xl">
          {title}
        </h1>
        <div id={contentId}>{children}</div>
      </div>
    </div>,
    document.body
  );
}
