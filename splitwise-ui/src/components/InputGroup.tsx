import { FormControl } from "../hooks/useFormController";

interface Props {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  control?: FormControl;
}
export default function InputGroup({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  min = undefined,
  max = undefined,
  control = undefined,
}: Props) {
  return (
    <div className="flex flex-col">
      {label ? (
        <label className="text-sm" htmlFor={id}>
          {label}
        </label>
      ) : (
        <></>
      )}
      <input
        {...(control !== undefined
          ? {
              value: control.formValues[id],
              onChange: control.setValOfHandler[id],
            }
          : {})}
        className="p-1 text-xl border-2 border-black outline-none"
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
      />
    </div>
  );
}
