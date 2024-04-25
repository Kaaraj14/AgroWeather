import React, { useState, useEffect } from "react";
import axios from "axios";
import { REACT_APP_SHEET_ID, REACT_APP_API_KEY } from "../../apiSecrets";
import CircularBars_Analysis from "../components/CircleUsage";
import styles from './Analysis.module.css';
const Analysis = () => {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const spreadsheetId = REACT_APP_SHEET_ID;
  const apiKey = REACT_APP_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet3!A2:A20?key=${apiKey}`
        );
        setValues(response.data.values || []);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading Results...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <CircularBars_Analysis />
      <div className={styles['analysis-container']}>
        <h2>Results:</h2>
        <ul>
          {values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Analysis;
