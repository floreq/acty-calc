import { useEffect, useState } from "react";
import Card from "./Card";
import Title from "./Title";
import { BsxArrowDown, BsxArrowUp } from "./Boxicons";
import { twMerge } from "tailwind-merge";

function Accordion({
  children,
  title,
  defaultIsOpen = false,
  className,
  onOpen,
  onClose,
}: {
  children: React.ReactNode;
  title: string;
  defaultIsOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  useEffect(() => {
    setIsOpen(defaultIsOpen);
  }, [defaultIsOpen]);

  const iconProps = {
    width: 16,
    height: 16,
  };

  return (
    <Card
      className={twMerge(`${isOpen ? "pb-4 px-0 pt-0" : "p-0"}`, className)}
    >
      <button
        className={`${
          isOpen ? "px-4 pt-4 mb-4" : "p-4"
        } gap-4 justify-center items-center flex w-full fill-accent-500 active:fill-accent-600 hover:fill-accent-300`}
        onClick={async () => {
          setIsOpen((prevState) => !prevState);

          if (isOpen) {
            await onClose?.();
          } else {
            await onOpen?.();
          }
        }}
      >
        <Title Component="h2">{title}</Title>
        {isOpen ? (
          <BsxArrowDown {...iconProps} />
        ) : (
          <BsxArrowUp {...iconProps} />
        )}
      </button>
      {isOpen ? children : null}
    </Card>
  );
}

export default Accordion;
