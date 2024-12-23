import React, { useState } from "react";
import InputBox from "../Components/InputBox";
import Buttons from "../Components/Buttons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      {signupSuccess && (
        <div>
          Account created successfully
        </div>
      )}
      <div  className="flex items-center justify-center h-screen">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="John"
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Doe"
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="harkirat@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="123456"
            label={"Password"}
            type={"password"}
          />
          <div className="pt-4">
            <Buttons
              onClick={async () => {
                try {
                  const response = await axios.post(
                    "http://localhost:8080/api/v1/user/signup",
                    {
                      firstName,
                      lastName,
                      username,
                      password,
                    }
                  );
                  localStorage.setItem("token", response.data.token);
                  localStorage.setItem("firstName", firstName);

                  navigate("/dashboard");
                } catch (error) {
                  console.error("error in signing up:", error.message);
                }
              }}
              label={"Sign up"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
