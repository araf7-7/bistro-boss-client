import { BsGoogle } from "react-icons/bs";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/')
                    })
            })

    }
    return (
        <div>
            <div className='divider'></div>
            <h1 className='text-center font-cinzel font-bold'>Log In With Social Account</h1>
            <div className='flex justify-center items-center'>
                <button onClick={handleGoogleSignIn} className='btn hover:bg-[#D1A054] bg-inherit  text-black item'>
                    <BsGoogle></BsGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;