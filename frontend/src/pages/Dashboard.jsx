import { useState } from "react"
import { Appbar } from "../components/Appbar"
import { Users } from "../components/Users";
import { Balance } from "../components/Balance"
import { useEffect } from "react";
import axios from "axios";

export function Dashboard(){
    const [balance, setBalance] = useState(0);
  const token = localStorage.getItem('token');
  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/account/balance', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      setBalance(Math.round(res.data.balance));
    })
  }, [token])
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}