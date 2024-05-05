import SubmitButton from "../components/SubmitButton";
import Heading from "../components/Heading";
import InputGroup from "../components/InputGroup";
import Navbar from "../components/Navbar";

export default function Register() {
  return (
    <>
      <Navbar />
      <main className="px-4 py-2">
        <Heading>Create an account...</Heading>
        <form className="py-2 flex flex-col gap-2">
          <InputGroup
            id="name"
            label="What they call you?"
            placeholder="Your Name"
          />
          <InputGroup
            type="number"
            id="contactNumber"
            label="Contact Number"
            placeholder="Or shall we call 911"
          />
          <InputGroup
            type="email"
            id="email"
            label="Your Email"
            placeholder="Eg: cooldude69@jimail.com"
          />
          <InputGroup
            type="password"
            id="password"
            label="Password"
            placeholder="Keep it secret🤫"
          />
          <SubmitButton>Create!</SubmitButton>
        </form>
      </main>
    </>
  );
}
