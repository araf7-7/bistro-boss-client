import { useEffect, useState } from "react";
import Cards from "./Cards";


const Card = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('/public/menu.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <>
            <div className="">
                <div className="mx-auto   md:w-4/12">
                    <h1 className="italic mt-[60px] text-center text-xl text-[#D99904] font-medium">---Should Try---</h1>
                    <h1 className="text-4xl text-center font-medium mt-10 border-y-4 py-4 border-gray-300 mb-16">CHEF RECOMMENDS</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto ml-5 lg:ml-0 gap-10 mb-20">
                {
                    cards?.slice(1, 4
                    ).map(card => <Cards key={card._id} card={card}></Cards>)
                }

            </div>
        </>

    );
};

export default Card;