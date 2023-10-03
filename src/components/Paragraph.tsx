import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Paragraph = ({
  children,
  className,
  ...rest
}: DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) => {
  return (
    <p className={twMerge("text-lg text-base-100", className)} {...rest}>
      {children}
    </p>
  );
};

export default Paragraph;
