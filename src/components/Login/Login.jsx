import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setRemember(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const loginData = new FormData(e.target);
    const loginObj = Object.fromEntries(loginData.entries());

    const email = loginObj.email;
    const password = loginObj.password;
    const remember = loginObj["remember-me"] === "on";

    setUser({ email, password, remember });
    handleReset();

    // Navigate to user page after login
    navigate("/user");
  };

  return (
    <div className="bg-gray-600 min-h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-5xl font-bold mb-8 text-center text-gray-200">
        START WITH US
      </h2>
      <div className="w-full max-w-md bg-gray-200 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between ">
            <div className="flex items-center w-4/6 relative">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label
                htmlFor="remember-me"
                className=" text-gray-700 text-xs absolute left-4 font-semibold mb-2"
                style={{ bottom: "-7px" }}
              >
                Remember me
              </label>
            </div>
            <p className="text-gray-600 text-xs font-semibold w-2/6 text-right">
              Forgot Password?
            </p>
          </div>
          <button
            type="submit"
            className="mt-1 w-full px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
