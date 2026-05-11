import type { NextPage } from "next";
import Image from "next/image";
import Footer from "../../../components/Footer/Footer";
import Seo from "../../../components/Seo/Seo";
import styles from "../../../styles/Home.module.scss";
import projectStyles from "../../../styles/ProjectPage.module.scss";

const SCOUT_DESCRIPTION =
  "A scalable, internet-free monitoring system: edge AI on a Raspberry Pi 5 + Hailo NPU, alerting over a public LoRa mesh network.";

const ProjectScout: NextPage = () => {
  return (
    <>
      <Seo
        title="Project Scout | Bryant Lee"
        description={SCOUT_DESCRIPTION}
        path="/projects/project-scout"
        image="/project-scout.webp"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Project Scout",
          description: SCOUT_DESCRIPTION,
          image: "https://www.bryant.li/project-scout.webp",
          author: { "@type": "Person", name: "Bryant Lee" },
          url: "https://www.bryant.li/projects/project-scout",
        }}
      />
      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.projectsTitle}>Project Scout</h1>
          <p className={styles.projectsSubtitle}>
            Offline AI-Powered Home Security System
          </p>
        </div>
        <div className={projectStyles.content}>
          <div className={projectStyles.hero}>
            <Image
              src="/project-scout.webp"
              alt="Project Scout architecture diagram"
              width={1200}
              height={700}
              className={projectStyles.heroImage}
            />
          </div>

          <h2 className={projectStyles.sectionHeading}>Problem</h2>
          <p className={projectStyles.body}>
            Real-time AI-powered monitoring at a remote location usually
            requires either internet connectivity or a dedicated long-range
            radio setup. I wanted a solution that needed neither: one that could
            run anywhere and ride on existing, openly-shared infrastructure.
          </p>

          <h2 className={projectStyles.sectionHeading}>Solution</h2>
          <ul className={projectStyles.list}>
            <li className={projectStyles.listItem}>
              An edge node (&ldquo;Scout&rdquo;) running Frigate on a Raspberry
              Pi 5 + Hailo-8 NPU performs object detection and facial
              recognition entirely on-device.
            </li>
            <li className={projectStyles.listItem}>
              Detected events are published to a local MQTT broker, read by a
              message orchestrator, then transmitted as encrypted messages over
              the distributed Meshtastic LoRa network.
            </li>
            <li className={projectStyles.listItem}>
              A receiving Meshtastic node bridges those messages back into my
              home server&apos;s MQTT instance, which is bridged to my Home
              Assistant for iOS push notifications.
            </li>
            <li className={projectStyles.listItem}>
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
