// import {  useState } from "react"
// import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import CoffeeLander from "../images/coffeeSVG2.svg";
import "../custom.css";
import { useCoffee } from "../providers/CoffeeProvider";

// bg color : rgb(244,244,236)
{
  /* <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
<div className="text-center space-y-10">
  <div className="flex flex-col md:flex-row items-center">
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
        Enjoy User Created Coffee
      </h1>
      <div className="mb-8">
        <Link
          to="/coffee" // Specify the correct route
          className="bg-blue-500 hover:bg-blue-700 text-white text-2xl md:text-3xl lg:text-4xl py-2 px-6 rounded-full transition duration-300 ease-in-out"
        >
          Get Coffee Now
        </Link>
      </div>
    </div>
    <div className="md:ml-8">
      <img
        className="w-full max-w-md md:max-w-lg lg:max-w-xl"
        src={CoffeeLander} // Make sure to provide the correct image source
        alt="Coffee"
      />
    </div>
  </div> */
}
export const LandingPage = () => {
  const { coffee } = useCoffee();

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center">
      <div className="text-center font-serif">
        <div className="bg-[#2E1E17] p-5 rounded-xl text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4">
          <h1 className=" animate-fade-in text-white">Hello Welcome!</h1>
        </div>

        <div className="flex flex-row justify-center items-center text-center animate-fade-in">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 mx-32">
              Enjoy User Created Coffee
            </h1>
            <div className="mx-4 mt-10 text-2xl">
              <Link
                to={"multi-login"}
                className="items-center h-14 w-full max-w-md border border-gray-300 rounded-lg py-2 px-3 focus:outline-none
              text-black
              hover:bg-[#2E1E17]
              hover:text-white
              hover:border-8 
            focus:border-blue-500
               "
              >
                Get Coffee Now
              </Link>
            </div>
          </div>

          <div className="flex justify-center w-3/4">
            <div className="w-9/12 max-w-[80%]">
              <img className=" w-full h-auto" src={CoffeeLander} alt="" />
            </div>
          </div>
        </div>
        {/* <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Would you like some coffee?
        </h2> */}
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <h2>Our Coffees</h2>
          <div>
            <>
              {coffee && Array.isArray(coffee)
                ? coffee
                    .slice(0, 4)
                    .map(
                      (item: {
                        image: string | undefined;
                        title: string;
                        description: string;
                      }) => {
                        {console.log(item)}

                      }
                    )
                : null}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};


// this is used for the map
{/* <div>
<div className="flex mt-5 p-3"></div>
<div className="p-4">
  <img
    src={item.image}
    alt=""
    className="w-full h-40 md:h-48 lg:h-56"
  />
</div>
<div className="text-center gap-3">
  <h3 className="text-lg font-semibold">
    {item.title || "Default Title"}
  </h3>
  <p>{item.description || "Default Description"}</p>
</div>
</div>; */}