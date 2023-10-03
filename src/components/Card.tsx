// @ts-nocheck

import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  Component = "div",
  className,
  children,
  ...rest
}: {
  Component?: keyof JSX.IntrinsicElements;
} & HTMLProps<HTMLElement>) => {
  return (
    <Component
      className={twMerge("p-4 rounded-lg bg-base-700", className)}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Card;
