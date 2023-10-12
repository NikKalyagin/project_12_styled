import { useState, useEffect } from "react";
import Item from "./item.js";
//import "./styles.css";
import 'tailwindcss/tailwind.css';
import useFetch from "./useFetch.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const { get, loader } = useFetch();
  useEffect(() => {
    get("https://learn.guidedao.xyz/api/student/products")
      .then((data) => {
        //console.log(data);
        if (data && Array.isArray(data[0])) {
          setItems(data[0]);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  if (loader) {
    return <><div class="w-20 h-20 m-8 border-t-4 border-blue-500 border-solid rounded-full animate-spin">
    <div class="text-center mt-2 text-gray-700">Считаем ворон.........</div>
  </div>
  </>
  }

  const FDatas = items.flat(3);

  return (
    <div className="shop">
      <ul  className="">
        {FDatas.map((FData) => (
          <li key={FData.id} className="ui-item-list">
            <Item info={FData} />
          </li>
        ))}
      </ul>
    </div>
  );
}
