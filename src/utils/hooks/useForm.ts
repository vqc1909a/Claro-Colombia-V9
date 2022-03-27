import {ChangeEvent, useState} from "react";

const useForm = <t extends Object>(initialState : t) => {
  const [form, setForm] = useState(initialState);

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
      const {value, name} = target;

      setForm({
          ...form,
          [name]: value
      })
  }

  return {
      form, 
      ...form,
      handleChange
  }
}

export default useForm