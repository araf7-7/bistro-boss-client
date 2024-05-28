
import img from '../../../assets/wood-grain-pattern-gray1x.png'
import img2 from '../../../assets/authentication2.png'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

import { toast } from 'sonner';
import SocialLogin from '../../SocialLogin/SocialLogin';
import useAxiosPublic from '../../Hooks/useAxiosPublic';


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email

                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    // console.log('user profile updated');
                                    reset()
                                    toast.success('Profile Has Been Created')
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })

    };
    return (
        <div className="" style={{ backgroundImage: `url('${img}')` }}>
            <div className='flex p-20 shadow-xl my-32'  >

                <div className='flex-1'>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <h2 className='text-center font-medium text-3xl'>Sign Up</h2>
                        <div className="space-y-1 text-sm">
                            <label className="block text-xl text-black">Name</label>
                            <input type="text" {...register("name", { required: true })} name="name" id="Name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 " />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block text-xl text-black">Photo Url</label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 " />
                            {errors.photoURL && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block text-xl text-black">Email</label>
                            <input type="text" name="email" {...register("email", { required: true })} id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 " />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-xl dark:text-black">Password</label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 " />
                            {errors.password && <span className='text-red-500'>This field is required</span>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>
                        <input type="submit" value='Sign Up' className='block btn btn-primary w-full p-3 text-center rounded-sm dark:bg-[#D1A054B2] border-none hover:bg-orange-300 dark:text-white ' />
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-[#D1A054] mt-3'>Already registered?<Link to='/login' className='underline font-bold'>Go to log in</Link></p>
                </div>
                <div className='flex-1'>
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;