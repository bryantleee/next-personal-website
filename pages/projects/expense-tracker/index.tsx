import type { NextPage } from 'next'
import ProjectPage from '../../../components/ProjectPage/ProjectPage'
import { getProject } from '../../../data/projects'
import projectStyles from '../../../styles/ProjectPage.module.scss'

const project = getProject('expense-tracker')

const ExpenseTracker: NextPage = () => {
  return (
    <ProjectPage project={project}>
      <h2 className={projectStyles.sectionHeading}>About</h2>
      <p className={projectStyles.body}>
        I built a personal expense tracker for credit card purchases. I set up my cards to send
        transaction alerts to a dedicated Gmail account. It is a self-hosted personal-finance
        pipeline that ingests bank and order emails from Gmail over IMAP, links each charge to the
        actual items purchased, and presents the result through a Flask dashboard and an MCP server.
        The MCP layer is the interesting part: any agent (Claude Code, a local LLM, a custom
        assistant) can ask &quot;how much did I spend on groceries last month?&quot; or &quot;what
        was on that $84 Amazon order from April 3rd?&quot; without going through HTTP plumbing.
      </p>

      <h2 className={projectStyles.sectionHeading}>Pipeline</h2>
      <ul className={projectStyles.list}>
        <li className={projectStyles.listItem}>
          <strong>Scrape</strong>: fetches Chase transaction alerts and Amazon order confirmations
          from Gmail over IMAP. An IMAP IDLE watcher thread triggers the pipeline whenever a new
          Chase email arrives, so the dashboard is up to date within seconds of a swipe.
        </li>
        <li className={projectStyles.listItem}>
          <strong>Parse</strong>: extracts amount, merchant, card, and date from Chase emails; pulls
          per-item line entries from Amazon orders.
        </li>
        <li className={projectStyles.listItem}>
          <strong>Match</strong>: links charges to Amazon orders by amount, within a 3-day-before to
          45-day-after window (Amazon often charges on ship, not order).
        </li>
        <li className={projectStyles.listItem}>
          <strong>Categorize</strong>: assigns categories based on merchant and, for Amazon, the
          item names.
        </li>
        <li className={projectStyles.listItem}>
          <strong>Store</strong>: persists to SQLite; supports manual recategorization,
          returned-item tracking, and shared-expense splits.
        </li>
      </ul>

      <h2 className={projectStyles.sectionHeading}>Highlights</h2>
      <ul className={projectStyles.list}>
        <li className={projectStyles.listItem}>
          MCP server (<code>mcp_server.py</code>) exposes the full data model as typed tools: list
          transactions, summarize by category or card, fetch a full Amazon order with line items,
          mark returns, set splits, and trigger backfills. A <code>cost-tracker://schema</code>{' '}
          resource exposes the SQLite schema for ad-hoc agent queries.
        </li>
        <li className={projectStyles.listItem}>
          Flask dashboard with monthly views, per-category and per-card summaries, and date-range
          filtering. The same backend serves a REST API protected by an API key.
        </li>
        <li className={projectStyles.listItem}>
          Backfill mode walks up to five years of historical emails in one pass; an Apple Card CSV
          importer handles the one card whose statements don&apos;t come over email.
        </li>
        <li className={projectStyles.listItem}>
          Containerized with Docker Compose; runs on the OpenClaw Server and publishes status
          changes over MQTT so other home services can react.
        </li>
      </ul>
    </ProjectPage>
  )
}

export default ExpenseTracker
