import type { NextPage } from 'next'
import Head from 'next/head'
import HamburgerMenu from '../../../components/HamburgerMenu/HamburgerMenu'
import ProjectHero from '../../../components/ProjectHero/ProjectHero'
import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'
import ProjectFeatures from '../../../components/ProjectFeatures/ProjectFeatures'
import ProjectTechStack from '../../../components/ProjectTechStack/ProjectTechStack'
import styles from '../../../styles/Home.module.scss'

const MyHomelab: NextPage = () => {
  const projectData = {
    title: "My Homelab",
    subtitle: "Personal Infrastructure & Learning Environment",
    description: "A comprehensive home laboratory setup featuring virtualization, containerization, networking, and self-hosted services for learning and experimentation.",
    content: `My homelab represents years of learning, experimentation, and infrastructure building. What started as a simple home server has evolved into a comprehensive lab environment that mirrors enterprise-grade setups.

The lab serves multiple purposes: it's a learning environment for new technologies, a testing ground for projects, and a production environment for self-hosted services that power my daily digital life. Everything from media streaming to development environments runs on this infrastructure.

The setup includes multiple servers, network equipment, and storage solutions, all managed through modern DevOps practices. Virtualization and containerization are key components, allowing for efficient resource utilization and easy scaling.

This homelab has been instrumental in developing my skills in system administration, networking, security, and cloud technologies. It's a living, breathing example of continuous learning and improvement.`,
    highlights: [
      "Multi-server setup with virtualization and containerization",
      "Self-hosted services including media, development, and productivity tools",
      "Enterprise-grade networking with VLANs and security policies",
      "Automated deployment and configuration management",
      "Monitoring and logging for system health and performance"
    ],
    features: [
      {
        title: "Virtualization Platform",
        description: "VMware vSphere cluster with high availability and resource management for running multiple VMs.",
        icon: "🖥️"
      },
      {
        title: "Container Orchestration",
        description: "Docker and Kubernetes for microservices and application deployment automation.",
        icon: "🐳"
      },
      {
        title: "Network Infrastructure",
        description: "Managed switches, VLANs, and enterprise networking equipment for secure segmentation.",
        icon: "🌐"
      },
      {
        title: "Storage Solutions",
        description: "NAS systems with RAID configurations and backup strategies for data protection.",
        icon: "💾"
      },
      {
        title: "Self-Hosted Services",
        description: "Media servers, development tools, and productivity applications running locally.",
        icon: "🏠"
      },
      {
        title: "Monitoring & Logging",
        description: "Comprehensive monitoring stack with metrics, logs, and alerting for system health.",
        icon: "📊"
      }
    ],
    technologies: [
      { name: "VMware vSphere", category: "Virtualization", description: "Enterprise virtualization platform for server consolidation" },
      { name: "Docker", category: "Containerization", description: "Container platform for application packaging and deployment" },
      { name: "Kubernetes", category: "Orchestration", description: "Container orchestration for scalable application management" },
      { name: "Proxmox", category: "Hypervisor", description: "Open-source virtualization platform for lab environments" },
      { name: "pfSense", category: "Networking", description: "Firewall and router software for network security and management" },
      { name: "TrueNAS", category: "Storage", description: "Network-attached storage solution with ZFS filesystem" },
      { name: "Prometheus", category: "Monitoring", description: "Metrics collection and monitoring system" },
      { name: "Grafana", category: "Visualization", description: "Data visualization and dashboard platform" },
      { name: "Ansible", category: "Automation", description: "Configuration management and automation tool" },
      { name: "GitLab", category: "DevOps", description: "Self-hosted Git repository and CI/CD platform" }
    ]
  }

  return (
    <div className={styles.container}>
      <HamburgerMenu />
      <Head>
        <title>My Homelab</title>
        <meta name="description" content="Personal homelab infrastructure featuring virtualization, containerization, and self-hosted services" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <ProjectHero 
          title={projectData.title}
          subtitle={projectData.subtitle}
          description={projectData.description}
        />
        <ProjectDescription 
          content={projectData.content}
          highlights={projectData.highlights}
        />
        <ProjectFeatures features={projectData.features} />
        <ProjectTechStack technologies={projectData.technologies} />
      </main>
    </div>
  )
}

export default MyHomelab
