import { Input } from "./Input"
import Button from "./Button"
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const navigate = useNavigate();
  

  return (
    <form onSubmit={''} className='m-5'>
      <Input type="text" placeholder="Name" register={register} name="name" required />
      <Input type="text" placeholder="Last Name" register={register} name="email" required />
      <Input type="email" placeholder="Youremail@gmail.com" register={register} name="email" required />
      <Input type="password" placeholder="Password" register={register} name="password" required />
      <Button text="Sign Up" />
    </form>
  )
}
