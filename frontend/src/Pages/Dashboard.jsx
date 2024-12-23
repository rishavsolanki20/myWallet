import React from "react";
import AppBar from "../Components/AppBar";
import Balance from "../Components/Balance";
import { Users } from "../Components/Users";

export default function Dashboard() {
  return (
    <div>
      <AppBar />
      <div className="m-8">
        <Balance />
        <Users />
      </div>
    </div>
  );
}
 