import Heading from "../components/Heading";
import InputGroup from "../components/InputGroup";
import Navbar from "../components/Navbar";
import SubmitButton from "../components/SubmitButton";
import useFormState from "../hooks/useFormController";
import { validateContactNumber, validateEmail } from "../utils/validations";

const inputs = ["contactNumberOrEmail", "password"];
export default function Login() {
  const control = useFormState(inputs);

  const validateForm = () => {
    const errors = control.clearErrors();
    let isValid = true;
    for (const input of inputs) {
      const value = control.formValues[input];
      if (value === undefined || value === "" || value === null) {
        errors[input] = "Required";
        isValid = true;
      } else if (input == "contactNumberOrEmail") {
        isValid = validateContactNumber(value) || validateEmail(value);
        if (!isValid)
          errors[input] = "Enter Contact number or Email in correct format";
        isValid = true;
      }
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
        <Heading>Lets Log you in...</Heading>
        <form className="py-2 flex flex-col gap-2" onSubmit={handleSubmit}>
          <InputGroup
            control={control}
            id="contactNumberOrEmail"
            label="10 Digit Contact Number or Email"
            placeholder="Eg: 99** / abc@jimail.com"
          />
          <InputGroup
            control={control}
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
