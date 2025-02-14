import React, { useState } from "react";
import SignIn from "./SignIn.jsx";
import MySvgIcon from "../assets/name-logo-favicon.svg";
import { ModeToggle } from "./DarkMode/ModeToggle.jsx";
import { useTheme } from "./DarkMode/ThemeProvider.jsx";
import MySvgIconDark from "../assets/name-logo-white.svg";


function LandingPage() {
  const { theme } = useTheme();

  return (
    <>
      <header className="bg-gray-900 h-[100vh] pattern">
        <div className="container px-6 mx-auto">
          <nav className="flex flex-col py-6 xs:flex-row xs:justify-between sm:flex-row sm:justify-between sm:items-center">
            <a href="#">
              <img
                className="w-auto h-6 xs:h-10 sm:h-10"
                src={theme === "dark" ? MySvgIconDark : MySvgIcon}
                alt="logo"
              />
            </a>

            <div className="flex items-center mt-2 mr-1 -mx-2 sm:mt-0">
              <ModeToggle />
            </div>
          </nav>

          <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">
                MediMap
              </h2>

              <h3 className="mt-2 text-2xl font-semibold text-gray-100">
                By{" "}
                <span className="text-blue-400 dark:text-gray-400">
                  Aditya Singh
                </span>
              </h3>

              <p className="mt-4 text-gray-100">
                A React Web which asks the user to login using google auth and
                then will fetch his location and display hospitals in nearby
                area on map.
              </p>
            </div>

            <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
              <SignIn/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default LandingPage;
