import Heading from "../components/Heading";
import InputGroup from "../components/InputGroup";
import Navbar from "../components/Navbar";
import SubmitButton from "../components/SubmitButton";
import useFormState from "../hooks/useFormController";

export default function Login() {
  const control = useFormState(["contactNumberOrEmail", "password"]);
  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    // const formData = new FormData(event.target as HTMLFormElement);
    console.log(control);
  };
  return (
    <>
      <Navbar />
      <main className="px-4 py-2">
        <Heading>Lets Log you in...</Heading>
        <form className="py-2 flex flex-col gap-2" onSubmit={handleSubmit}>
          <InputGroup
            control={control}
            id="contactNumberOrEmail"
            label="Contact Number or Email"
            placeholder="Eg: 99** / abc@jimail.com"
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
          <SubmitButton>Login</SubmitButton>
        </form>
      </main>
    </>
  );
}
