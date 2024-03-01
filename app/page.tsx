import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from 'next/head';
import './css/index.css'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <SpeedInsights />
      </Head>
      <div className="header">
        <h1>DOCUMENTACION DEL API <br />
          PROXIMAMENTE</h1>
      </div>

    </div>
  );
}
