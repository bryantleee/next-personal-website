import type { NextPage } from "next";
import Head from "next/head";
import HamburgerMenu from "../../../components/HamburgerMenu/HamburgerMenu";
import styles from "../../../styles/Home.module.scss";

const BlobboAppleCatch: NextPage = () => {
  return (
    <div className={styles.container}>
      <HamburgerMenu />
      <Head>
        <title>Blobbo's Apple Catch - Bryant</title>
        <meta
          name="description"
          content="A homebrew Game Boy game where players help Blobbo catch falling apples and dodge obstacles!"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.projectsTitle}>Blobbo's Apple Catch</h1>
          <p className={styles.projectsSubtitle}>
            A fun mobile game featuring Blobbo catching apples with smooth
            physics and engaging gameplay.
          </p>
        </div>
        <div
          style={{
            padding: "2rem",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#ffffff",
          }}
        >
          <h2 style={{ color: "#ebc95b", marginBottom: "1rem" }}>
            About This Project
          </h2>
          <p style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            Blobbo's Apple Catch is a charming mobile game where players help
            the adorable character Blobbo catch falling apples. The game
            features smooth physics, engaging gameplay mechanics, and
            progressively challenging levels.
          </p>
          <h3 style={{ color: "#ebc95b", marginBottom: "1rem" }}>
            Key Features
          </h3>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Intuitive touch controls</li>
            <li style={{ marginBottom: "0.5rem" }}>Smooth physics engine</li>
            <li style={{ marginBottom: "0.5rem" }}>Progressive difficulty</li>
            <li style={{ marginBottom: "0.5rem" }}>
              Charming character design
            </li>
            <li style={{ marginBottom: "0.5rem" }}>Score tracking system</li>
          </ul>
          <h3 style={{ color: "#ebc95b", marginBottom: "1rem" }}>
            Technology Stack
          </h3>
          <p style={{ marginBottom: "1.5rem" }}>
            Built using modern mobile game development tools with focus on
            performance and user experience.
          </p>
        </div>
      </main>
    </div>
  );
};

export default BlobboAppleCatch;
