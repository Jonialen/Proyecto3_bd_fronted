import { Input } from "./Input"
import Button from "./Button"
import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import { registerRequest } from "../services/Requests";

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await registerRequest(data);
      console.log("register success:", res.data);
      navigate("/courts"); 
    } catch (error) {
      console.error("Register failed", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='m-5 w-full'>
      <div className="mb-2">
        <Input type="text" placeholder="Name" register={register} name="name" required />
        {errors.name && (<p className="text-red-500 text-sm">Name is required</p>) }
      </div>
      <div className="mb-2">
        <Input type="text" placeholder="Last Name" register={register} name="last_name" required />
        {errors.last_name && (<p className="text-red-500 text-sm">Last name is required</p>) }
      </div>
      <div className="mb-2">
        <Input type="email" placeholder="Youremail@gmail.com" register={register} name="email" required />
        {errors.email && (<p className="text-red-500 text-sm">Email is required</p>) }
      </div>
      <div className="mb-2">
        <Input type="password" placeholder="Password" register={register} name="password" required />
        {errors.password && (<p className="text-red-500 text-sm"> Password is required</p>)}
      </div>
      <div className="flex gap-2">
        <Input type="text" placeholder="Phone Number 1" register={register} name="phone1"/>
        <Input type="text" placeholder="Phone Number 2 (optional)" register={register} name="phone2"/>
      </div>
      <Button text="Sign Up" />
    </form>
  )
}
