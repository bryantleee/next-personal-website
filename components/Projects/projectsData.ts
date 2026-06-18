export interface ProjectSummary {
  slug: string
  title: string
  subtitle: string
  blurb: string
  imageUrl?: string
}

// QuizHaus and sam3d Local Service pages live on the
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
  {
    slug: 'desktop-pc',
    title: 'Desktop PC',
    subtitle: 'Dual-GPU workstation and gaming build',
    blurb:
      'Dual-GPU desktop running an i9-12900K with a 3090 Ti and 2080 Ti. Built for 4K gaming, capture, and CUDA workloads, on Noctua air cooling in a Corsair 4000D Airflow.',
    imageUrl: '/desktop-pc.webp',
  },
  {
    slug: 'expense-tracker',
    title: 'Expense Tracker',
    subtitle: 'Automated personal-finance pipeline',
    blurb:
      'A self-hosted finance pipeline that scrapes Chase and Amazon emails over IMAP, matches charges to line-item Amazon orders, and exposes the data to LLM agents over MCP.',
    imageUrl: '/expense-tracker.webp',
  },
]
