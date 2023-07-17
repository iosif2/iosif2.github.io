import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

var users = {};

const GoogleLoginPage = () => {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    const userObject = jwt_decode(response.credential);
    localStorage.setItem("user", JSON.stringify(userObject));
    const { name, sub, picture } = userObject;
    const data = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };
    if (!users.hasOwnProperty(sub)) {
      users[sub] = data;
      console.log(data);
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="">
      <div className="">
        <GoogleOAuthProvider
          clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
        >
          <GoogleLogin
            render={(renderProps) => (
              <button
                type="button"
                className=""
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <FcGoogle className="" /> Sign in with google
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default GoogleLoginPage;
