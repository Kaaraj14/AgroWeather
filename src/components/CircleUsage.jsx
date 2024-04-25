import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgressbarComponent from "./CircularProgressbarComponent";
import { REACT_APP_API_KEY, REACT_APP_SHEET_ID } from "../../apiSecrets";
const CircularBars_Analysis = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_SHEET_ID' with your actual Google Sheet ID
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${REACT_APP_SHEET_ID}/values/Sheet1!A2:E4?key=${REACT_APP_API_KEY}`
        );
        setData(response.data.values);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <CircularProgressbarComponent data={data} />
    </div>
  );
};

export default CircularBars_Analysis;
