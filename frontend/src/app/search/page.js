"use client";

import { useState } from "react";
import API from "@/utils/api";
import styles from "./search.module.css";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      // Fixed endpoint from search/ to smart-search/
      const response = await API.post("smart-search/", { query });
      setResults(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Smart Search</h1>
        <p className={styles.subtitle}>Discover intelligently—search books by semantic meaning</p>
      </header>

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="e.g. An adventure across Europe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
          onKeyDown={(e) => e.key === 'Enter' && searchBooks()}
        />
        <button onClick={searchBooks} className={styles.button} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      <div className={styles.grid}>
        {results.map((book) => (
          <article key={book.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.bookTitle}>{book.title}</h2>
              <span className={styles.ratingBadge}>★ {book.rating}</span>
            </div>
            <p className={styles.summary}>{book.summary}</p>
          </article>
        ))}
        {results.length === 0 && !loading && (
           <div className={styles.emptyState}>No items match your search.</div>
        )}
      </div>
    </div>
  );
}