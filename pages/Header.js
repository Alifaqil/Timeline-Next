import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Button";
import styles from "../styles/Home.module.css";

export default function Header() {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <Button onClick={() => router.push("/")}>Timeline</Button>
      <Button onClick={() => router.push("/Timeform")}>Add Timeline</Button>
    </div>
  );
}
