
import { Input } from './Input'
import { useForm } from "react-hook-form";
import Button from './Button';
import { Label } from './Label';
import { useNavigate, Link } from "react-router-dom";

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();
    
    return (
        <form onSubmit={''} className='m-5'>
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Youremail@gmail.com" register={register} name="email" required />
            <Label htmlFor="password">Password</Label>
            <Input type="password" placeholder="Password" register={register} name="password" required />
            <Button text="Sign in" />
        </form>
    )
}
