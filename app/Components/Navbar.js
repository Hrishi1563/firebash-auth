"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
export default function Navbar() {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 50));
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    checkAuthentication();
  }, [user]);
  return (
    <div className="p-6 border-b-4 border-black flex flex-row justify-between">
      <ul className="flex flex-row gap-4 ">
        <li className="cursor-pointer">
          <Link href="/"> Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/About">About</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/About">profile</Link>
        </li>
      </ul>
      <ul className="flex flex-row gap-4 mr-4">
        {loading ? null : !user ? (
          <div className="flex flex-row gap-4 mr-4">
            <li className="cursor-pointer">
              <Link href="/About" onClick={handleSignIn}>
                Login
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/About" onClick={handleSignIn}>
                Signup
              </Link>
            </li>
          </div>
        ) : (
          <div className="flex flex-row gap-2 mr-4">
            <p>
              Welcome,{"    "}
              {user.displayName}
            </p>
            <li className="cursor-pointer">
              <Link href="/About" onClick={handleSignOut}>
                Logout
              </Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
}
