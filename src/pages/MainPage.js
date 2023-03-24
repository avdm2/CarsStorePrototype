import { Link } from "react-router-dom";

function MainPage() {
    return (
        <>
            <h1>
                <Link to="/login">Авторизируйтесь</Link>, чтобы просматривать товары!
            </h1>
        </>
    );
}

export default MainPage;