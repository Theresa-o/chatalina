const Login = () => {
  return (
    <>
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center'>
        <div className='max-w-md w-full mx-auto'>
            <div className='text-center font-medium text-xl'>something</div>
            <div className='text-3xl font-bold text-gray-300 mt-2 text-center'>another text</div>
        </div>
        <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300'>
            <form action='' className='space-y-6'>
                <div>
                    <label htmlFor='' className='text-sm font-bold text-gray-600 block'>Email</label>
                    <input type='text' className='w-full p-2 border border-gray-300 rounded mt-1'></input>
                </div>
                <div>
                    <label htmlFor='' className='text-sm font-bold text-gray-600 block'>Password</label>
                    <input type='text' className='w-full p-2 border border-gray-300 rounded mt-1'></input>
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