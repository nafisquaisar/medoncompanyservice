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
      /* ── www → non-www (permanent 301) ────────────────── */
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.medoncompany.in" }],
        destination: "https://medoncompany.in/:path*",
        permanent: true,
      },

      /* ── Service pages: Delhi → Mahipalpur (301) ───────── */
      {
        source: "/ac-repair-service-delhi",
        destination: "/ac-repair-service-mahipalpur",
        permanent: true,
      },
      {
        source: "/ac-installation-delhi",
        destination: "/ac-installation-mahipalpur",
        permanent: true,
      },
      {
        source: "/ac-gas-refilling-delhi",
        destination: "/ac-gas-refilling-mahipalpur",
        permanent: true,
      },
      {
        source: "/refrigerator-repair-delhi",
        destination: "/refrigerator-repair-mahipalpur",
        permanent: true,
      },
      {
        source: "/washing-machine-repair-delhi",
        destination: "/washing-machine-repair-mahipalpur",
        permanent: true,
      },
      {
        source: "/electrical-services-delhi",
        destination: "/electrical-services-mahipalpur",
        permanent: true,
      },
      {
        source: "/geyser-repair-delhi",
        destination: "/geyser-repair-mahipalpur",
        permanent: true,
      },
      {
        source: "/microwave-repair-delhi",
        destination: "/microwave-repair-mahipalpur",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
