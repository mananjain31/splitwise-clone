import SubmitButton from "../components/SubmitButton";
import Heading from "../components/Heading";
import InputGroup from "../components/InputGroup";
import Navbar from "../components/Navbar";
import useFormController from "../hooks/useFormController";
import { validateContactNumber } from "../utils/validations";

const inputs = [
  "name",
  "contactNumber",
  "email",
  "password",
  "confirm-password",
];
export default function Register() {
  const control = useFormController(inputs);

  const validateForm = () => {
    const errors = control.clearErrors();
    let isValid = true;
    for (const input of inputs) {
      const value = control.formValues[input];
      if (value === undefined || value === "" || value === null) {
        errors[input] = "Required";
        isValid = false;
      } else if (input === "contactNumber") {
        if (!validateContactNumber(input))
          errors[input] = "Enter valid 10 digit contact number";
        isValid = false;
      }
    }
    const { password, "confirm-password": confirmPassword } =
      control.formValues;
    if (
      password !== undefined &&
      confirmPassword !== undefined &&
      password !== confirmPassword
    ) {
      errors["confirm-password"] = "Does not match the given password";
      isValid = false;
    }
    if (isValid) control.setFormErrors(errors);
    return isValid;
  };

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    validateForm();
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
          />
          <InputGroup
            control={control}
            type="number"
            id="contactNumber"
            label="Contact Number"
            placeholder="Or shall we call 911"
          />
          <InputGroup
            control={control}
            type="email"
            id="email"
            label="Your Email"
            placeholder="Eg: cooldude69@jimail.com"
          />
          <InputGroup
            control={control}
            type="password"
            id="password"
            label="Password"
            placeholder="Keep it secret🤫"
          />
          <InputGroup
            control={control}
            type="password"
            id="confirm-password"
            label="Confirm Password"
            placeholder="Hope you're not a goldfish"
          />
          <SubmitButton>Create!</SubmitButton>
        </form>
      </main>
    </>
  );
}
