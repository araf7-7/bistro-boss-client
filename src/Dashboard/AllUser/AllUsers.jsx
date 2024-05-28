import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { RiDeleteBin2Fill } from "react-icons/ri";

import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import { toast } from "sonner";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success(`${user.name} is an Admin Now`)
                }
            })
    }
    const handleDeleteUser = user => {
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

                axiosSecure.delete(`/users/${user._id}`)
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
        <div>
            <div className="">
                <div className="mx-auto   md:w-4/12">
                    <h1 className="italic mt-[60px] text-center text-xl text-[#D99904] font-medium">---How Many---</h1>
                    <h1 className="text-3xl text-center font-medium mt-10 border-y-4 py-4 border-gray-300 mb-16">MANAGE ALL USERS</h1>
                </div>
            </div>
            <div>
                <h1 className="text-4xl px-5">Total User: {users.length} </h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._idf}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'Admin' : <button
                                            onClick={() => handleMakeAdmin(user)} className="btn text-white bg-[#D1A054]"><FaUsers />
                                        </button>
                                    }
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user)} className="btn text-white bg-red-600"><RiDeleteBin2Fill></RiDeleteBin2Fill></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;