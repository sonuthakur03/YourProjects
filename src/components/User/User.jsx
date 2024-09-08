import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";

function User() {
  const { user } = useContext(UserContext);
  console.log(user);

  if (!user)
    return (
      <div className="text-xl bg-red-500 text-white text-center p-1 rounded-lg">
        Please Login!!
      </div>
    );
  return (
    <div className="text-xl bg-green-500 text-white text-center p-1 rounded-lg">
      Welcome to our site!!
    </div>
  );
}

export default User;
