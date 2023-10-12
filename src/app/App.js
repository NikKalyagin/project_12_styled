import "./styles.css";
import Shop from "./shop";
import { useState } from "react";

export default function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <Shop />
        <button className="ui-button" onClick={() => setLogin(false)}>
          Выйти
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2 className="ui-title">Нужно залогиниться!</h2>
        <button className="ui-button" onClick={() => setLogin(true)}>
          Войти
        </button>
      </>
    );
  }
}