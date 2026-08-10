import type { NextPage } from "next";
import ProjectPage from "../../../components/ProjectPage/ProjectPage";
import { getProject } from "../../../data/projects";
import projectStyles from "../../../styles/ProjectPage.module.scss";

const project = getProject("project-scout");

const ProjectScout: NextPage = () => {
  return (
    <ProjectPage project={project}>
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
    </ProjectPage>
  );
};

export default ProjectScout;
