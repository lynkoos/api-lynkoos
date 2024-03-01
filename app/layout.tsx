import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from 'next/head';

export const metadata = {
  title: 'api lynkoos',
  description: 'Esta es la página principal del API de Lynkoos. Aquí encontrarás información sobre los endpoints disponibles y cómo utilizarlos para interactuar con la plataforma Lynkoos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/img/banner-red.png" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/img/banner-red.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="/img/banner-red.png" />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content="/img/banner-red.png" />
        <SpeedInsights />
      </Head>
      <body>{children}</body>
    </>
  );
}
