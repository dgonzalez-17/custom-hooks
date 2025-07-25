import { useState } from "react";

export const useForm = (initialForm = {}) => {
  /*
   {
    username: "",
    email: "",
    password: "",
  }
  */
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    onResetForm,
    formState,
    onInputChange,
  };
};
