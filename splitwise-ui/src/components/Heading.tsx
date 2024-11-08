interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  className?: string;
}
export default function Heading({ children, className }: Props) {
  return (
    <h1
      className={`
        drop-shadow-[0_2px_1.2px_rgba(0,0,0,0.8)] 
        mb-4 text-3xl text-black font-bold 
        ${className}`}
    >
      {children}
    </h1>
  );
}
