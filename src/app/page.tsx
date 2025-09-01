import Image from "next/image";
import styles from './page.module.css';
import Avatar from "@/app/components/Avatar/Avatar";

export default function Home() {
  return (
        <main className={styles.main}>
            <div>
                <Avatar
                    imgSrc="/leo.jpg"
                    imgAlt="Leo Sammarco"
                    height={200}
                    width={200}
                />
            </div>
            <h1 className={styles.title}>Leo Sammarco</h1>

            <p className={styles.description}>
                Hi I'm Leo, an Engineering Manager based in Manchester working for
                Booking.com
            </p>
            <p className={styles.contact}>
                contact me at{" "}
                <a href="mailto:hi@leosammarco.com">hi@leosammarco.com</a>
            </p>
        </main>
  );
}
