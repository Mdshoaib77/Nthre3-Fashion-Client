import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShopContext } from "../context/ShopContext";
import login from "../assets/login.png";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [currState, setCurrState] = useState("Login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 z-50 w-full h-full bg-[var(--bg)]"
    >
      <div className="flex w-full h-full">

        {/* Image Side */}
        <motion.div
          initial={{ x: -36, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden w-1/2 sm:block"
        >
          <img
            src={login}
            alt="loginImg"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ x: 36, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full sm:w-1/2 items-center justify-center text-[90%]"
        >
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5"
          >
            <div className="w-full mb-4">
              <motion.h3
                key={currState}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="font-display text-[40px] sm:text-[46px] font-medium leading-none tracking-tight"
              >
                {currState}
              </motion.h3>
            </div>

            <AnimatePresence mode="wait">
              {currState === "Sign Up" && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <label htmlFor="name" className="medium-15">
                    Name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 mt-1.5 bg-white rounded-xl ring-1 ring-[color:var(--line)] outline-none transition-shadow focus:ring-2 focus:ring-secondary/60"
                    required
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="w-full">
              <label htmlFor="email" className="medium-15">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Email"
                className="w-full px-4 py-3 mt-1.5 bg-white rounded-xl ring-1 ring-[color:var(--line)] outline-none transition-shadow focus:ring-2 focus:ring-secondary/60"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="password" className="medium-15">
                Password
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 mt-1.5 bg-white rounded-xl ring-1 ring-[color:var(--line)] outline-none transition-shadow focus:ring-2 focus:ring-secondary/60"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 250 }}
              type="submit"
              className="w-full mt-5 !py-3 !rounded-xl btn-dark"
            >
              {currState === "Sign Up" ? "Sign Up" : "Login"}
            </motion.button>

            <div className="flex flex-col w-full gap-y-3">
              <div className="underline cursor-pointer text-[14px] font-medium underline-offset-4 text-gray-30 transition-colors duration-300 hover:text-secondary">
                Forgot your password?
              </div>

              {currState === "Login" ? (
                <div className="text-[14px] font-medium text-gray-30">
                  Don't have an account?
                  <span
                    onClick={() => setCurrState("Sign Up")}
                    className="font-semibold underline cursor-pointer underline-offset-4 text-secondary transition-colors duration-300 hover:text-[#96431f]"
                  >
                    {" "}Create account
                  </span>
                </div>
              ) : (
                <div className="text-[14px] font-medium text-gray-30">
                  Already have an account?
                  <span
                    onClick={() => setCurrState("Login")}
                    className="font-semibold underline cursor-pointer underline-offset-4 text-secondary transition-colors duration-300 hover:text-[#96431f]"
                  >
                    {" "}Login
                  </span>
                </div>
              )}
            </div>

          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;