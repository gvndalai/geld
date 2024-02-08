import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/Loading";
import axios from "axios";
import { userSchema } from "@/validations/UserValidation";
import { Formik, Form, Field } from "formik"; // Import Formik components

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const togglePassword = (event) => {
    event.preventDefault();
    const passwordInput = document.getElementById("passwordInput");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  const handleLogin = async (values) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:8080/login", values);

      if (response.status === 200) {
        const { token, id } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
        router.push("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with an error
        const errorMessage = error.response.data;
        setError(errorMessage); // Set the error message received from the server
      } else {
        // Other errors (network error, etc.)
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-screen flex">
          <div className="w-full bg-white flex items-center justify-center">
            <div className="flex flex-col items-center gap-[40px] w-[384px]">
              <Logo />
              <div className="flex flex-col items-center">
                <h1 className="text-slate-900 font-roboto font-semibold text-[24px] leading-8">
                  Welcome Back
                </h1>
                <p className="text-slate-700 font-roboto text-[16px] font-normal leading-6">
                  Welcome back, Please enter your details
                </p>
              </div>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={handleLogin}
                validationSchema={userSchema}
              >
                <Form className="flex flex-col w-full gap-4">
                  <Field
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="w-full h-12 flex items-center p-4 border border-solid border-gray-300 rounded-[8px]"
                  />
                  <div className="flex gap-3 items-center">
                    <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      id="passwordInput"
                      className="w-full h-12 flex items-center p-4 border border-solid border-gray-300 rounded-[8px]"
                    />
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={togglePassword}
                    >
                      <path
                        d="M10 9.5C11.3807 9.5 12.5 8.38071 12.5 7C12.5 5.61929 11.3807 4.5 10 4.5C8.61929 4.5 7.5 5.61929 7.5 7C7.5 8.38071 8.61929 9.5 10 9.5Z"
                        fill="#94A3B8"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.664255 7.59038C0.517392 7.20873 0.517518 6.78563 0.66461 6.40408C2.10878 2.65788 5.7433 0 9.99859 0C14.256 0 17.892 2.66051 19.3347 6.40962C19.4816 6.79127 19.4814 7.21437 19.3344 7.59593C17.8902 11.3421 14.2557 14 10.0004 14C5.74298 14 2.10698 11.3395 0.664255 7.59038ZM14.0004 7C14.0004 9.20914 12.2095 11 10.0004 11C7.79123 11 6.00037 9.20914 6.00037 7C6.00037 4.79086 7.79123 3 10.0004 3C12.2095 3 14.0004 4.79086 14.0004 7Z"
                        fill="#94A3B8"
                      />
                    </svg>
                  </div>
                  <button
                    type="submit"
                    className="btn bg-slate-700 w-[384px] h-[48px] rounded-full text-white font-normal text-[20px] hover:bg-slate-600"
                    disabled={isLoading} // Disable the button when loading
                  >
                    {isLoading ? "Logging in..." : "Log in"}
                  </button>

                  {error && (
                    <div className="text-red-500 font-roboto text-[14px]">
                      {error}
                    </div>
                  )}
                </Form>
              </Formik>
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
