import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Wrapper = ({
  Component = "div",
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
      className={twMerge("mx-auto max-w-2xl p-4", className)}
      style={{ marginBottom: "60px" }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Wrapper;
