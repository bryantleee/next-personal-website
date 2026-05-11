import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../../../components/Footer/Footer'
import styles from '../../../styles/Home.module.scss'

const QuizHaus: NextPage = () => {
  return (
    <>
      <Head>
        <title>QuizHaus - Bryant</title>
        <meta
          name="description"
          content="An AI-powered study quiz platform that turns any document into adaptive practice quizzes, with sharing, progress tracking, and your choice of LLM."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.projectsTitle}>QuizHaus</h1>
          <p className={styles.projectsSubtitle}>
            AI-powered study quiz platform
          </p>
        </div>
        <div
          style={{
            padding: '0 2rem 3rem',
            maxWidth: '800px',
            margin: '0 auto',
            color: '#ffffff',
          }}
        >
          <h2 style={{ color: '#ebc95b', marginBottom: '1rem' }}>About</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            QuizHaus started with a friend in nursing school venting about her study
            tools. Every option she tried was inconsistent in some frustrating way:
            generic flashcard apps didn&apos;t use her actual lecture notes, AI
            chatbots could spit out a quiz but couldn&apos;t remember it the next day,
            paid services were locked behind subscriptions and forced you onto their
            curated content, and nothing tied your performance over time back to the
            material you uploaded. So I built QuizHaus: a single place where you
            upload your own study material, generate quizzes against it with the LLM
            of your choice, share what you make with classmates, and actually track
            whether you&apos;re getting better. Try it at{' '}
            <a
              href="https://www.quiz.haus"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ebc95b', textDecoration: 'underline' }}
            >
              quiz.haus
            </a>
            .
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            It isn&apos;t tied to any one subject. The first user was studying
            nursing, but the same pipeline (PDF, DOCX, or PPTX in, structured
            multiple-choice with explanations out) works for any topic where the
            study material is a document.
          </p>

          <h3 style={{ color: '#ebc95b', marginBottom: '1rem' }}>Features</h3>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Generate from your own material.</strong> Upload a PDF, DOCX,
              or PPTX, pick a difficulty and question count, and an LLM produces
              multiple-choice questions with per-option explanations. The source
              text is kept with the quiz so you can extend it later without
              re-uploading.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Bring your own LLM key.</strong> Gemini, Claude, or OpenAI,
              switchable per generation. Keys are encrypted at rest with AES-256-GCM
              so you control which model gets your notes and your money.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Adaptive follow-ups.</strong> After finishing a quiz, generate
              a new one targeting only the questions you missed, using the same
              source material. Drilling weak spots is one click, not a manual review.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Extend a quiz.</strong> Add more questions to an existing quiz
              from the same source, on demand, so a single study set keeps growing
              instead of going stale.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Share quizzes with classmates.</strong> Flip any quiz public
              and you get a short share link (<code>/q/&lt;code&gt;</code>) that
              anyone can take, no account required. A Discover page lets users
              browse and save quizzes other people have made public.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Progress tracking.</strong> A dashboard shows recent attempts,
              accuracy over time, per-category performance, and time-on-task charts.
              Every attempt is logged, so the longer you use it the better signal
              you get about what you still don&apos;t know.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>AI performance summaries.</strong> After each attempt, an LLM
              reads your results and writes a short personalized summary of where
              you struggled and what to revisit.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Library with folders.</strong> Quizzes are organized
              hierarchically with search and filters, so a semester&apos;s worth of
              material stays navigable.
            </li>
          </ul>

          <h3 style={{ color: '#ebc95b', marginBottom: '1rem' }}>How it differs from what&apos;s out there</h3>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>vs. Quizlet and Anki:</strong> those rely on either
              hand-written cards or someone else&apos;s shared decks. QuizHaus
              generates questions from your own documents, so the quizzes match
              your specific lectures and slides, not a generic crowdsourced version
              of the topic.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>vs. raw ChatGPT or Claude:</strong> a chatbot can write you a
              quiz, but it can&apos;t remember it tomorrow, organize a semester of
              them, share one with a classmate, or tell you which topics you keep
              missing. QuizHaus is the persistence and analytics layer on top of
              that capability.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>vs. paid AI study tools:</strong> bring-your-own-key means
              there&apos;s no subscription markup. You pay the model provider
              directly for the tokens you actually use, and you can switch models if
              one is producing weaker questions for your subject.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>vs. anything subject-specific:</strong> QuizHaus doesn&apos;t
              have a curriculum opinion. Nursing today, organic chem tomorrow,
              language vocab the day after, all in the same library with the same
              tools.
            </li>
          </ul>

          <h3 style={{ color: '#ebc95b', marginBottom: '1rem' }}>Stack</h3>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Postgres on Supabase via Prisma 7, with NextAuth v5 + Google OAuth.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Zod-validated LLM output so malformed responses fail fast instead of
              producing broken quizzes; Zustand for in-quiz state; Recharts for the
              dashboard.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Deployed on Vercel.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default QuizHaus
