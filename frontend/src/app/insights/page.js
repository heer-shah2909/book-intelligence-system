"use client";

import { useState } from "react";
import API from "@/utils/api";
import styles from "./insights.module.css";

export default function InsightsPage() {
  const [insights, setInsights] = useState("");
  const [loading, setLoading] = useState(false);

  const generateInsights = async () => {
    setLoading(true);
    try {
      const response = await API.get("insights/");
      setInsights(response.data.insights);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Insights</h1>
        <p className={styles.subtitle}>Get AI-powered analytics about your document collection.</p>
      </header>

      <div className={styles.actionArea}>
        <button 
          onClick={generateInsights} 
          className={styles.generateBtn}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Insights"}
        </button>
      </div>

      {insights && (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconContainer}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h2 className={styles.cardTitle}>Generated Analysis</h2>
          </div>
          <p className={styles.insightText}>{insights}</p>
        </div>
      )}
    </div>
  );
}