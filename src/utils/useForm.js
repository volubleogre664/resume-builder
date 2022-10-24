import { useState } from "react";

const useForm = (initialState = {}, callback) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const onChange = ({ target }) => {
    switch (target.type) {
      case "checkbox": {
        setValues({
          ...values,
          [target.name]: target.checked,
        });
        break;
      }

      default: {
        setValues({
          ...values,
          [target.name]: target.value,
        });
        break;
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (callback) {
      callback();
    }

    console.log(values);
    reset();
  };

  return [values, onChange, onSubmit, reset];
};

export default useForm;
