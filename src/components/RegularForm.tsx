import { useState, ChangeEvent, FormEvent } from 'react';
import { useForm, SubmitHandler, Message } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

type Inputs = {
  username: string;
  email: string;
  password: string;
}


function RegularForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    // e.preventDefault();
    alert(JSON.stringify(data));
    console.log(data)
  };

  // const [formData, setFormData] = useState<Inputs>({
  //   username: '',
  //   email: '',
  //   password: '',
  // });


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>


      <input placeholder="username" {...register("username", {
        required: "Username is required", minLength: {
          value: 2,
          message: "Username must be at least 2 characters"
        }
      })} />
      <p>{errors.username?.message}</p>

      <input placeholder="email" {...register("email", {
        required: "Email is required", pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          message: "Please enter a valid email address"
        }
      })} />
      <p>{errors.email?.message}</p>
      <input placeholder="password" type="password" {...register("password", {
        required: "Password is required", minLength: {
          value: 8,
          message: "Password must be at least 8 characters"
        }, maxLength: {
          value: 20,
          message: "Password cannot exceed 20 characters"
        },
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
          message: "Password must contain at least one uppercase letter, lowercase letter, number and special character"
        }
      })} />
      <p>{errors.password?.message}</p>
      <input type="submit" />
    </form>
    </>
  );


  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };


  // return (
  //   <form onSubmit={handleSubmit}>
  //       <h1>Change Me To React Hook Form</h1>
  //     <div>
  //       <input
  //         type="text"
  //         id="username"
  //         name="username"
  //         placeholder='Enter UserName'
  //         value={formData.username}
  //         onChange={handleChange}
  //       />
  //     </div>
  //     <div>
  //       <input
  //         type="text"
  //         id="email"
  //         name="email"
  //         placeholder='Enter Email'
  //         value={formData.email}
  //         onChange={handleChange}
  //       />
  //     </div>
  //     <div>
  //       <input
  //         type="text"
  //         id="password"
  //         name="password"
  //         placeholder='Enter Password'
  //         value={formData.password}
  //         onChange={handleChange}
  //       />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // );
}

export default RegularForm;
