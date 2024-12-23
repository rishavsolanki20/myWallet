import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Balance() {
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/account/balance', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` 
          }
        });
        setBalance(response.data.balance);
      } catch (error) {
        setError('Error fetching balance');
      }
    };

    fetchBalance();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {balance !== null ? (
        <div>
          Your balance: {balance}
        </div>
      ) : (
        <div>No balance data available</div>
      )}
    </div>
  );
}
