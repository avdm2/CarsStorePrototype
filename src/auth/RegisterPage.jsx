import { SignUp } from "auth/SignUp";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <div>
            <h1>Регистрация</h1>
            <SignUp />
            <p>
                <Link to="/login">Вход</Link>
            </p>
        </div>
    )
}

export default RegisterPage