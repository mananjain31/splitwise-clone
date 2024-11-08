function Button({ ...props }) {
  const twClassesToAppend =
    " transform transition duration-400 hover:bg-black hover:bg-opacity-30 p-2 rounded";
  const className = twClassesToAppend + " " + props.className;
  return <button {...props} className={className} />;
}

export default Button;
