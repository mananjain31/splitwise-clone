import Heading from "../components/Heading";
import InputGroup from "../components/InputGroup";
import Navbar from "../components/Navbar";
import SubmitButton from "../components/SubmitButton";

export default function Login() {
  return (
    <>
      <Navbar />
      <main className="px-4 py-2">
        <Heading>Lets Log you in...</Heading>
        <form className="py-2 flex flex-col gap-2">
          <InputGroup
            id="contactNumberOrEmail"
            label="Contact Number or Email"
            placeholder="Eg: 99** / abc@jimail.com"
          />
          <InputGroup
            type="password"
            id="password"
            label="Password"
            placeholder="Keep it secret🤫"
          />
          <SubmitButton>Login</SubmitButton>
        </form>
      </main>
    </>
  );
}
