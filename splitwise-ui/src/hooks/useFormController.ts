import { useEffect, useState } from "react";

export type ValueTypes = string | number | readonly string[] | undefined;
export type SetVal = (value: ValueTypes) => void;
export type FormControl = {
  formValues: Record<string, ValueTypes>;
  setValOf: Record<string, SetVal>;
  setValOfHandler: Record<
    string,
    React.ChangeEventHandler<HTMLInputElement> | undefined
  >;
};
const useFormController = (keys: string[]): FormControl => {
  const [formValues, setFormValues] = useState({});
  const setValOf: Record<string, SetVal> = {};
  const setValOfHandler: Record<
    string,
    React.ChangeEventHandler<HTMLInputElement> | undefined
  > = {};
  for (const key of keys) {
    setValOf[key] = (value) => {
      setFormValues({ ...formValues, [key]: value });
    };
    setValOfHandler[key] = (event) => {
      setValOf[key](event.target.value);
    };
  }
  useEffect(() => {
    const initialState: Record<string, ValueTypes> = {};
    for (const key of keys) initialState[key] = "";
    setFormValues(initialState);
  }, []);
  return { formValues, setValOf, setValOfHandler };
};
export default useFormController;
