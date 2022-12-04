import React from "react";

function LoginForm() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
          <div className="mb-8 flex justify-center">
            <img
              className="w-24"
              src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col text-sm rounded-md">
            <input
              className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
              type="text"
              placeholder="Username or Email id"
            />
            <input
              className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
            type="submit"
          >
            Sign in
          </button>
          <div className="mt-5 flex justify-between text-sm text-gray-600">
            <a href="#">Forgot password?</a>
            <a href="#">Sign up</a>
          </div>
          <div className="flex justify-center mt-5 text-sm">
            <p className="text-gray-400">or you can sign with</p>
          </div>
          <div className="mt-5 flex text-center text-sm text-gray-400">
            <p>
              This site is protected by reCAPTCHA and the Google <br />
              <a className="underline" href="">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a className="underline" href="">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
