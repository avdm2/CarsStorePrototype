import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
    <>
      <h1>Что-то пошло не так!</h1>
      <Link to="/">Главная</Link>
    </>
  );
}

export default NotFoundPage;