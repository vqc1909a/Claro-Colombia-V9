import {useState} from "react";
import { ChangeEvent, ChangeEventSelect } from "interfaces";

const useForm = <t extends Object>(initialState : t) => {
  const [form, setForm] = useState(initialState);

  const handleChange: ChangeEvent = ({target}) => {
      const {value, name} = target;

      setForm({
          ...form,
          [name]: value
      })
  }
  const handleChangeSelect: ChangeEventSelect = ({target}) => {
      const {value, name} = target;

      setForm({
          ...form,
          [name]: value
      }) 
  }

  const handleChangeRadio: ChangeEvent = ({target}) => {

      setForm({
          ...form,
          [target.name]: (target as HTMLInputElement).checked
      })
  }

  return {
      form, 
      ...form,
      handleChange,
      handleChangeSelect,
      handleChangeRadio
  }
}

export default useForm