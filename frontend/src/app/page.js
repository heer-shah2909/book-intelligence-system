"use client";

import { useEffect, useState } from "react";
import API from "@/utils/api";
import styles from "./page.module.css";

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const res = await API.get("books/");
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Book Dashboard</h1>
        <p className={styles.subtitle}>Welcome back! Dive into your latest insights.</p>
      </header>

      {loading ? (
        <div className={styles.loader}>Loading your books...</div>
      ) : (
        <div className={styles.grid}>
          {books.map((book) => (
            <article key={book.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h2 className={styles.bookTitle}>{book.title}</h2>
                <span className={styles.ratingBadge}>★ {book.rating}</span>
              </div>
              <p className={styles.summary}>
                {book.summary?.slice(0, 110)}
                {book.summary?.length > 110 ? "..." : ""}
              </p>
              <div className={styles.cardFooter}>
                <button className={styles.actionBtn}>View Details</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}