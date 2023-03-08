import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Section from "./Components/Section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="main">
      <Section />
    </main>
  );
}
