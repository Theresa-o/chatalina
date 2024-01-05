import homeIcon from "/assets/home.svg";
import vectorIcon from "/assets/vector.svg";
import welcomeemojiIcon from "/assets/welcomeemoji.svg";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { user, login } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      const { email, password } = values;
      const res = await login(email, password);
      if (res.error || res.data) {
        if (res.data && res.data.detail) {
          setError(res.data.detail);
        }
      } else {
        navigate("/chat");
      }
      setSubmitting(false);
    },
  });

  useEffect(() => {
    if (user) {
      navigate("/chat");
    }
  }, [user]);
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
            <div className="text-center">
              <img
                src={welcomeemojiIcon}
                className="welcome-icon mx-auto"
                alt="Welcome back icon"
              />
            </div>
            <div className="text-sm mt-2 text-center font-inter-300">
              Login to your account
            </div>
            <div className="w-full py-4 mx-auto">
              <button className="py-2 w-full border justify-center text-center flex gap-3 rounded-lg">
                <img
                  src={vectorIcon}
                  className="google-icon w-4 h-4 md:mt-1 ml-1 "
                  alt="Google icon"
                />
                <span className="text-light-blue text-xs md:text-base">
                  Continue with Google
                </span>
              </button>
            </div>
          </div>
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            {error && <div>{JSON.stringify(error)}</div>}
            <div>
              <label
                htmlFor=""
                className="text-sm text-[#4F4F4F] block font-inter-300"
              >
                Email address
              </label>
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                type="text"
                className="w-full p-2 border bg-[#F8F8F8] rounded mt-1"
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="text-sm text-[#4F4F4F] block font-inter-300"
              >
                Password
              </label>
              <input
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                type="text"
                className="w-full p-2 border bg-[#F8F8F8] rounded mt-1"
              />
            </div>
            <div>
              <a href="#" className="font-medium text-sm text-[#F9A242]">
                Forgot Password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#0B468C] text-white text-sm "
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
