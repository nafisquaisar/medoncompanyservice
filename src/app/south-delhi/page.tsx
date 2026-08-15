import { redirect } from "next/navigation";

/**
 * /south-delhi → /vasant-vihar (permanent 308 redirect)
 * This page has been replaced by the approved Vasant Vihar service area page.
 */
export default function Page() {
  redirect("/vasant-vihar");
}
