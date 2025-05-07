import LoginForm from "../components/loginForm"
import RegisterForm from "../components/registerForm"
import Button from "../components/Button"
import { useState } from "react";

export default function AuthPage() {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <div className="flex flex-col-reverse md:flex-row h-screen">
      {/* Sección del formulario */}
      <div className="w-full md:w-2/5 flex flex-col items-center justify-center bg-white p-8">
        <h1 className="text-2xl font-bold mb-2 text-center">Reserva de canchas deportivas</h1>
        <h2 className="text-lg mb-6">Bienvenido</h2>
        <div className="flex gap-6 w-[90%]">
          <Button text="Sign in" onClick={() => setActiveForm("login")}/>
          <Button text="Sign Up" onClick={() => setActiveForm("signup")} />
        </div>
        {activeForm === "login" && <LoginForm />}
        {activeForm === "signup" && <RegisterForm />}
      </div>

      {/* Sección de imagen */}
      <div className="w-full md:w-3/5 h-64 md:h-auto">
        <img
          src="/soccer_field.jpg"
          alt="img"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
