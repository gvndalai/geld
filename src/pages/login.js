import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/Loading";

export default function Login() {
  const router = useRouter();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // New state for error message

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null); // Reset error state on each login attempt

    const inputData = {
      email: emailValue,
      password: passwordValue,
    };

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      if (response.ok) {
        router.push("/dashboard");
      } else {
        // Handle unsuccessful login
        const errorMessage = await response.text(); // Assuming the server sends an error message
        setError(
          errorMessage || "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-screen flex">
          <div className="w-full bg-white flex items-center  justify-center">
            <div className="flex flex-col items-center gap-[40px] w-[384px]">
              <Logo />
              <div className="flex flex-col items-center">
                <h className="text-slate-900 font-roboto font-semibold text-[24px] leading-8">
                  Welcome Back
                </h>
                <p className="text-slate-700 font-roboto text-[16px] font-normal leading-6">
                  Welcome back, Please enter your details
                </p>
              </div>
              <form
                className="flex flex-col w-full gap-4"
                onSubmit={handleLogin}
              >
                <input
                  placeholder="Email"
                  type="text"
                  className="w-full h-12 flex items-center p-4 border border-solid border-gray-300 rounded-[8px]"
                  value={emailValue}
                  onChange={(e) => handleInputChange(e, setEmailValue)}
                ></input>
                <input
                  placeholder="Password"
                  type="password"
                  className="w-full h-12 flex items-center p-4 border border-solid border-gray-300 rounded-[8px]"
                  value={passwordValue}
                  onChange={(e) => handleInputChange(e, setPasswordValue)}
                ></input>

                <button
                  type="submit"
                  className="bg-slate-700 w-[384px] h-[48px] rounded-full text-white  font-normal text-[20px]"
                  onClick={handleLogin}
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Log in"}
                </button>
                {error && (
                  <div className="text-red-500 font-roboto text-[14px]">
                    {error}
                  </div>
                )}
              </form>
              <div className="flex">
                <div>Don’t have account?</div>
                <Link className="px-[12px] text-blue-600" href="/signup">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-slate-700 h-screen w-full"></div>
        </div>
      )}
    </>
  );
}
