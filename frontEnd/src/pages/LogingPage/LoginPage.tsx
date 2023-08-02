import { Link } from "react-router-dom"

import Sidebar from "../../components/Sidebar/Sidebar"

function LoginPage() {

return (
    <div className="bg-green-600 w-screen h-screen">
        <div className="flex align-between justify-end">
        <Sidebar />
        </div>
        <div className="flex justify-center">
        <div className="flex justify-evenly bg-gradient-to-t from-transparent to-green-300 shadow-black shadow-xl w-1/6 rounded-3xl border border-black h-96 mt-48">
            <div className="text-left">
            <h1 className="flex justify-center mt-12 text-3xl mb-8">Login</h1>
            <div>
            <span className="text-xl">Usuário</span>
            <br />
            <input type="text" className="solid w-full border border-black rounded hover:p-1 duration-300" />
            <br />
            <p className="text-xl mt-6">Senha</p>
            <input type="password" className="w-full solid border border-black rounded hover:p-1 duration-300" />
            <br />
            </div>
            <div className="flex justify-center mb-6">
            <button className="mt-6 w-44 bg-gradient-to-t from-green-700 to-green-300 border border-black rounded-xl hover:p-2 duration-300">Logar</button>
            </div>
            <p>Não possui uma conta ? <Link to='/login/register' className="hover:underline hover:decoration-solid hover:cursor-pointer">Cadastre-se</Link></p>
            </div>
        </div>
        </div>
    </div>
)
}

export default LoginPage