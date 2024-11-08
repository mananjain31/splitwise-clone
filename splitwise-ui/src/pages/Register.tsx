/* eslint-disable @typescript-eslint/no-unused-vars */
import SubmitButton from "../components/SubmitButton";
import Heading from "../components/Heading";
import InputGroup from "../components/InputGroup";
import Navbar from "../components/Navbar";
import useFormController from "../hooks/useFormController";

export default function Register() {
  const control = useFormController([
    "name",
    "contactNumber",
    "email",
    "password",
    "confirm-password",
  ]);

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    // const formData = new FormData(event.target as HTMLFormElement);
    control.setValOf?.["name"]("mananjain");
  };
  return (
    <>
      <Navbar />
      <main className="px-4 py-2">
        <Heading>Create an account...</Heading>
        <form className="py-2 flex flex-col gap-2" onSubmit={handleSubmit}>
          <InputGroup
            control={control}
            id="name"
            label="What they call you?"
            placeholder="Your Name"
            required
          />
          <InputGroup
            control={control}
            type="number"
            id="contactNumber"
            label="Contact Number"
            placeholder="Or shall we call 911"
            min={1000000000}
            max={9999999999}
            required
          />
          <InputGroup
            control={control}
            type="email"
            id="email"
            label="Your Email"
            placeholder="Eg: cooldude69@jimail.com"
            required
          />
          <InputGroup
            control={control}
            type="password"
            id="password"
            label="Password"
            placeholder="Keep it secret🤫"
            required
          />
          <InputGroup
            control={control}
            type="password"
            id="confirm-password"
            label="Confirm Password"
            placeholder="Hope you're not a goldfish"
            required
          />
          <SubmitButton>Create!</SubmitButton>
        </form>
      </main>
    </>
  );
}
