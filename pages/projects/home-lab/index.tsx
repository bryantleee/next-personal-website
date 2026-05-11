import type { NextPage } from "next";
import Image from "next/image";
import Footer from "../../../components/Footer/Footer";
import Seo from "../../../components/Seo/Seo";
import styles from "../../../styles/Home.module.scss";
import projectStyles from "../../../styles/ProjectPage.module.scss";

const HOME_LAB_DESCRIPTION =
  "A self-hosted, multi-node homelab running Docker, observability, and home automation stacks.";

const HomeLab: NextPage = () => {
  return (
    <>
      <Seo
        title="Home Lab | Bryant Lee"
        description={HOME_LAB_DESCRIPTION}
        path="/projects/home-lab"
        image="/home-lab.webp"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Home Lab",
          description: HOME_LAB_DESCRIPTION,
          image: "https://www.bryant.li/home-lab.webp",
          author: { "@type": "Person", name: "Bryant Lee" },
          url: "https://www.bryant.li/projects/home-lab",
        }}
      />
      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.projectsTitle}>Home Lab</h1>
          <p className={styles.projectsSubtitle}>
            Self-Hosted Infrastructure &amp; Networking
          </p>
        </div>
        <div className={projectStyles.content}>
          <div className={projectStyles.hero}>
            <Image
              src="/home-lab.webp"
              alt="Home lab rack"
              width={1066}
              height={1600}
              className={projectStyles.heroImage}
            />
          </div>

          <h2 className={projectStyles.sectionHeading}>About</h2>
          <p className={projectStyles.body}>
            A self-hosted home network built from three Linux machines, a
            Synology NAS, and around thirty Docker services. A low-power x86 box
            runs general services and is the storage gateway, an OpenClaw box
            handles personal services along with smart-home voice and
            lightweight on-device AI, and a Raspberry Pi handles DNS-level ad
            blocking and WireGuard VPN ingress. The only port reachable from the
            public internet is WireGuard; everything else is LAN-only behind an
            nginx reverse proxy.
          </p>

          <h3 className={projectStyles.sectionHeading}>Architecture</h3>
          <ul className={projectStyles.list}>
            <li className={projectStyles.listItem}>
              <strong>Main Server</strong> (Intel N100, 16 GB, Debian 12): the
              primary service host. Runs about twenty compose stacks, the
              reverse proxy, the Prometheus + Grafana + Loki collector, Jellyfin
              with Intel Quick Sync transcoding, and Immich. NFS-mounts the
              Synology NAS (~50 TB) for media and photos.
            </li>
            <li className={projectStyles.listItem}>
              <strong>OpenClaw Server</strong> (Debian 13): the OpenClaw box.
              Runs local speech-to-text and text-to-speech that plug into Home
              Assistant&apos;s voice integration, plus lightweight on-device AI
              for basic classification tasks. Also hosts personal services like
              an MkDocs wiki and an MCP-enabled cost tracker.
            </li>
            <li className={projectStyles.listItem}>
              <strong>PiHole</strong> (Raspberry Pi 4, Debian 12): network edge.
              Runs Pi-hole for LAN-wide DNS filtering and WireGuard via PiVPN.
              Also exports Prometheus metrics back to the Main Server.
            </li>
            <li className={projectStyles.listItem}>
              <strong>Synology NAS</strong> (~50 TB): the bulk-storage layer.
              Exports separate NFS shares for the media library and the photo
              library; the Main Server mounts both so Jellyfin and Immich stream
              straight off network storage instead of keeping local copies.
              Snapshots and scheduled scrubs are handled by the NAS itself, so
              the compute hosts stay disposable.
            </li>
            <li className={projectStyles.listItem}>
              <strong>Home Assistant Yellow</strong>: Runs the smart home via a
              Home Assistant instance that orchestrates every connected device
              in the house and integrates with the OpenClaw voice stack, both
              MQTT brokers, and the Main Server&apos;s Prometheus monitoring.
            </li>
          </ul>

          <h3 className={projectStyles.sectionHeading}>Some Highlights</h3>
          <ul className={projectStyles.list}>
            <li className={projectStyles.listItem}>
              Centralized observability: Prometheus, Grafana, Loki, and Promtail
              on the Main Server scrape all hosts in the home lab.
            </li>
            <li className={projectStyles.listItem}>
              Jellyfin media server using hardware transcoding on the Intel iGPU
              (good enough... usually?), with a ~50 TB NFS library on the NAS.
            </li>
            <li className={projectStyles.listItem}>
              AI split by tier: local STT, TTS, and basic classification stay on
              the OpenClaw box so Home Assistant voice and other lightweight
              tasks never leave the LAN. Heavier backend inference either hits
              remote providers or runs on a dual-GPU desktop via a
              llama-cpp-server deployment.
            </li>
            <li className={projectStyles.listItem}>
              Smart home: Mosquitto MQTT brokers on both servers feed Home
              Assistant; a NUT daemon talks to a CyberPower UPS over USB and
              exposes its state.
            </li>
            <li className={projectStyles.listItem}>
              Networking: Pi-hole gives the whole LAN DNS-level ad and tracker
              blocking; WireGuard (via PiVPN) is the only inbound port from the
              internet. A cron job pushes the current public IP up to DuckDNS so
              WireGuard clients can reach the VPN endpoint by a stable hostname
              even when the ISP rotates the address.
            </li>
            <li className={projectStyles.listItem}>
              Personal tooling alongside off-the-shelf services: a Flask job
              scheduler, a cost tracker that exposes an MCP server, and a small
              music assistant.
            </li>
            <li className={projectStyles.listItem}>
              On the main server for fun: Minecraft and Factorio servers,
              EmulatorJS for browser-playable ROMs, and a Commodore 64 FTP
              server.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomeLab;
