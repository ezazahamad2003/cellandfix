"use client";

import { motion } from "framer-motion";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        {/* NAV */}
        <nav className="flex items-center justify-between py-6 text-sm">
          <div className="font-semibold tracking-tight">Cell N Fix</div>
          <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap md:gap-8">
            <a href="#accessories" className="hover:text-muted transition">
              Accessories
            </a>
            <a href="#location" className="hover:text-muted transition">
              Location
            </a>
            <a
              href="tel:+15592309104"
              className="rounded-full border border-border px-3 py-1 text-xs text-muted transition hover:border-text hover:text-text"
            >
              (559) 230-9104
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative overflow-hidden py-28 md:py-40">
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-glow1 to-glow2 blur-3xl"
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="pointer-events-none absolute -bottom-44 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-r from-accent3 to-accent blur-3xl opacity-60"
          />

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative text-4xl font-semibold leading-tight md:text-5xl lg:text-7xl"
          >
            Phones fixed fast.
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
              Accessories that last.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            className="relative mt-6 max-w-xl text-lg text-muted"
          >
            Cell N Fix sells premium phone accessories and provides professional
            smartphone & tablet repair in Redding, California.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.22 }}
            className="relative mt-10"
          >
            <a
              href="#location"
              className="inline-block rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm text-background shadow-glow transition hover:brightness-110"
            >
              Visit Store
            </a>
          </motion.div>
        </section>

        {/* ACCESSORIES */}
        <motion.section
          id="accessories"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
          className="py-24 md:py-32"
        >
          <h2 className="mb-10 text-3xl font-semibold md:mb-16 md:text-4xl">
            Phone Accessories
          </h2>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            {[
              { label: "Phone Cases", image: "/images/image.png" },
              {
                label: "Screen Protectors",
                image: "/images/06UCUqb37ezRSAdYaeNN8ip-12.webp",
              },
              {
                label: "Chargers & Cables",
                image: "/images/istockphoto-1400468355-612x612.jpg",
              },
              {
                label: "Phone & Tablet Repair",
                image: "/images/phone-repair-tools.webp",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group rounded-2xl border border-border bg-white p-5"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-accent2/20 opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>

                <div className="mt-6">
                  <h3 className="text-xl">{item.label}</h3>
                  <p className="mt-2 text-muted">
                    Fast fixes for phones and tablets using quality parts.
                  </p>

                  <div className="mt-5 h-px w-full bg-border" />
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted transition group-hover:text-text">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Shop in-store</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* LOCATION */}
        <motion.section
          id="location"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
          className="py-24 md:py-32"
        >
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
            Visit Cell N Fix
          </h2>

          <p className="text-lg">
            900 Dana Dr K6
            <br />
            Redding, California 96003
          </p>

          <p className="mt-4 text-lg">
            <a href="tel:+15592309104" className="text-text hover:text-muted transition">
              (559) 230-9104
            </a>
          </p>

          <p className="mt-4 max-w-xl text-muted">
            We sell cell phones, phone accessories, and repair smartphones and
            tablets — fast, affordable, and reliable.
          </p>

          <a
            href="https://maps.google.com/?q=900+Dana+Dr+K6+Redding+CA+96003"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-accent3 to-accent px-6 py-3 text-sm text-background shadow-glow transition hover:brightness-110"
          >
            Get Directions
          </a>
        </motion.section>

        {/* FOOTER */}
        <footer className="border-t border-border py-20 text-sm text-muted">
          © {new Date().getFullYear()} Cell N Fix — Redding, CA
        </footer>
      </div>
    </main>
  );
}
