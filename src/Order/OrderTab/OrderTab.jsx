import Cards from "../../Pages/Home/Card/Cards";



const OrderTab = ({cards}) => {
    return (
        <div>
            {
                <div className='grid md:grid-cols-3 gap-10'>
                    {
                        cards.map(card => <Cards
                            key={card._id}
                            card={card}
                        ></Cards>)
                    }

                </div>
            }
        </div>
    );
};

export default OrderTab;