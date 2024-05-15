import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { BiLogInCircle } from "react-icons/bi";
import { FaEye, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import log from './log.json'
import Lottie from "lottie-react";

const Login = () => {
  const { googleLogin, githubLogin, signInUser } = useAuth();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password);
    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain an uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
      return setError("Password must contain a lowercase letter.");
    }
    if (password.length < 6) {
      return setError("Password must be at least 6 character");
    }
    setError("");

    //! sign in user
    signInUser(email, password)
    // const user = {email: email}
      .then(() => {
        Swal.fire({
          title: "Logged In!",
          text: "You have been Logged in.",
          icon: "success",
        });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  // !google Login
  const googleBtnHandle = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Logged In!",
          text: "You have been Logged in.",
          icon: "success",
        });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  // ! github Login
  const githubBtnHandle = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Logged In!",
          text: "You have been Logged in.",
          icon: "success",
        });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Yummy | Login</title>
      </Helmet>
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/QcwgFJX/rr.jpg)",
        }}
        className="bg-cover bg-bottom bg-fixed rounded-3xl"
      >
        <div className="min-w-screen min-h-screen bg-black bg-opacity-70 flex items-center justify-center px-5 py-5 rounded-3xl">
          <div className="bg-gray-100 text-gray-700 rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px] mt-8">
            <div className="md:flex w-full">
              <div className="hidden md:flex items-center justify-center w-1/2 bg-[#32CD32] py-10 px-10">
             <Lottie animationData={log}></Lottie>
              </div>
              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">SIGN IN</h1>
                  <p>Enter your information to Sign In</p>
                </div>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Email
                      </label>
                      <div className="flex flex-col">
                        <input
                          type="email"
                          className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="johnsmith@example.com"
                          {...register("email", { required: true })}
                        />
                        {errors.email && (
                          <span className="text-red-500 font-bold pl-3">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-6">
                      <label className="text-xs font-semibold px-1">
                        Password
                      </label>
                      <div className="flex flex-col relative">
                        <input
                          type={show ? "text" : "password"}
                          className="w-full pl-3 pt-2 pb-[6px] rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Enter your password"
                          {...register("password", { required: true })}
                        />

                        <div
                          onClick={() => setShow(!show)}
                          className="absolute right-5 top-3 text-xl"
                        >
                          {show ? (
                            <RiEyeCloseFill></RiEyeCloseFill>
                          ) : (
                            <FaEye></FaEye>
                          )}
                        </div>
                        <p className="text-red-600 font-bold">{error}</p>
                        {errors.password && (
                          <span className="text-red-500 font-bold pl-3">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button className=" w-[70%] text-xl text-white relative px-5 py-2 font-semibold group">
                      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>

                      <span className="flex items-center justify-center gap-2 relative">
                        <BiLogInCircle className="text-xl"></BiLogInCircle>{" "}
                        <span className="hidden md:inline">Sign In</span>{" "}
                      </span>
                    </button>
                  </div>
                </form>
                <div className="flex items-center pt-4 px-2 space-x-1">
                  <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                  <p className="px-3 text-sm ">Login with social accounts</p>
                  <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={googleBtnHandle}
                    aria-label="Log in with Google"
                    className="p-3 rounded-sm"
                  >
                    <FaGoogle></FaGoogle>
                  </button>
                  <button
                    // onClick={facebookBtnHandle}
                    aria-label="Log in with Twitter"
                    className="p-3 rounded-sm"
                  >
                    <FaFacebook></FaFacebook>
                  </button>
                  <button
                    onClick={githubBtnHandle}
                    aria-label="Log in with GitHub"
                    className="p-3 rounded-sm"
                  >
                    <FaGithub></FaGithub>
                  </button>
                </div>

                <p className="text-[16] mt-2 text-center sm:px-6 ">
                  Do Not have an account?
                  <Link
                    to={"/register"}
                    rel="noopener noreferrer"
                    href="#"
                    className="underline text-blue-600"
                  >
                    {" "}
                    Register{" "}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
