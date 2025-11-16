import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="gsid:alignment" content="2025-11-16" />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.tailwindcss.com" />

        {/* SEO Meta Tags */}
        <meta name="author" content="Capital for Seva" />
        <meta name="keywords" content="SDG Bond, Social Impact Investment, ESG, Sustainable Development Goals, Eye Health, Impact Investing, ICMA, BlackRock, Sovereign Wealth Fund" />

        {/* Open Graph / Social Media */}
        <meta property="og:site_name" content="Seva Capital" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sevafoundation" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
