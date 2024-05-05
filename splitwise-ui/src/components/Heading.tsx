interface Props {
  children: string;
}
export default function Heading({ children }: Props) {
  return <h1 className="mb-4 text-3xl text-black font-bold">{children}</h1>;
}
