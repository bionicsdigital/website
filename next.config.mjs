/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/industries/chemical-industry',
        destination: '/industries/chemical-industry-wastewater-treatment',
        permanent: true,
      },
      {
        source: '/industries/food-processing-industry',
        destination: '/industries/food-processing-industry-wastewater-treatment',
        permanent: true,
      },
      {
        source: '/industries/dairy-industry',
        destination: '/industries/dairy-processing-industry-wastewater-treatment',
        permanent: true,
      },
      {
        source: '/industries/paper-and-pulp-mill',
        destination: '/industries/paper-and-pulp-industry-wastewater-treatment',
        permanent: true,
      },
      {
        source: '/industries/pharma-industry',
        destination: '/industries/pharmaceutical-industry-wastewater-treatment',
        permanent: true,
      },
      {
        source: '/industries/domestic-and-commercial-stp',
        destination: '/industries/sewage-treatment-plant-stp',
        permanent: true,
      },
      {
        source: '/industries/stp',
        destination: '/industries/sewage-treatment-plant-stp',
        permanent: true,
      },
      {
        source: '/industries/sewage-treatment-plant-bioculture',
        destination: '/industries/sewage-treatment-plant-stp',
        permanent: true,
      },
      {
        source: '/industries/sugar-industry',
        destination: '/industries/sugar-industry-wastewater-treatment',
        permanent: true,
      },
      {
        source: '/industries/distillery-industry',
        destination: '/industries/distillery-industry-wastewater-treatment',
        permanent: true,
      },
      {
        source: '/industries/textile-processing-industry',
        destination: '/industries/textile-industry-wastewater-treatment',
        permanent: true,
      },
      {
        source: '/industries/dye-processing-industry',
        destination: '/industries/dye-processing-industry-wastewater-treatment',
        permanent: true,
      },
      {
        source: '/industries/municipal',
        destination: '/industries/municipal-solid-waste-composting',
        permanent: true,
      },
      {
        source: '/industries/etp',
        destination: '/industries/effluent-treatment-plant-etp',
        permanent: true,
      },
      {
        source: '/industries/industrial-etp',
        destination: '/industries/effluent-treatment-plant-etp',
        permanent: true,
      },
    ]
  },
  async headers() {
    const contentSecurityPolicy = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "media-src 'self' blob:",
      "connect-src 'self'",
      "worker-src 'self' blob:",
      "manifest-src 'self'",
    ].join('; ')
    const securityHeaders = [
      { key: 'Content-Security-Policy', value: contentSecurityPolicy },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
      ...(process.env.NODE_ENV === 'production' ? [{ key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' }] : []),
    ]
    return [
      { source: '/(.*)', headers: securityHeaders },
      { source: '/api/:path*', headers: [{ key: 'Cache-Control', value: 'no-store, max-age=0' }] },
    ]
  },
}

export default nextConfig
