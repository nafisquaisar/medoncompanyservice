import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Enforce canonical non-www domain via permanent 301 redirects.
   * This ensures any request arriving at www.medoncompany.in is
   * redirected to the canonical https://medoncompany.in domain.
   *
   * Vercel must also have medoncompany.in set as the primary domain
   * so there is no conflict at the infrastructure level.
   */
  async redirects() {
    return [
      {
        // www → non-www (permanent 301)
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.medoncompany.in",
          },
        ],
        destination: "https://medoncompany.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
