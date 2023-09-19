import { useParams } from "react-router-dom";
import { testCoffeeItems } from "./testCoffeeItems";
// import { CoffeeCardProps } from "../types/types";

export const CoffeeCard = () => {
  const { coffeeId } = useParams();
  const coffeeToNumber = Number(coffeeId);

  const coffee = testCoffeeItems[coffeeToNumber];

  return (
    <div
      className="flex flex-col h-screen flex-grow justify-center items-center
    pb-10 pt-20 md:p-5 sm:p-5
    "
    >
      <div className="p-2 w-full sm:w-1/2 mt-10 sm:p-5">
        <img src={coffee?.imageURL} alt="" className="w-full h-auto" />
      </div>
      <div className="md:text-4xl font-bold text-xl text-transform: capitalize sm:3xl">
        <h2>{coffee?.title}</h2>
      </div>
      <div className="md:text-3xl text-xl sm:3xl mt-3">
        <p>{coffee?.description}</p>
      </div>
      <div className="mt-2">
        <ol>
          <li></li>
          <li></li>
        </ol>
      </div>
      <section className="mt-2 flex flex-col md:flex-row h-screen sm:flex-col w-screen justify-center gap-10 pb-10 pt-5">
        <div className="bg-red-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:bg-red-500 hover:text-white font-semibold">
          <button>Back</button>
        </div>
        <div className="bg-yellow-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:text-white  hover:bg-yellow-500 font-semibold">
          <button>Favorites</button>
        </div>
      </section>
    </div>
  );
};