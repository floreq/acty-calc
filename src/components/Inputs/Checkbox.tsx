import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type CheckboxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
};

const Checkbox = ({ id, label, ...rest }: CheckboxProps) => {
  return (
    <div className="flex gap-2">
      <input
        id={id}
        className="accent-accent-500 w-4 h-4 shrink-0 mt-1.5"
        {...rest}
        type="checkbox"
      />
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
