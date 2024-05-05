const SubmitButton = ({
  children,
  onClick,
}: {
  children: string;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="bg-yellow-200 py-2 text-xl font-bold border-4 border-black"
  >
    {children}
  </button>
);

export default SubmitButton;
