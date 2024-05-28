
import img from '../../../assets/wood-grain-pattern-gray1x.png'
import img2 from '../../../assets/authentication2.png'
import { LoadCanvasTemplate } from 'react-simple-captcha';
import { loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { toast } from 'sonner';
import SocialLogin from '../../SocialLogin/SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [setDisabled] = useState(true)

    const location = useLocation();
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
        ;
    const navigate = useNavigate()
    // useEffect(() => {
    //     if (user) navigate("/")
    // }, [navigate, user]
    // )
    const  from = location?.state?.from?.pathname || "/"
    console.log("state in the location", location.state);
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                if (result.user) {
                    toast.success("Successfully Logged In")
                    navigate(from, { replace: true });
                }
            })
            .catch(() => toast.error("Please Check Your Email Or Password"))
    }
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }

    }
    return (
        <div className="" style={{ backgroundImage: `url('${img}')` }}>
            <div className='flex p-20 shadow-xl my-32'  >
                <div className='flex-1'>
                    <img src={img2} alt="" />
                </div>
                <div className='flex-1'>
                    <form onSubmit={handleLogin} noValidate="" action="" className="space-y-6">
                        <h2 className='text-center font-medium text-3xl'>Login</h2>
                        <div className="space-y-1 text-sm">
                            <label className="block text-xl text-black">Email</label>
                            <input type="text" name="email" id="email" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-xl dark:text-black">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-xl dark:text-black">
                                <LoadCanvasTemplate></LoadCanvasTemplate>
                            </label>
                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" id="captcha" placeholder="Type The Captcha Above" className="w-full mb-3 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                        </div>
                        <button disabled={false} className="block btn btn-primary w-full p-3 text-center rounded-sm dark:bg-[#D1A054B2] border-none hover:bg-orange-300 dark:text-white ">Sign in</button>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-[#D1A054] mt-3'>New Here? <Link to='/signup' className='underline font-bold'>Create A Account Here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
// import { useContext, useEffect, useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

// import { Link, useLocation, useNavigate } from 'react-router-dom';

// import Swal from 'sweetalert2'
// import { AuthContext } from '../../Providers/AuthProvider';

// const Login = () => {
//     const [disabled, setDisabled] = useState(true);
//     const { signIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || "/";

//     useEffect(() => {
//         loadCaptchaEnginge(6);
//     }, [])

//     const handleLogin = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);
//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 Swal.fire({
//                     title: 'User Login Successful.',
//                     showClass: {
//                         popup: 'animate__animated animate__fadeInDown'
//                     },
//                     hideClass: {
//                         popup: 'animate__animated animate__fadeOutUp'
//                     }
//                 });
//                 navigate(from, { replace: true });
//             })
//     }

//     const handleValidateCaptcha = (e) => {
//         const user_captcha_value = e.target.value;
//         if (validateCaptcha(user_captcha_value)) {
//             setDisabled(false);
//         }
//         else {
//             setDisabled(true)
//         }
//     }

//     return (
//         <>
            
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col md:flex-row-reverse">
//                     <div className="text-center md:w-1/2 lg:text-left">
//                         <h1 className="text-5xl font-bold">Login now!</h1>
//                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     </div>
//                     <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
//                         <form onSubmit={handleLogin} className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" name="email" placeholder="email" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" name="password" placeholder="password" className="input input-bordered" />
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <LoadCanvasTemplate />
//                                 </label>
//                                 <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

//                             </div>
//                             <div className="form-control mt-6">
//                                 <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
//                             </div>
//                         </form>
//                         <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;