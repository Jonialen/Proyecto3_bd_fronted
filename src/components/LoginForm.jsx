import { Input } from './Input'
import { useForm } from "react-hook-form";
import Button from './Button';
import { Label } from './Label';
import { useNavigate} from "react-router-dom";
import { loginRequest } from '../services/Requests';

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
          const res = await loginRequest(data);
          console.log("Login success:", res.data);
          navigate("/courts"); 
        } catch (error) {
          console.error("Login failed", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='m-5 w-full'>
            <div className='mb-2'>
                <Label htmlFor="email">Email</Label>
                <Input type="email" placeholder="Youremail@gmail.com" register={register} name="email" required />
                {errors.email && (<p className="text-red-500 text-sm">Email is required</p>) }
            </div>
            <div className='mb-2'>
                <Label htmlFor="password">Password</Label>
                <Input type="password" placeholder="Password" register={register} name="password" required />
                {errors.password && (<p className="text-red-500 text-sm"> Password is required</p>)}
            </div>
            <Button text="Sign in" />
        </form>
    )
}
