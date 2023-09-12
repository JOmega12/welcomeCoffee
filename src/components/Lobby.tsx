// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { UserInformation } from "../types/types";
import { CoffeeCard } from "./CoffeeCard";
import { PreviewCard } from "./PreviewCard";
import { Link } from "react-router-dom";
import { key } from "localforage";

type LobbyTypes = {
  logoutUser: () => void;
  user: UserInformation;
  isRegister: boolean;
};

export const Lobby = () => {
  const { logoutUser, isRegister, user } = useAuth() as LobbyTypes;

  const [ seePreview, setSeePreview ] = useState(false);

  // const navigate = useNavigate();

  //   const handleLogoutButton = () => {
  //    navigate('/')
  //    logoutUser();
  //   };

  const testCoffeeItems = [
    {
      imageURL:
        "https://perfectdailygrind.com/wp-content/uploads/2016/11/latte-art-@harshlight-1024x683.jpg",
      title: "Coffee1",
      description: "description1",
      ingredients: "coffee, milk, sugar",
    },
    {
      imageURL:
        "https://coffeeaffection.com/wp-content/uploads/2021/05/Spanish-latte-milk-and-espresso.jpg",
      title: "Coffee2",
      description: "description2",
      ingredients: ['coffee', 'milk', 'sugar',]
    },
    {
      imageURL:
        "https://perfectdailygrind.com/wp-content/uploads/2016/11/latte-art-@harshlight-1024x683.jpg",
      title: "Coffee3",
      description: "description3",
      ingredients: ['coffee', 'milk', 'sugar',]
    },
    {
      imageURL:
        "https://coffeeaffection.com/wp-content/uploads/2021/05/Spanish-latte-milk-and-espresso.jpg",
      title: "Coffee5",
      description: "description4",
      ingredients: ['coffee', 'milk', 'sugar',]
    },
  ];


  const setActiveCard = (bool: boolean) => {
    setSeePreview(bool);
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        {isRegister ? (
          <div className="w-full text-lg mb-2 p-3  mt-3 text-center">
            <h3>Hello! {user.username}</h3>
            <h4>There are coffees to try!</h4>
          </div>
        ) : (
          <div className="text-center">Not Logged In</div>
        )}
        {/* i dont know howto make the button smaller? */}
        <div className="text-center hover:cursor-pointer m-10">
          <button className="px-4 py-2 font-bold rounded-lg text-3xl bg-green-500 text-white hover:bg-green-600">Create Coffee</button>
        </div>
        <div className="flex flex-grow flex-wrap justify-center p-4 lg:justify-evenly">
          {testCoffeeItems.map((item, index) => {
            const cardToRender = seePreview 
            ? (
            <Link to={`/coffeeCard/${index}`}>
              <CoffeeCard item={item} index={index} onClick={() => setActiveCard(false)}/>
            </Link>
            // <Link to={"/coffeeCard"}></Link>
            )  
            : (<PreviewCard item={item} index={index} onClick={() => setActiveCard(true)}/>) 
            return cardToRender;         
          })}
        </div>

        {/* 
        first we map all the cards, 
        then for each one of the card
        it is clickable to show a full component
        showing image, description and comments
        */}
        {/* example code
          put the see fullCard as a function
        coffeeCards.map((card) => {
          seeFullCard ? 
            (<CoffeeCard />) : 
            (<PreviewCard/>)
        })
        */}
        {/* need to fix favorites and delete buttons css media query */}
        <section className="flex flex-col lg:flex-row h-screen sm:flex-col w-screen justify-center gap-20 pb-10 pt-5">
          <div className="bg-yellow-400 rounded-lg shadow-lg m-2 p-5 hover:cursor-default hover:text-white  hover:bg-yellow-500 font-semibold">
            <button>Favorites</button>
          </div>
          <div className="bg-red-400 rounded-lg shadow-lg m-2 p-5 hover:cursor-default hover:bg-red-500 hover:text-white font-semibold">
            <button onClick={() => logoutUser()}>Logout</button>
          </div>
        </section>
      </div>
    </>
  );
};

