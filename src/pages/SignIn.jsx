import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import useAuthStore from "../lib/store";

const SignIn = () => {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    if (useAuthStore.getState().token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSuccess = (credentialResponse) => {
    const token = credentialResponse?.credential;
    if (token) {
      setToken(token);
      navigate("/home");
    }
  };

  const handleError = () => {
    console.log("Google Sign In Error");
  };

  return (
    <div className="w-full max-w-md rounded-lg xs:w-96 bg-white border dark:bg-black dark:border-white">
      <div className="px-6 py-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
          Authentication Using Google
        </h2>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <div className="flex justify-center mt-4">
            <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
          </div>
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default SignIn;
