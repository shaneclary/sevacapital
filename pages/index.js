import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [kpiData, setKpiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch live KPI data
    fetch('/api/kpi/latest')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setKpiData(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load KPI data:', err);
        setLoading(false);
      });
  }, []);

  const formatCurrency = (value) => {
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(1)}B`;
    }
    return `$${(value / 1000000).toFixed(1)}M`;
  };

  return (
    <>
      <Head>
        <title>Seva Capital - SDG Bond Concept | Alpha Platform</title>
        <meta name="description" content="Alpha platform demonstrating SDG-aligned social bond structure for global eye health infrastructure with 36:1 social ROI projection" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Seva Capital - SDG Bond Concept Platform" />
        <meta property="og:description" content="Concept platform for SDG-aligned social bond supporting Seva Foundation's global eye health programs" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-4000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center space-y-8 animate-fade-in">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-400 font-semibold">
                  Alpha Platform • Concept Demo • Not Financial Advice
                </p>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                  Capital for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-green-500">Seva</span>
                </h1>
              </div>

              <p className="text-3xl md:text-4xl font-bold text-gray-100 max-w-4xl mx-auto">
                SDG-Aligned Social Bond Concept
              </p>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Demonstrating how structured finance could unlock <span className="text-emerald-400 font-bold">$252 Billion</span> in human productivity through eye-care infrastructure with projected <span className="text-blue-400 font-bold">36:1 social ROI</span>
              </p>

              {/* Alpha Disclaimer */}
              <div className="max-w-3xl mx-auto p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                <p className="text-sm text-amber-200">
                  <strong>⚠️ Alpha Platform:</strong> This is a concept demonstration. No securities are currently offered. Data is simulated for illustrative purposes.
                </p>
              </div>

              {/* Live KPI Stats */}
              {kpiData && !loading && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto animate-slide-up">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                    <div className="text-5xl font-black text-blue-400 mb-2">
                      {formatCurrency(kpiData.bond.notional)}
                    </div>
                    <div className="text-sm text-gray-300 uppercase tracking-wider">Bond Notional</div>
                    <div className="mt-4 text-xs text-gray-400">
                      {kpiData.bond.allocationPercent}% Allocated • {kpiData.bond.monthsRemaining} months remaining
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105">
                    <div className="text-5xl font-black text-emerald-400 mb-2">36:1</div>
                    <div className="text-sm text-gray-300 uppercase tracking-wider">Social ROI</div>
                    <div className="mt-4 text-xs text-gray-400">
                      Proven impact across 50+ years • {kpiData.impact.surgeries.current.toLocaleString()} surgeries funded
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                    <div className="text-5xl font-black text-purple-400 mb-2">
                      {formatCurrency(kpiData.impact.wageGain.current * 36)}
                    </div>
                    <div className="text-sm text-gray-300 uppercase tracking-wider">Impact Unlocked</div>
                    <div className="mt-4 text-xs text-gray-400">
                      {kpiData.impact.dalys.formatted} DALYs Averted • SDG 3, 8, 5 Aligned
                    </div>
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
                <a
                  href="/pitch.html"
                  className="group px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full shadow-2xl hover:shadow-emerald-500/50 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <span className="flex items-center gap-3">
                    View Concept Pitch
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>

                <a
                  href="/investor_portal.html"
                  className="px-10 py-5 text-lg font-bold text-white border-2 border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/60"
                >
                  Demo Portal
                </a>
              </div>

              {/* Framework References */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-4">Framework References</p>
                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
                  <div className="px-6 py-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-xs font-semibold tracking-wider">ICMA Principles</span>
                  </div>
                  <div className="px-6 py-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-xs font-semibold tracking-wider">SDG Aligned</span>
                  </div>
                  <div className="px-6 py-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-xs font-semibold tracking-wider">Impact Thesis</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
                <a href="/keynote/present.html" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
                  Strategy Overview
                </a>
                <span className="text-gray-600">•</span>
                <a href="/icma.html" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
                  Bond Framework
                </a>
                <span className="text-gray-600">•</span>
                <a href="/gisd-compliance.html" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
                  SDG Mapping
                </a>
                <span className="text-gray-600">•</span>
                <a href="/seva.html" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
                  Impact Dossier
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-white mb-4">Platform Information</h3>
                <p className="text-gray-300 mb-4">
                  Concept platform demonstrating structured finance approach for Seva Foundation's global eye health programs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>investor-relations@sevacapital.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Status: Alpha Testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}
