import React from "react"
import { useForm, MultipleFieldErrors } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"


interface FormInputs {
  singleErrorInput: string
}


export default function Foo() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>()
  const onSubmit = (data: FormInputs) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("singleErrorInput", { required: "This is required." })}
      />
      {/* <ErrorMessage errors={errors} name="singleErrorInput" /> */}


      <ErrorMessage
        errors={errors}
        name="singleErrorInput"
        render={({ message, messages }) => {
            return messages !== "undefined" ? messages.map((oneMessage) => <p key={}>{oneMessage}</p>) :
                <p>{message}</p>
        }}
      />


      <input type="submit" />
    </form>
  )
}