interface Props {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
}
export default function InputGroup({
  id,
  label,
  type = "text",
  placeholder,
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
        className="p-1 text-xl border-2 border-black outline-none"
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
      />
    </div>
  );
}
