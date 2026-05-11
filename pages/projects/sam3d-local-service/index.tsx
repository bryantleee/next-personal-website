import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../../../components/Footer/Footer'
import styles from '../../../styles/Home.module.scss'

const Sam3dLocalService: NextPage = () => {
  return (
    <>
      <Head>
        <title>sam3d Local Service - Bryant</title>
        <meta
          name="description"
          content="A Dockerized REST API wrapping Meta's SAM 3D Objects, extended with a configurable device map that splits the pipeline across multiple GPUs."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.projectsTitle}>sam3d Local Service</h1>
          <p className={styles.projectsSubtitle}>
            Multi-GPU SAM 3D Objects inference service
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
            A Dockerized FastAPI service wrapping{' '}
            <a
              href="https://github.com/facebookresearch/sam-3d-objects"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ebc95b', textDecoration: 'underline' }}
            >
              Meta&apos;s SAM 3D Objects
            </a>{' '}
            model: submit an image (with a mask, alpha channel, or text prompt) and
            get back a textured GLB mesh plus a Gaussian-splat PLY as an async job.
            The service runs locally on a two-GPU box (RTX 3090 Ti + RTX 2080 Ti) and
            shares the primary card with a sibling segmentation service, which made
            VRAM headroom the design constraint.{' '}
            <a
              href="https://github.com/bryantleee/sam3d-local-service"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ebc95b', textDecoration: 'underline' }}
            >
              Source on GitHub
            </a>
            .
          </p>

          <h3 style={{ color: '#ebc95b', marginBottom: '1rem' }}>The multi-GPU update</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Default behavior is single-GPU on <code>cuda:0</code>, where the pipeline
            allocates ~20 GB of the 3090 Ti&apos;s 24 GB during inference. That leaves
            no headroom for the prompt-to-mask service to coexist on the same card,
            so I added a configurable <em>device map</em> that routes individual
            submodules of the SAM 3D pipeline to a second GPU.
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              A new <code>SAM3D_DEVICE_MAP</code> env var takes a JSON object of{' '}
              <code>{`{submodule: "cuda:N"}`}</code> mappings and applies it at
              pipeline-load time. Unset, behavior is unchanged; the feature is fully
              opt-in.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              A separate Compose <code>probe</code> profile spins up a one-shot
              container that walks the loaded pipeline, prints every submodule&apos;s
              parameter and buffer size, and reports peak VRAM. That output is the
              input to writing a useful device map.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Unknown submodule names fail fast at startup with a listing of valid
              names, so typos can&apos;t silently route to the wrong device.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              After applying the map, the service logs per-device resident weight
              totals and exposes the active map via <code>GET /info</code>, so the
              client can verify a deployment is using the cards it&apos;s supposed to.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              The split is sequential, not parallel: warm latency stays around 44 s
              (vs. ~108 s cold). The goal was headroom, not throughput. Care also has
              to be taken when routing to the older Turing card, since some upstream
              kernels are Ampere-only; the workflow is to add submodules one at a
              time and rerun a job to confirm.
            </li>
          </ul>

          <h3 style={{ color: '#ebc95b', marginBottom: '1rem' }}>Service highlights</h3>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              FastAPI + an async job queue. Endpoints for submit, status, list,
              cancel, and four result formats (GLB mesh, PLY splat, a minimal zip
              bundle, and a 7z of every intermediate tensor for debugging).
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Three ways to supply a mask: upload a mask PNG, upload an RGBA image
              (alpha used as mask), or pass a text prompt that gets routed to a
              sibling SAM-3 segmentation service for prompt-to-mask conversion.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Single-image build on CUDA 12.1 with PyTorch3D, FlashAttention, and
              Kaolin compiled into a micromamba env; HuggingFace weights bind-mounted
              from the host so rebuilds don&apos;t re-download ~12 GB of checkpoint.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              A small Python CLI (<a
                href="https://github.com/bryantleee/sam3d-local-client"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ebc95b', textDecoration: 'underline' }}
              >
                sam3d-local-client
              </a>
              ) wraps the API for one-line submission, polling, and download from
              any machine on the LAN.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Sam3dLocalService
