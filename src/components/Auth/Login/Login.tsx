import { useForm } from "react-hook-form";

interface formData {
    email: string
    password: string
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<formData>();

    const onSubmit = handleSubmit(({email, password}) => {
        console.log(email, password);
    })
  return (
    <>
    <div className='flex flex-col justify-center'>
        <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300'>
            <div className='max-w-md w-full mx-auto'>
                <div className='text-center font-medium text-xl'>Welcome back</div>
                <div className='text-sm font-bold text-gray-300 mt-2 text-center'>Login to your account</div>
                <div className='text-sm font-bold text-gray-600 block'>Continue with Google</div>
            </div>
            <form action='' className='space-y-6' onSubmit={onSubmit}>
                <div>
                    <label htmlFor='' className='text-sm font-bold text-gray-600 block'>Email</label>
                    <input {...register('email', {required: true, minLength: 10})} name="email" type='text' className='w-full p-2 border border-gray-300 rounded mt-1'/>
                    {errors.email && <span>Invalid details</span>}

                </div>
                <div>
                    <label htmlFor='' className='text-sm font-bold text-gray-600 block'>Password</label>
                    <input {...register('password', {required: true, minLength: 8})} name="password" type='text' className='w-full p-2 border border-gray-300 rounded mt-1'/>
                    {errors.password && <span>Invalid details</span>}
                </div>
                <div><a href="#" className="font-medium text-sm text-blue-500">Forgot Password?</a></div>
                <div>
                    <button className="w-full py-2 px-4 bg-blue-400 text-white text-sm ">Log in</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login