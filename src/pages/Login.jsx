import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constants/env";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true
})

function Login() {
    const [email, setEmail] = useState("damaris@test.com");
    const [password, setPassword] = useState("123456");
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const res = await axios.post(API_BASE_URL + "login", {
                email,
                password
            });
            localStorage.setItem("token", res.data.token.token);
            localStorage.setItem("usuario films", JSON.stringify(res.data.token.user));
            Toast.fire({
                icon: "success",
                title: "Login exitoso"
            });
            navigate("/now-playing");
        }
        catch (err) {
            console.error("error al hacer login", err);
            Toast.fire({
                icon: "error",
                title: "Credenciales incorrectas"
            });
        }

    };
    return (
        <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="mx-auto h-10 w-auto" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Iniciar sesión</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={e => {
                    e.preventDefault();
                    handleLogin();
                }} method="POST" className="space-y-6">
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-100">Correo electrónico</label>
                        <div className="mt-2">
                            <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm/6 font-medium text-gray-100">Contraseña</label>
                            {/* <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
                            </div> */}
                        </div>
                        <div className="mt-2">
                            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">INICIAR SESIÓN</button>
                    </div>
                </form>
            </div>
        </div>
        // <div>
        //     <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        //     <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        //     <button onClick={handleLogin}>Login</button>
        // </div>
    );
}
export default Login;