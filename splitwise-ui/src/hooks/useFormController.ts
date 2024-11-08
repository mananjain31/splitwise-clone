import { useEffect, useState } from "react";

export type ValueTypes = string | number | readonly string[] | undefined;
export type FormErrorTypes = string | Error | undefined;
export type SetVal = (value: ValueTypes) => void;
export type SetFormError = (err: FormErrorTypes) => void;

export type FormControl = {
  formValues: Record<string, ValueTypes>;
  setValOf: Record<string, SetVal>;
  setValOfHandler: Record<
    string,
    React.ChangeEventHandler<HTMLInputElement> | undefined
  >;
  setFormValues: React.Dispatch<
    React.SetStateAction<Record<string, ValueTypes>>
  >;
  // setErrorOf: Record<string, SetFormError>;
  formErrors: Record<string, FormErrorTypes>;
  setFormErrors: React.Dispatch<
    React.SetStateAction<Record<string, FormErrorTypes>>
  >;
  hasErrors: () => boolean;
  clearErrors: () => Record<string, FormErrorTypes>;
};

const useFormController = (inputs: string[]): FormControl => {
  const [formValues, setFormValues] = useState(
    {} as Record<string, ValueTypes>
  );
  const [formErrors, setFormErrors] = useState(
    {} as Record<string, FormErrorTypes>
  );
  // const setErrorOf: Record<string, SetFormError> = {};
  const setValOf: Record<string, SetVal> = {};
  const setValOfHandler: Record<
    string,
    React.ChangeEventHandler<HTMLInputElement> | undefined
  > = {};

  for (const input of inputs) {
    // setErrorOf[input] = (err) => {
    //   setFormErrors({ ...formErrors, [input]: err });
    // };
    setValOf[input] = (value) => {
      setFormValues({ ...formValues, [input]: value });
    };
    setValOfHandler[input] = (event) => {
      setValOf[input](event.target.value);
    };
  }
  useEffect(() => {
    const initialState: Record<string, ValueTypes> = {};
    for (const input of inputs) initialState[input] = "";
    setFormValues(initialState);

    const initialErrors: Record<string, FormErrorTypes> = {};
    for (const input of inputs) initialErrors[input] = undefined;
    setFormErrors(initialErrors);
  }, []);

  const hasErrors = () => {
    for (const input of inputs) {
      if (formErrors[input] !== undefined) return true;
    }
    return false;
  };

  const clearErrors = () => {
    const initialErrors: Record<string, FormErrorTypes> = {};
    for (const input of inputs) initialErrors[input] = undefined;
    setFormErrors(initialErrors);
    return initialErrors;
  };

  return {
    formValues,
    setValOf,
    setValOfHandler,
    setFormValues,
    formErrors,
    // setErrorOf,
    setFormErrors,
    hasErrors,
    clearErrors,
  };
};
export default useFormController;
