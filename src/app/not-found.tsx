import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={`${styles.notfoundwrapper} container p-5`}>
      <h1 className={`${styles.notfoundtitle}`}>404</h1>
      <h2>OOPS! Page Not Found</h2>
      <p>
        The page you’re looking for doesn’t exist or may have been moved. Please
        contact the system administrator if you believe this is an error.
      </p>
      <Link href="/">
        <button className="btn btn-custom rounded-0 px-4 py-2 fw-bold">
          Return Home
        </button>
      </Link>
    </div>
  );
}
