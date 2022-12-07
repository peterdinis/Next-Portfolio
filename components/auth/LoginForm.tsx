import React from "react";
import Header from "../shared/Header";

function LoginForm() {
  return (
    <>
    <Header name="Registrácia" />
     <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="email"
            autoFocus
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Heslo
          </label>
          <input
            className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="password"
            placeholder="******************"
          />
        </div>
        <div>
          <button className="reg registerButton" type="submit">
            Registrácia
          </button>
          <div>
            <a
              className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
              href="/student/login"
            >
              Prihlásenie tu
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
