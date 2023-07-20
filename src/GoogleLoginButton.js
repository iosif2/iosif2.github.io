import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

// var users = {};

const GoogleLoginButton = (props) => {
  const responseGoogle = (response) => {
    const userObject = jwt_decode(response.credential);
    localStorage.setItem("user", JSON.stringify(userObject));
    console.log(localStorage.getItem("user"));
    props.setAuth(true);
    /*
    const { name, sub, picture } = userObject;
    const data = {
      id: sub,
      userName: name,
      image: picture,
    };
    if (!users.hasOwnProperty(sub)) {
      users[sub] = data;
      console.log(data);
      
    }
    */
  };

  return (
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
  );
};

export default GoogleLoginButton;
