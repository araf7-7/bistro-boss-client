import { Helmet } from "react-helmet";
import Cover from "../Cover/Cover";
import menuImg from '../../assets/featured.jpg'
import dessertImg from '../../assets/dessert-bg.jpeg'
import pizzaImg from '../../assets/pizza-bg.jpg'
import saladImg from '../../assets/salad-bg.jpg'
import soupImg from '../../assets/soup-bg.jpg'
import useMenu from "../Hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";



const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            {/* main cover img */}
            <Cover img={menuImg} title={'Our Menu'} des={'Would you like to try a dish?'}></Cover>
            <div className="mx-auto md:w-4/12">
                <h1 className="italic mt-[60px] text-center text-xl text-[#D99904] font-medium">---Don&apos;t miss---</h1>
                <h1 className="text-4xl text-center font-medium mt-10 border-y-4 py-4 border-gray-300 mb-16">TODAY&apos;S OFFER</h1>
            </div>
            {/* offered items */}
            <MenuCategory items={offered} ></MenuCategory>
           

            {/* dessert items */}
            <MenuCategory 
            items={desserts}
            title="dessert" 
            des="Check Some Desserts"
            img={dessertImg}
            
            ></MenuCategory>
            <MenuCategory 
            items={pizza}
            title="pizza" 
            des="Check Some Pizzas"
            img={pizzaImg}
            
            ></MenuCategory>
            <MenuCategory 
            items={salad}
            title="salad" 
            des="Check Some Salads"
            img={saladImg}
            
            ></MenuCategory>
            <MenuCategory 
            items={soup}
            title="soup" 
            des="Check Some Soups"
            img={soupImg}
            
            
            ></MenuCategory>



        </>
    );
};

export default Menu;