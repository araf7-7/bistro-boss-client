import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import { toast } from "sonner";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import useCart from "../../../Hooks/useCart";



const Cards = ({ card }) => {
    const { name, image, recipe, price, _id } = card;
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart()
    const handleAddToCart = () => {
        if (user && user.email) {
            //    console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price

            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success(`${name} added to your cart`)
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "Please Log In To The Cart",

                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                    //refetch data

                }
            });

        }
    }

    return (
        <div>
            <div className="  w-96 h-[520px] bg-[#E8E8E8] ">
                <p className="absolute  ml-[320px] my-5 p-2 rounded-lg bg-[#111827] text-white">${price}</p>
                <img src={image} className="w-full" alt="Food" />

                <div className="card-body">
                    <h2 className="text-2xl font-medium  text-center">{name}</h2>
                    <p className="text-lg h-[110px] font-normal">{recipe}</p>
                    <div className=" justify-center items-center ml-28">
                        <button
                            onClick={handleAddToCart}
                            className="btn border-0 border-b-4 border-[#BB8506] hover:bg-[#1F2937] hover:border-[#BB8506] text-[#BB8506]  bg-[#E8E8E8]">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;