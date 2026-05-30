"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems } from "./NavItems";
import ServicesDropdown from "./ServicesDropdown";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const MOBILE_SERVICES = [
  { label: "AC Repair Service in Delhi", slug: "ac-repair-service-delhi" },
  { label: "AC Installation in Delhi", slug: "ac-installation-delhi" },
  { label: "AC Gas Refilling in Delhi", slug: "ac-gas-refilling-delhi" },
  { label: "Refrigerator Repair in Delhi", slug: "refrigerator-repair-delhi" },
  { label: "Electrical Services in Delhi", slug: "electrical-services-delhi" },
  { label: "Geyser Repair in Delhi", slug: "geyser-repair-delhi" },
  { label: "Microwave Repair in Delhi", slug: "microwave-repair-delhi" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [showAppModal, setShowAppModal] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const pathname = usePathname() || "";
  const router = useRouter();

  /* ---------- SCROLL DETECTION ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- ACTIVE SECTION DETECTION ---------- */
  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      if (typeof item.hash !== "string") return;

      const id = item.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  /* ---------- SMART SCROLL ---------- */
  const handleNavClick = (hash?: string) => {
    if (!hash) return;

    setActiveHash(hash);
    const id = hash.replace("#", "");

    const scrollToSection = () => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth" });
    };

    if (pathname !== "/") {
      router.push("/");
      setTimeout(scrollToSection, 150);
    } else {
      scrollToSection();
    }

    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-500
        ${scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-gray-100"
            : "bg-white/95 backdrop-blur-sm"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between" aria-label="Main navigation">

          {/* LOGO */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick("#home")}
            className="text-xl sm:text-2xl font-bold text-primary tracking-tight"
          >
            Medon Company
          </motion.button>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item, i) => {
              const isActive = item.href
                ? pathname.startsWith(item.href)
                : activeHash === item.hash;

              /* Render ServicesDropdown for the "Services" item */
              if (item.label === "Services") {
                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <ServicesDropdown />
                  </motion.li>
                );
              }

              /* Direct link items (e.g. Blog) */
              if (item.href) {
                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-300
                        ${isActive
                          ? "text-primary"
                          : "text-gray-500 hover:text-primary"
                        }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] w-5 rounded-full bg-primary" />
                      )}
                    </Link>
                  </motion.li>
                );
              }

              return (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <motion.button
                    whileHover={{ y: -1 }}
                    onClick={() => handleNavClick(item.hash)}
                    className={`relative px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-300
                      ${isActive
                        ? "text-primary"
                        : "text-gray-500 hover:text-primary"
                      }`}
                  >
                    {item.label}

                    <motion.span
                      layout
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0.5 }}
                      className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] w-5 rounded-full bg-primary"
                    />
                  </motion.button>
                </motion.li>
              );
            })}
          </ul>

          {/* DESKTOP CTA */}
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAppModal(true)}
            className="hidden lg:inline-flex bg-primary text-white px-6 py-2.5 text-sm
                       rounded-full shadow-md shadow-primary/20 hover:bg-primary-dark
                       hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-medium"
          >
            Download App
          </motion.button>

          {/* MOBILE TOGGLE */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="lg:hidden text-gray-600 p-2 rounded-xl hover:bg-gray-50 transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-5 space-y-1" role="navigation" aria-label="Mobile navigation">
                {navItems.map((item) => {
                  const isActive = activeHash === item.hash;

                  /* Services accordion in mobile */
                  if (item.label === "Services") {
                    return (
                      <div key={item.label}>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className={`flex w-full items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
                            ${isActive
                              ? "text-primary bg-primary-light/60"
                              : "text-gray-600 hover:text-primary hover:bg-gray-50"
                            }`}
                        >
                          Services
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-1 space-y-0.5">
                                {MOBILE_SERVICES.map((svc) => (
                                  <Link
                                    key={svc.slug}
                                    href={`/${svc.slug}`}
                                    onClick={() => setOpen(false)}
                                    className="block px-4 py-2.5 text-sm text-gray-500 hover:text-primary
                                               hover:bg-primary-light/40 rounded-lg transition-colors duration-200"
                                  >
                                    {svc.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  /* Direct link items (e.g. Blog) in mobile */
                  if (item.href) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
                          ${pathname.startsWith(item.href)
                            ? "text-primary bg-primary-light/60"
                            : "text-gray-600 hover:text-primary hover:bg-gray-50"
                          }`}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.hash)}
                      className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
                        ${isActive
                          ? "text-primary bg-primary-light/60"
                          : "text-gray-600 hover:text-primary hover:bg-gray-50"
                        }`}
                    >
                      {item.label}
                    </button>
                  );
                })}

                <div className="pt-3">
                  <button
                    onClick={() => {
                      setShowAppModal(true);
                      setOpen(false);
                    }}
                    className="block w-full bg-primary text-white text-center
                               px-4 py-3 rounded-full shadow-md shadow-primary/20 font-medium
                               hover:bg-primary-dark transition-all duration-300"
                  >
                    Download App
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* MODAL */}
      <AnimatePresence>
        {showAppModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-md w-full rounded-3xl bg-white p-8 text-center shadow-2xl"
            >
              <div className="mx-auto mb-5 h-14 w-14 rounded-2xl bg-primary-light flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>

              <h3 className="text-2xl font-bold text-primary">
                App Coming Soon
              </h3>

              <p className="mt-3 text-gray-500 leading-relaxed">
                Our mobile app will be available soon on the Play Store.
                <br />
                Thank you for your patience.
              </p>

              <button
                onClick={() => setShowAppModal(false)}
                className="mt-6 w-full rounded-full bg-primary px-6 py-3.5
                           text-white font-semibold shadow-md shadow-primary/20
                           hover:bg-primary-dark hover:shadow-lg transition-all duration-300"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
