import { Login } from "auth/Login";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div>
            <h1>Войти</h1>
            <Login />
            <p>
                <Link to="/register">Регистрация</Link>
            </p>
        </div>
    )
}

export default LoginPage