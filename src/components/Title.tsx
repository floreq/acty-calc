import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Title = ({
  Component = "h1",
  children,
  className,
  ...rest
}: {
  Component?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Component
      className={twMerge("text-2xl font-bold text-base-100", className)}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Title;
