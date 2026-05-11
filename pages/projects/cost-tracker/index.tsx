import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../../components/Footer/Footer";
import styles from "../../../styles/Home.module.scss";

const CostTracker: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cost Tracker - Bryant</title>
        <meta
          name="description"
          content="Automatic expense tracking that scrapes Chase and Amazon emails, matches charges to line-item orders, and exposes the data to LLM agents over MCP."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.projectsTitle}>Cost Tracker</h1>
          <p className={styles.projectsSubtitle}>
            Automated personal-finance pipeline
          </p>
        </div>
        <div
          style={{
            padding: "0 2rem 3rem",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#ffffff",
          }}
        >
          <h2 style={{ color: "#ebc95b", marginBottom: "1rem" }}>About</h2>
          <p style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            Cost Tracker is a self-hosted personal-finance pipeline that ingests
            bank and order emails from Gmail over IMAP, links each charge to the
            actual items purchased, and presents the result through a Flask
            dashboard and an MCP server. The MCP layer is the interesting part:
            any agent (Claude Code, a local LLM, a custom assistant) can ask
            &quot;how much did I spend on groceries last month?&quot; or
            &quot;what was on that $84 Amazon order from April 3rd?&quot;
            without going through HTTP plumbing.{" "}
            <a
              href="https://github.com/bryantleee/cost-tracker"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ebc95b", textDecoration: "underline" }}
            >
              Source on GitHub
            </a>
            .
          </p>

          <h3 style={{ color: "#ebc95b", marginBottom: "1rem" }}>Pipeline</h3>
          <ul
            style={{
              marginBottom: "1.5rem",
              paddingLeft: "1.5rem",
              lineHeight: "1.7",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Scrape</strong>: fetches Chase transaction alerts and
              Amazon order confirmations from Gmail over IMAP. An IMAP IDLE
              watcher thread triggers the pipeline whenever a new Chase email
              arrives, so the dashboard is up to date within seconds of a swipe.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Parse</strong>: extracts amount, merchant, card, and date
              from Chase emails; pulls per-item line entries from Amazon orders.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Match</strong>: links charges to Amazon orders by amount,
              within a 3-day-before to 45-day-after window (Amazon often charges
              on ship, not order).
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Categorize</strong>: assigns categories based on merchant
              and, for Amazon, the item names.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Store</strong>: persists to SQLite; supports manual
              recategorization, returned-item tracking, and shared-expense
              splits.
            </li>
          </ul>

          <h3 style={{ color: "#ebc95b", marginBottom: "1rem" }}>Highlights</h3>
          <ul
            style={{
              marginBottom: "1.5rem",
              paddingLeft: "1.5rem",
              lineHeight: "1.7",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              MCP server (<code>mcp_server.py</code>) exposes the full data
              model as typed tools: list transactions, summarize by category or
              card, fetch a full Amazon order with line items, mark returns, set
              splits, and trigger backfills. A{" "}
              <code>cost-tracker://schema</code> resource exposes the SQLite
              schema for ad-hoc agent queries.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Flask dashboard with monthly views, per-category and per-card
              summaries, and date-range filtering. The same backend serves a
              REST API protected by an API key.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Backfill mode walks up to five years of historical emails in one
              pass; an Apple Card CSV importer handles the one card whose
              statements don&apos;t come over email.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Containerized with Docker Compose; runs on a Ryzen home server and
              publishes status changes over MQTT so other home services can
              react.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CostTracker;
