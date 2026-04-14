"use client";

import Link from "next/link";

export default function NavBar() {

  return (

    <nav style={{
      background: "#2563eb",
      padding: "15px",
      display: "flex",
      gap: "20px"
    }}>

      <Link
        href="/"
        style={{ color: "white" }}
      >
        Dashboard
      </Link>

      <Link
        href="/ask"
        style={{ color: "white" }}
      >
        Ask Questions
      </Link>

      <Link
        href="/search"
        style={{ color: "white" }}
      >
        Smart Search
      </Link>

      <Link
        href="/insights"
        style={{ color: "white" }}
      >
        Insights
      </Link>

    </nav>

  );

}