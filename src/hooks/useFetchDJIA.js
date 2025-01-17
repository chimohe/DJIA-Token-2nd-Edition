import { useState, useEffect } from 'react';

const useFetchDJIA = () => {
  const [djiaData, setDjiaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDJIA = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.example.com/djia'); // Replace with the actual API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch DJIA data');
      }
      const data = await response.json();
      setDjiaData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDJIA();
  }, []);

  return { djiaData, loading, error, refetch: fetchDJIA };
};

export default useFetchDJIA;
