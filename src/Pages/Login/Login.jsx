
import img from '../../../assets/wood-grain-pattern-gray1x.png'
import img2 from '../../../assets/authentication2.png'
import { LoadCanvasTemplate } from 'react-simple-captcha';
import { loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
const Login = () => {
    const captchaRef = useRef(null)
    const [disabled,setDisabled] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    const {signIn} = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        signIn(email,password)
        .then(result => {
            const user = result.user
            console.log(user);
        })
    }
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value
       if(validateCaptcha(user_captcha_value)){
        setDisabled(false)
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
                            <input type="text" ref={captchaRef} name="captcha" id="captcha" placeholder="Type The Captcha Above" className="w-full mb-3 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs'>Validate</button>
                        </div>
                        <button disabled={disabled}  className="block btn btn-primary w-full p-3 text-center rounded-sm dark:bg-[#D1A054B2] border-none hover:bg-orange-300 dark:text-white ">Sign in</button>
                    </form>
                    <p><small>New Here? <Link to='/signup' className='underline'>Create A Account Here</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;