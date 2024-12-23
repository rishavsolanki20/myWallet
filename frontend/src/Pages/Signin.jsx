import React, { useState } from "react";
import InputBox from "../Components/InputBox";
import Buttons from "../Components/Buttons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex items-center justify-center h-screen">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <InputBox
            onChange={function (e) {
              setUserName(e.target.value);
            }}
            placeholder={"johnDoe@gmail.com"}
            label={"Email"}
            type={"email"}
          />
          <InputBox
            onChange={function (e) {
              setPassword(e.target.value);
            }}
            placeholder={"123xyz"}
            label={"Password"}
            type={"password"}
          />
          <div className="pt-4">
            <Buttons
              onClick={async () => {
                try {
                  const response = await axios.post(
                    "http://localhost:8080/api/v1/user/signin",
                    {
                      username,
                      password,
                    }
                  );
                  localStorage.setItem("token", response.data.token);
                  localStorage.setItem("firstName", response.data.firstName);
                  console.log(response.data.firstName)
                  navigate("/dashboard");
                } catch (err) {
                  console.error("Error:", err.message);
                }
              }}
              label={"SignIn"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
