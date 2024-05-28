
import useCart from "../../Hooks/useCart";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from './../../Hooks/useAxiosSecure';


const Cart = () => {
    const [cart, refetch ] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure()
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <>
            <div className="">
                <div className="mx-auto   md:w-4/12">
                    <h1 className="italic mt-[60px] text-center text-xl text-[#D99904] font-medium">---My Cart---</h1>
                    <h1 className="text-3xl text-center font-medium mt-10 border-y-4 py-4 border-gray-300 mb-16">WANNA ADD MORE?</h1>
                </div>
            </div>
            <div className="flex gap-10 text-4xl justify-center text-center">
                <h2>
                    Total Orders: {cart.length}
                </h2>
                <h2>
                    Total Price : ${totalPrice}
                </h2>
                <button className="btn hover:bg-[#efb968] bg-[#D1A054]">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}


                                </td>

                                <th>
                                    {item.price}
                                </th>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)} className="btn text-white bg-red-600"><RiDeleteBin2Fill></RiDeleteBin2Fill></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Cart;