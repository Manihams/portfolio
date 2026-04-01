/*import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col sm:flex-row items-center sm:items-start gap-8 p-8">
      
      {/* Profile Photo */
      /*<div className="flex-shrink-0">
        <Image 
          src="/profile.JPG" 
          alt="Profile Picture" 
          width={250} 
          height={250} 
          className="rounded-full"
        />
      </div>
      
      {/* About Me + Buttons */
     /* <div className="max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">Manihams Suraparaju</h2>
        <p className="text-lg text-gray-800 mb-6">
          I’m a Computer Science student passionate about building interactive
          projects, web apps, and learning modern frameworks like Next.js, React, and Tailwind CSS.
          I have experience with Java, C++, HTML, CSS, and JavaScript. I have a strong foundation
          in data structures and algorithms, and I enjoy solving complex problems.
          I’m eager to contribute to innovative projects and collaborate with like-minded individuals.
        </p>

        <div className="flex flex-wrap gap-4">
        <a
            href="https://docs.google.com/document/d/1MpI8dXfAjt3CHbITYu5dSbVrfldlhm_1DKZhpv9dmEU/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Resume
          </a>
          <a
            href="https://manihams.github.io/Unity-Game/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            View Projects
          </a>
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/manihams-suraparaju-87841a213/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            LinkedIn
          </a>
          <a
            href="mailto:manihams123@gmail.com"
            className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Contact Me
          </a> 
        </div>
      </div>
    </section>
  );
}
*/

"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

// ── DATA — edit these and the UI updates everywhere ───────────────────────────

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

type SkillGroup = {
  category: string;
  items: string[];
};

type ContactItem = {
  label: string;
  value: string;
  href: string;
};

const NAV_LINKS = ["work", "about", "contact"];

const PROJECTS: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Responsive personal site with live Unity WebGL game embed, project showcase, and continuous deployment via Vercel + Turbopack.",
    tags: ["Next.js", "React", "Tailwind", "Vercel"],
    links: [
      { label: "Live site ↗", href: "https://portfolio-4qo9.vercel.app/" },
      { label: "GitHub ↗", href: "https://github.com/manihams" },
    ],
  },
  {
    title: "Focus Flow Tracker",
    description:
      "Chrome browser extension for tracking focus sessions with an interactive popup UI. Built, packaged, and deployed locally for Chrome.",
    tags: ["React", "CSS", "Chrome API"],
    links: [
      { label: "GitHub ↗", href: "https://github.com/manihams" },
    ],
  },
  {
    title: "2D Zombie Shooter",
    description:
      "Survival shooter with custom enemy AI, player health system, and real-time scoring. Physics-based movement using Unity's engine.",
    tags: ["Unity", "C#", "Physics"],
    links: [
      { label: "Play (WebGL) ↗", href: "https://manihams.github.io/Unity-Game/" },
    ],
  },
  {
    title: "Hack4Impact ATS",
    description:
      "Contributed to a nonprofit Applicant Tracking System — improved the candidate management dashboard and UI responsiveness in an agile team.",
    tags: ["ReactJS", "JavaScript", "Git"],
    links: [
      { label: "GitHub ↗", href: "https://github.com/manihams" },
    ],
  },
];

const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript", "Java", "C++", "C#", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Tailwind CSS", "Unity"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vercel", "Chrome API"],
  },
];

const CONTACT: ContactItem[] = [
  {
    label: "Email",
    value: "manihams123@gmail.com",
    href: "mailto:manihams123@gmail.com",
  },
  {
    label: "Phone",
    value: "(615) 660-7440",
    href: "tel:6156607440",
  },
  {
    label: "GitHub",
    value: "github.com/manihams",
    href: "https://github.com/manihams",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/manihams-suraparaju-87841a213",
    href: "https://www.linkedin.com/in/manihams-suraparaju-87841a213/",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className={`${styles.root} ${visible ? styles.visible : ""}`}>

      {/* ── NAV ── */}
      <nav className={styles.nav}>
        <span className={styles.logo}>
          MS<span className={styles.accent}>.</span>
        </span>
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link}`} className={styles.navLink}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className={styles.hero} id="about">
        <div className={styles.heroText}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            OPEN TO SUMMER 2026 INTERNSHIPS
          </div>

          <h1 className={styles.name}>
            Manihams
            <br />
            <em className={styles.nameAccent}>Suraparaju.</em>
          </h1>

          <p className={styles.tagline}>
            CS sophomore at UTK building things with{" "}
            <strong>React</strong>, <strong>Unity</strong>, and{" "}
            <strong>Next.js</strong>. I ship web apps, browser extensions, and
            games. Here&apos;s my work.
          </p>

          <div className={styles.ctaRow}>
            <a href="#work" className={styles.btnPrimary}>
              View Projects
            </a>
            <a
              href="https://docs.google.com/document/d/1MpI8dXfAjt3CHbITYu5dSbVrfldlhm_1DKZhpv9dmEU/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGhost}
            >
              Resume
            </a>
            <a
              href="https://github.com/manihams"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGhost}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/manihams-suraparaju-87841a213/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGhost}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Avatar — swap the initials div for an <Image> once you have a photo */}
        <div className={styles.avatarWrap}>
          <div className={styles.avatarFrame}>
            <div className={styles.avatarInner}>MS</div>
          </div>
          <div className={styles.statusChip}>
            <span className={styles.dot} />
            UTK · CS &apos;27
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── PROJECTS ── */}
      <section className={styles.section} id="work">
        <div className={styles.sectionLabel}>FEATURED PROJECTS</div>
        <div className={styles.projectsGrid}>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── SKILLS ── */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>SKILLS</div>
        <div className={styles.skillsGrid}>
          {SKILLS.map((group) => (
            <div key={group.category} className={styles.skillGroup}>
              <h4 className={styles.skillGroupTitle}>
                {group.category.toUpperCase()}
              </h4>
              <div className={styles.pillRow}>
                {group.items.map((item) => (
                  <span key={item} className={styles.pill}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── CONTACT ── */}
      <section className={styles.section} id="contact">
        <div className={styles.sectionLabel}>CONTACT</div>
        <div className={styles.contactGrid}>
          {CONTACT.map((c) => (
            <a key={c.label} href={c.href} className={styles.contactCard}>
              <div className={styles.contactLabel}>{c.label}</div>
              <div className={styles.contactValue}>{c.value}</div>
            </a>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <span className={styles.footerText}>
          Built with{" "}
          <span className={styles.accent}>Next.js + Tailwind</span> · Deployed
          on Vercel
        </span>
        <span className={styles.footerText}>
          © {new Date().getFullYear()}{" "}
          <span className={styles.accent}>Manihams Suraparaju</span>
        </span>
      </footer>
    </main>
  );
}

// ── Project Card Component ────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.card} ${hovered ? styles.cardHovered : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.cardTags}>
        {project.tags.map((tag: string) => (
          <span key={tag} className={styles.cardTag}>
            {tag}
          </span>
        ))}
      </div>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>
      <div className={styles.cardFooter}>
        {project.links.map((link: ProjectLink) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
            onClick={(e) => e.stopPropagation()}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
