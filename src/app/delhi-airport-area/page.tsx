import { redirect } from "next/navigation";

/**
 * /delhi-airport-area → /igi-airport (permanent 308 redirect)
 * This page has been replaced by the approved IGI Airport service area page.
 */
export default function Page() {
  redirect("/igi-airport");
}
