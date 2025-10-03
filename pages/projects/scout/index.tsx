import type { NextPage } from 'next'
import Head from 'next/head'
import HamburgerMenu from '../../../components/HamburgerMenu/HamburgerMenu'
import ProjectHero from '../../../components/ProjectHero/ProjectHero'
import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'
import ProjectFeatures from '../../../components/ProjectFeatures/ProjectFeatures'
import ProjectTechStack from '../../../components/ProjectTechStack/ProjectTechStack'
import styles from '../../../styles/Home.module.scss'

const Scout: NextPage = () => {
  const projectData = {
    title: "Project Scout",
    subtitle: "Off-Grid Remote Security System",
    description: "A completely self-contained security monitoring system that operates entirely off-grid, sending real-time notifications through the Meshtastic mesh network.",
    content: `This project started as an excuse to set up a Meshtastic mesh network node, but quickly evolved into a comprehensive off-grid security solution. The system monitors a remote location using solar power and sends push notifications to my phone through the Meshtastic network, ensuring I'm always aware of any activity even when there's no cellular or WiFi coverage.

The beauty of this system lies in its complete independence from traditional infrastructure. It runs entirely on solar power with battery backup, uses LoRa radio for communication through the mesh network, and can operate for months without any external power or network connections.

The project combines hardware hacking, embedded programming, and mesh networking to create something truly unique in the IoT space.`,
    highlights: [
      "100% off-grid operation with solar power and battery backup",
      "Real-time push notifications through Meshtastic mesh network",
      "Motion detection with PIR sensors and camera integration",
      "Weather-resistant outdoor enclosure design",
      "Months of autonomous operation without maintenance"
    ],
    features: [
      {
        title: "Solar Power System",
        description: "Custom solar panel setup with MPPT charge controller and deep-cycle battery for reliable off-grid operation.",
        icon: "☀️"
      },
      {
        title: "Motion Detection",
        description: "PIR sensors and camera integration for comprehensive activity monitoring with configurable sensitivity.",
        icon: "👁️"
      },
      {
        title: "Mesh Communication",
        description: "LoRa-based Meshtastic network for long-range, low-power communication without cellular dependency.",
        icon: "📡"
      },
      {
        title: "Push Notifications",
        description: "Real-time alerts sent directly to your phone through the mesh network, even in remote areas.",
        icon: "📱"
      },
      {
        title: "Weather Protection",
        description: "IP67-rated enclosure with temperature monitoring and automatic system protection.",
        icon: "🌧️"
      },
      {
        title: "Data Logging",
        description: "Local SD card storage for event logging and system diagnostics with remote access capabilities.",
        icon: "💾"
      }
    ],
    technologies: [
      { name: "ESP32", category: "Microcontroller", description: "Dual-core processor with WiFi and Bluetooth capabilities" },
      { name: "LoRa SX1276", category: "Radio Communication", description: "Long-range, low-power radio transceiver for mesh networking" },
      { name: "Meshtastic", category: "Mesh Network", description: "Open-source mesh networking protocol for device communication" },
      { name: "PIR Sensor", category: "Motion Detection", description: "Passive infrared sensor for human movement detection" },
      { name: "Solar Panel", category: "Power System", description: "20W monocrystalline panel with MPPT charge controller" },
      { name: "Deep Cycle Battery", category: "Power System", description: "12V 7Ah sealed lead-acid battery for energy storage" },
      { name: "Arduino IDE", category: "Development", description: "Programming environment for embedded system development" },
      { name: "PlatformIO", category: "Development", description: "Advanced IDE for embedded development with library management" }
    ]
  }

  return (
    <div className={styles.container}>
      <HamburgerMenu />
      <Head>
        <title>Project Scout</title>
        <meta name="description" content="A project page detailing a completely-offgrid remote security system that sends push notifications to my phone through the Meshtastic" />
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

export default Scout
