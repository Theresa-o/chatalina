import { useForm } from "react-hook-form";
import homeIcon from "/assets/home.svg";

interface formData {
  username: string;
  password: string;
}

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = handleSubmit(({ username, password }) => {
    console.log(username, password);
  });
  return (
    <>
      <div className="flex flex-col justify-center items-center p-auto mt-8">
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <div className="flex flex-row gap-2 justify-center">
            <img
              src={homeIcon}
              className="home-icon text-white"
              alt="Home icon"
            />
            <p className="mt-5 mr-4 text-sm md:text-base lg:text-lg text-light-blue font-semibold">
              Home
            </p>
          </div>
          <div className="max-w-md w-full mx-auto">
            <div className="text-sm mt-2 text-center md:text-base font-semibold font-inter-600">
              Sign Up
            </div>
            <div className="text-sm mt-2 text-center md:text-base font-semibold font-inter-600">
              Create an account
            </div>
          </div>
          <form action="" className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor=""
                className="text-sm text-[#4F4F4F] block font-inter-300"
              >
                Username
              </label>
              <input
                {...register("username", { required: true, minLength: 10 })}
                name="username"
                type="text"
                className="w-full p-2 border bg-[#F8F8F8] rounded mt-1"
              />
              {errors.username && <span>Invalid details</span>}
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm text-[#4F4F4F] block font-inter-300"
              >
                Password
              </label>
              <input
                {...register("password", { required: true, minLength: 8 })}
                name="password"
                type="text"
                className="w-full p-2 border bg-[#F8F8F8] rounded mt-1"
              />
              {errors.password && <span>Invalid details</span>}
            </div>
            <div>
              <a href="#" className="font-medium text-sm text-[#F9A242]">
                Forgot Password?
              </a>
            </div>
            <div>
              <button className="w-full py-2 px-4 bg-[#0B468C] text-white text-sm">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
  // ========
  // <div className="flex flex-col justify-center items-center p-auto mt-8">
  // <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
  //   <div className="flex flex-row gap-2 justify-center">
  //     <img
  //       src={homeIcon}
  //       className="home-icon text-white"
  //       alt="Home icon"
  //     />
  //     <p className="mt-5 mr-4 text-sm md:text-base lg:text-lg text-light-blue font-semibold">
  //       Home
  //     </p>
  //   </div>
  //   <div className="max-w-md w-full mx-auto">
  //   <div className="text-sm mt-2 text-center font-inter-300">
  //   Sign Up
  //    </div>
  //     <div className="text-sm mt-2 text-center font-inter-300">
  //     Create an account
  //     </div>
  //   </div>
  //   <form action="" className="space-y-6" onSubmit={onSubmit}>
  //     <div>
  //       <label
  //         htmlFor=""
  //         className="text-sm text-[#4F4F4F] block font-inter-300"
  //       >
  //         Email address
  //       </label>
  //       <input
  //         {...register("email", { required: true, minLength: 10 })}
  //         name="email"
  //         type="text"
  //         className="w-full p-2 border bg-[#F8F8F8] rounded mt-1"
  //       />
  //       {errors.email && <span>Invalid details</span>}
  //     </div>
  //     <div>
  //       <label
  //         htmlFor=""
  //         className="text-sm text-[#4F4F4F] block font-inter-300"
  //       >
  //         Password
  //       </label>
  //       <input
  //         {...register("password", { required: true, minLength: 8 })}
  //         name="password"
  //         type="text"
  //         className="w-full p-2 border bg-[#F8F8F8] rounded mt-1"
  //       />
  //       {errors.password && <span>Invalid details</span>}
  //     </div>
  //     <div>
  //       <a href="#" className="font-medium text-sm text-[#F9A242]">
  //         Forgot Password?
  //       </a>
  //     </div>
  //     <div>
  //       <button className="w-full py-2 px-4 bg-[#0B468C] text-white text-sm ">
  //         Log in
  //       </button>
  //     </div>
  //   </form>
  // </div>
  // </div>

  // ==========
};

export default Signup;
