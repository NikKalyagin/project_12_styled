import { useState } from "react";
import 'tailwindcss/tailwind.css';
export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleMoreClick() {
    setTotal(total + 1);
  }

  function handleLessClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    /*<div className="my-4 overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
      <img className="h-64 bg-cover lg:h-full" src={info.image} width="200" height="200" alt={info.name} />
      <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">{info.name}</h2>
        <p className="mt-4 text-gray-500 dark:text-gray-300">{info.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
          disabled={total === 0}
          onClick={handleLessClick}
        >
          -
        </button>
        <h3 className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">{total ? total : ""}</h3>
        <button className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80" onClick={handleMoreClick}>
          +
        </button>
      </div>
    </div>*/
    <div className="my-4 bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md   rounded-l-xl rounded-r-xl">
  <img className="h-full lg:h-auto rounded-l-xl" src={info.image} width="200" height="200" alt={info.name} />

  <div className="lg:w-1/2 lg:p-6">
    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white md:text-4xl lg:mt-4">{info.name}</h2>
    <p className="mt-4 text-gray-500 dark:text-gray-300">{info.desc}</p>
    
    <div className="mt-4 flex items-center space-x-4">
      <button
        className="inline-flex items-center justify-center w-10 h-10 text-white duration-300 bg-blue-300 rounded-full hover:bg-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-80"
        disabled={total === 0}
        onClick={handleLessClick}
      >
        -
      </button>
      <h3 className="text-lg text-blue-300">{total ? total : ""}</h3>
      <button className="inline-flex items-center justify-center w-10 h-10 text-white duration-300 bg-blue-300 rounded-full hover:bg-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-80" onClick={handleMoreClick}>
        +
      </button>
    </div>
  </div>
</div>
  );
}