import Link from "next/link";
import Button from "./Button";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/" passHref>
        <Button>Timeline</Button>
      </Link>
      <Link href="/Timeform">
        <Button>Add Timeline</Button>
      </Link>
    </div>
  );
}
