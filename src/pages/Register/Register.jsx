import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { BiLogInCircle } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import log from "../Login/log.json";

const Register = () => {
  const { createUser, updateUser, logOut } = useAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { FastName, LastName, image, email, password } = data;
    const name = FastName + LastName;

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

    // create User
    createUser(email, password)
      .then(() => {
        updateUser(name, image)
          .then(() => {})
          .catch(() => {});

        logOut()
          .then(() => {
            navigate("/login");
          })
          .catch((err) => {
            console.log(err.message);
          });
        Swal.fire({
          title: "Registered!",
          text: "You have been Registered Successfully.",
          icon: "success",
        });
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
        <title>Yummy | Register</title>
      </Helmet>
      <div
        style={{
          backgroundImage: "url(https://i.ibb.co/QcwgFJX/rr.jpg)",
        }}
        className="bg-cover bg-bottom bg-fixed rounded-3xl"
      >
        <div className="min-w-screen min-h-screen rounded-3xl bg-black bg-opacity-70 flex items-center justify-center px-5 py-10">
          <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px] mt-8">
            <div className="md:flex w-full">
              <div className="hidden w-1/2 md:flex items-center justify-center bg-[#32CD32] py-10 px-10">
                <Lottie animationData={log}></Lottie>
              </div>
              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                  <p>Enter your information to register</p>
                </div>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex gap-4">
                    <div className="w-1/2 mb-5">
                      <label className="text-xs font-semibold px-1">
                        First name
                      </label>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="John"
                          {...register("FastName", { required: true })}
                        />
                        {errors.FastName && (
                          <span className="text-red-500 pl-3 font-bold">
                            required
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="w-1/2 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Last name
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Smith"
                          {...register("LastName")}
                        />
                      </div>
                    </div>
                  </div>
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
                    <div className="w-full px-3 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Photo URL
                      </label>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Photo URL"
                          {...register("image")}
                        />
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
                        <span className="hidden md:inline">Register</span>{" "}
                      </span>
                    </button>
                  </div>
                </form>
                <p className="text-[16] mt-2 text-center sm:px-6 ">
                  Already Have An Account?
                  <Link
                    to={"/login"}
                    rel="noopener noreferrer"
                    href="#"
                    className="underline text-blue-600"
                  >
                    {" "}
                    Login{" "}
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

export default Register;
