import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../../components/Footer/Footer";
import styles from "../../../styles/Home.module.scss";

const ProjectScout: NextPage = () => {
  return (
    <>
      <Head>
        <title>Project Scout - Bryant</title>
        <meta
          name="description"
          content="A scalable, internet-free monitoring system: edge AI on a Raspberry Pi 5 + Hailo NPU, alerting over a public LoRa mesh network."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.projectsTitle}>Project Scout</h1>
          <p className={styles.projectsSubtitle}>
            Offline AI-Powered Home Security System
          </p>
        </div>
        <div
          style={{
            padding: "0 2rem 3rem",
            maxWidth: "900px",
            margin: "0 auto",
            color: "#ffffff",
          }}
        >
          <div style={{ marginBottom: "2rem", textAlign: "center" }}>
            <Image
              src="/project-scout.webp"
              alt="Project Scout architecture diagram"
              width={1200}
              height={700}
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
          </div>

          <h2 style={{ color: "#ebc95b", marginBottom: "1rem" }}>Problem</h2>
          <p style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            Real-time AI-powered monitoring at a remote location usually
            requires either internet connectivity or a dedicated long-range
            radio setup. I wanted a solution that needed neither: one that could
            run anywhere and ride on existing, openly-shared infrastructure.
          </p>

          <h2 style={{ color: "#ebc95b", marginBottom: "1rem" }}>Solution</h2>
          <ul
            style={{
              marginBottom: "1.5rem",
              paddingLeft: "1.5rem",
              lineHeight: "1.7",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              An edge node (&ldquo;Scout&rdquo;) running Frigate on a Raspberry
              Pi 5 + Hailo-8 NPU performs object detection and facial
              recognition entirely on-device.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Detected events are published to a local MQTT broker, read by a
              message orchestrator, then transmitted as encrypted messages over
              the distributed Meshtastic LoRa network.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              A receiving Meshtastic node bridges those messages back into my
              home server&apos;s MQTT instance, which is bridged to my Home
              Assistant for iOS push notifications.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              The whole pipeline is fully offline from the edge node&apos;s
              perspective and scales to any location within range of the public
              mesh.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectScout;
