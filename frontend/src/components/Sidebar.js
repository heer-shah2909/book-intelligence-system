"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Ask Questions", path: "/ask" },
    { name: "Smart Search", path: "/search" },
    { name: "Insights", path: "/insights" }
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <div className={styles.logoIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
          </svg>
        </div>
        <h1 className={styles.logoText}>IntelDocs</h1>
      </div>

      <nav className={styles.nav}>
        {menu.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`${styles.navLink} ${isActive ? styles.active : ""}`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className={styles.userProfile}>
        <div className={styles.avatar}>AM</div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>Admin User</span>
          <span className={styles.userRole}>Workspace</span>
        </div>
      </div>
    </div>
  );
}