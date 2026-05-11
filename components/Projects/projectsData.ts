export interface ProjectSummary {
  slug: string
  title: string
  subtitle: string
  blurb: string
  imageUrl?: string
}

// QuizHaus, Cost Tracker, and sam3d Local Service pages live on the
// `unreleased-projects` branch until they're ready to ship.
export const projects: ProjectSummary[] = [
  {
    slug: 'project-scout',
    title: 'Project Scout',
    subtitle: 'Offline AI-Powered Home Security System',
    blurb:
      'Internet-free edge AI on a Raspberry Pi 5 + Hailo-8 NPU, alerting over a public LoRa mesh network. No cloud, no SIM, no dedicated radio.',
    imageUrl: '/project-scout.webp',
  },
  {
    slug: 'home-lab',
    title: 'Home Lab',
    subtitle: 'Self-Hosted Infrastructure & Networking',
    blurb:
      'A multi-node homelab running Docker-based media, productivity, and local AI inference stacks with full Prometheus/Grafana observability.',
    imageUrl: '/home-lab.webp',
  },
  {
    slug: 'blobbo-apple-catch',
    title: "Blobbo's Apple Catch",
    subtitle: 'Nintendo Game Boy homebrew game',
    blurb:
      'A homebrew game compiling to Nintendo Game Boy, Game Gear, and Analogue Pocket, with a physical cartridge release.',
    imageUrl: '/blobbo-apple-catch.webp',
  },
]
