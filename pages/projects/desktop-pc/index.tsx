import type { NextPage } from "next";
import ProjectPage from "../../../components/ProjectPage/ProjectPage";
import { getProject } from "../../../data/projects";
import projectStyles from "../../../styles/ProjectPage.module.scss";

const project = getProject("desktop-pc");

const DesktopPc: NextPage = () => {
  return (
    <ProjectPage project={project}>
          <h2 className={projectStyles.sectionHeading}>About</h2>
          <p className={projectStyles.body}>
            Wanted to share my desktop I have had for a few years now! I use it
            as a general workstation for playing games, compute-heavy tasks, and
            GPU workloads. Two GPUs in the same chassis: a 3090 Ti as the
            primary card, a 2080 Ti in the secondary slot for compute and the
            capture pipeline.
          </p>
          <p>
            I like MacOS better for general usage and coding tasks, so I find
            myself using my personal MacBook Pro M3 for most things nowadays,
            and this Desktop I find using for the afformentioned specialized
            tasks.
          </p>

          <h2 className={projectStyles.sectionHeading}>Components</h2>
          <ul className={projectStyles.list}>
            <li className={projectStyles.listItem}>
              <strong>CPU</strong>: Intel Core i9-12900K.
            </li>
            <li className={projectStyles.listItem}>
              <strong>GPU 1 (primary)</strong>: NVIDIA GeForce RTX 3090 Ti
              Monitor is plugged into here too.
            </li>
            <li className={projectStyles.listItem}>
              <strong>GPU 2 (secondary)</strong>: NVIDIA GeForce RTX 2080 Ti
              Second card for compute and CUDA workloads alongside the 3090 Ti.
              I use dual-GPUs mostly for LLMs. I also enjoy just generally
              experimenting with model deployments across the multi-GPU setups.
            </li>
            <li className={projectStyles.listItem}>
              <strong>Motherboard</strong>: ASUS ROG Strix Z690-E Gaming WiFi
              6E.
            </li>
            <li className={projectStyles.listItem}>
              <strong>Memory</strong>: 128 GB (4x32 GB) G.SKILL Trident Z5 RGB
              Series DDR5 RAM.
            </li>
            <li className={projectStyles.listItem}>
              <strong>Capture card</strong>: Elgato 4K60 Pro, I usually have a
              Switch 2 dock plugged into this.
            </li>
            <li className={projectStyles.listItem}>
              <strong>CPU cooling</strong>: Noctua NH-D15 chromax.black,
              dual-tower air cooler. Air over AIO so there&apos;s no pump to
              babysit.
            </li>
            <li className={projectStyles.listItem}>
              <strong>Case fans</strong>: Four Noctua NF-A14x25 G2s for intake
              and exhaust.
            </li>
            <li className={projectStyles.listItem}>
              <strong>PSU</strong>: Corsair RM1000x (2021), 1000 W, 80+ Gold.
              Enough headroom for both graphic cards under load.
            </li>
            <li className={projectStyles.listItem}>
              <strong>Case</strong>: Corsair 4000D Airflow mid-tower with the
              mesh front panel.
            </li>
          </ul>
    </ProjectPage>
  );
};

export default DesktopPc;
