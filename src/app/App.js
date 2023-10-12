//import "./styles.css";
import 'tailwindcss/tailwind.css';
import Shop from "./shop";
import { useState } from "react";

export default function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <button className="w-300 h-100 bg-blue-500 text-white border-2 border-black rounded-2xl mt-50 ml-50 hover:bg-blue-700  p-4 m-8 hover:border-blue-900" onClick={() => setLogin(false)}>
          Выйти
        </button>
        <Shop />
      </>
    );
  } else {
    return (
      <>
        <h2 className="  w-300 h-100 bg-blue-500 text-white border-2 border-black rounded-2xl mt-50 ml-50  p-4 m-8">Нужно залогиниться!</h2>
        <button className="w-300 h-100 bg-blue-500 text-white border-2 border-black rounded-2xl mt-50 ml-50 hover:bg-blue-700  p-4 m-8" onClick={() => setLogin(true)}>
          Войти
        </button>
      </>
    );
  }
}