

const Cards = ({card}) => {
    const {name, image, recipe} = card;

    return (
        <div>
            <div className=" w-96 h-[500px] bg-[#E8E8E8] ">
                <img src={image} className="w-full" alt="Food" />
                <div className="card-body">
                    <h2 className="text-2xl font-medium  text-center">{name}</h2>
                    <p className="text-lg font-normal">{recipe}</p>
                    <div className=" justify-center items-center ml-28">
                        <button className="btn border-0 border-b-4 border-[#BB8506] hover:bg-[#1F2937] hover:border-[#BB8506] text-[#BB8506]  bg-[#E8E8E8]">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;