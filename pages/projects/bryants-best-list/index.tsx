import type { NextPage } from 'next'
import Head from 'next/head'
import HamburgerMenu from '../../../components/HamburgerMenu/HamburgerMenu'
import ProjectHero from '../../../components/ProjectHero/ProjectHero'
import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'
import ProjectFeatures from '../../../components/ProjectFeatures/ProjectFeatures'
import ProjectTechStack from '../../../components/ProjectTechStack/ProjectTechStack'
import styles from '../../../styles/Home.module.scss'

const BryantsBestList: NextPage = () => {
  const projectData = {
    title: "Bryant's Best List",
    subtitle: "NYC Recommendations Platform",
    description: "A curated collection of my favorite spots, restaurants, and experiences in New York City, organized by neighborhood and category.",
    content: `Living in New York City has given me the opportunity to discover countless amazing places, from hidden gems to world-renowned establishments. This project is my personal curation of the best the city has to offer.

The list is organized by neighborhood and category, making it easy to find exactly what you're looking for. Whether you're a local looking for new spots or a visitor planning your trip, these recommendations come from years of exploration and countless meals, drinks, and experiences.

Each recommendation includes detailed information about what makes the place special, the best times to visit, and insider tips that only locals would know. The list is constantly updated as I discover new favorites and revisit old ones.

This isn't just a list of popular places - it's a carefully curated selection based on personal experience, quality, and the unique character that makes each spot memorable.`,
    highlights: [
      "Curated recommendations from years of NYC exploration",
      "Organized by neighborhood and category for easy navigation",
      "Detailed descriptions with insider tips and best times to visit",
      "Constantly updated with new discoveries",
      "Personal favorites that go beyond typical tourist spots"
    ],
    features: [
      {
        title: "Neighborhood Organization",
        description: "Recommendations organized by NYC neighborhoods for easy location-based browsing.",
        icon: "🗺️"
      },
      {
        title: "Category Filtering",
        description: "Filter by restaurants, bars, cafes, activities, and more to find exactly what you need.",
        icon: "🏷️"
      },
      {
        title: "Detailed Reviews",
        description: "Comprehensive descriptions including what to order, best times to visit, and insider tips.",
        icon: "📝"
      },
      {
        title: "Price Range Guide",
        description: "Clear indication of price ranges from budget-friendly to splurge-worthy options.",
        icon: "💰"
      },
      {
        title: "Local Insights",
        description: "Insider knowledge about reservations, timing, and hidden gems that tourists miss.",
        icon: "🔍"
      },
      {
        title: "Regular Updates",
        description: "Constantly updated with new discoveries and seasonal recommendations.",
        icon: "🔄"
      }
    ],
    technologies: [
      { name: "Next.js", category: "Framework", description: "React framework for building the web application" },
      { name: "TypeScript", category: "Language", description: "Type-safe JavaScript for better development experience" },
      { name: "SCSS", category: "Styling", description: "CSS preprocessor for organized and maintainable styles" },
      { name: "Responsive Design", category: "UI/UX", description: "Mobile-first design that works on all devices" },
      { name: "Static Generation", category: "Performance", description: "Pre-generated pages for fast loading times" },
      { name: "SEO Optimization", category: "Marketing", description: "Search engine optimization for better discoverability" },
      { name: "Content Management", category: "Data", description: "Easy-to-update content structure for regular updates" },
      { name: "Interactive Maps", category: "Features", description: "Integration with mapping services for location visualization" }
    ]
  }

  return (
    <div className={styles.container}>
      <HamburgerMenu />
      <Head>
        <title>Bryant's Best List</title>
        <meta name="description" content="Bryant's curated recommendations for the best spots in New York City" />
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

export default BryantsBestList
