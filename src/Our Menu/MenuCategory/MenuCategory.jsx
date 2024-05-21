import { Link } from "react-router-dom";
import Cover from "../../Cover/Cover";
import MenuItem from "../../Pages/Home/PopulerMenu/MenuItem";


const MenuCategory = ({ items, title, des, img }) => {
    return (
        <div className="my-32">
            {title && des && <Cover img={img} title={title} des={des}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-20">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4 ">ORDER YOUR FAVOURITE FOOD</button>
            </Link>


        </div>
    );
};

export default MenuCategory;