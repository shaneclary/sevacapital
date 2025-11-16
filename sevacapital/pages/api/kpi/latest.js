/**
 * KPI Data API Endpoint
 * Returns live covenant monitoring data for the $7B SDG Bond
 *
 * In production, this would connect to:
 * - Google Sheets API
 * - Supabase/PostgreSQL
 * - Real-time data feeds
 */

export default async function handler(req, res) {
  // CORS headers for institutional investor portals
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Simulated live data - Replace with actual data source
    const kpiData = {
      timestamp: new Date().toISOString(),
      bond: {
        notional: 7000000000, // $7B
        allocated: 4890000000, // $4.89B (69.86%)
        allocationPercent: 69.86,
        couponRate: 5.38,
        greenium: 8, // basis points
        monthsRemaining: 18,
        maturityDate: '2036-Q2'
      },
      impact: {
        surgeries: {
          current: 698600,
          target: 1000000,
          percent: 69.86
        },
        wageGain: {
          current: 2514960000, // $2.51B
          target: 3600000000, // $3.6B
          percent: 69.86,
          formatted: '$2.51B'
        },
        dalys: {
          current: 2235520, // 2.24M
          target: 3200000, // 3.2M
          percent: 69.86,
          formatted: '2.24M'
        },
        femalePercent: 52,
        visionCenters: {
          current: 130,
          target: 200,
          percent: 65
        },
        ghgAvoided: 7800 // tCO2e
      },
      compliance: {
        allocationTarget: 95,
        currentAllocation: 69.86,
        deadline: '2027-11-16',
        isCompliant: true,
        riskLevel: 'low',
        nextReportDue: '2026-02-15'
      },
      metadata: {
        dataSource: 'Seva Foundation Partner Network',
        lastAudit: '2025-10-15',
        auditor: 'PwC',
        nextAudit: '2026-10-15',
        reportingFrequency: 'Annual',
        isin: 'SEVA-SDG-26'
      }
    };

    // Calculate data freshness
    const dataAge = Math.floor((Date.now() - new Date(kpiData.timestamp).getTime()) / (1000 * 60 * 60 * 24));

    res.status(200).json({
      success: true,
      data: kpiData,
      meta: {
        dataAge: dataAge,
        isStale: dataAge > 35,
        generatedAt: new Date().toISOString(),
        version: '1.0.0'
      }
    });

  } catch (error) {
    console.error('KPI API Error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch KPI data',
      message: error.message
    });
  }
}
