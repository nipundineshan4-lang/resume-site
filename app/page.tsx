// Next.js 14 Single Page Resume Website for Nipun Dineshan
// Based on Old Format Resume - Optimized for Recruiters

"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white px-6 py-10">
      <section className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">Nipun Dineshan</h1>
          <p className="text-xl mt-2 text-slate-300">
            Senior Software Engineer | Java | Full Stack | Blockchain
          </p>
          <p className="mt-2 text-slate-400">UAE · 16+ Years Experience</p>

          <div className="flex gap-4 mt-4 flex-wrap text-slate-300">
            <a href="mailto:nipundineshan@gmail.com" className="underline">
              📧 nipundineshan@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/nipun-dineshan-42719078"
              target="_blank"
              className="underline"
            >
              🔗 LinkedIn
            </a>
            <a href="tel:+971501234567" className="underline">
              📞 +971 50 123 4567
            </a>
          </div>
        </motion.div>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-4">
            Summary of Achievements
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-slate-300">
            <li>
              16 years of experience in analysis, design and development of
              software applications.
            </li>
            <li>Strong proficiency in Core Java, OOAD, and design patterns.</li>
            <li>
              Hands-on experience with multi-threaded, enterprise-grade systems.
            </li>
            <li>
              Strong UI development skills using Angular, Java Swing, and HTML5.
            </li>
            <li>
              Experience in Agile SCRUM methodologies, system testing, and CI/CD
              processes.
            </li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-slate-300">
            {[
              "Java",
              "Spring",
              "NestJS",
              "Angular",
              "NodeJS",
              "TypeScript",
              "PostgreSQL",
              "MongoDB",
              "Docker",
              "Microservices",
              "REST APIs",
              "Git",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-slate-800 rounded-xl p-3 text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-6">
            Professional Experience
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold">
                Lexim Gold – Software Developer
              </h3>
              <p className="text-slate-400">Oct 2024 – Present · UAE</p>
              <ul className="list-disc ml-5 mt-3 text-slate-300 space-y-2">
                <li>
                  Designed and developed multi-chain blockchain wallet
                  management system.
                </li>
                <li>
                  Implemented real-time wallet insights, tagging and filtering.
                </li>
                <li>
                  Built full-stack platform using Angular, NestJS, PostgreSQL,
                  Docker.
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold">
                Quest Global – Senior Lead Engineer
              </h3>
              <p className="text-slate-400">Jul 2014 – Sep 2024 · India</p>
              <ul className="list-disc ml-5 mt-3 text-slate-300 space-y-2">
                <li>
                  Led team of 8 engineers delivering medical imaging systems for
                  GE Healthcare.
                </li>
                <li>
                  Architected X-Ray acquisition platform improving speed by 25%.
                </li>
                <li>Mentored engineers and implemented Agile practices.</li>
              </ul>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold">
                Tata Elxsi – Software Engineer
              </h3>
              <p className="text-slate-400">Feb 2010 – Jun 2014 · India</p>
              <ul className="list-disc ml-5 mt-3 text-slate-300 space-y-2">
                <li>Built enterprise messaging and collaboration platforms.</li>
                <li>Developed reusable Angular UI components.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-4">Major Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-6 rounded-2xl">
              Wallet Management System – Blockchain Fintech
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl">
              X-Ray Acquisition System – GE Healthcare
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl">
              Common Service Desktop – Ultrasound Devices
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl">
              Jabber Messaging App – Enterprise Collaboration
            </div>
          </div>
        </section>

        <div className="mt-16 text-center">
          <a
            href="/resume.pdf"
            className="inline-block bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Download Resume (PDF)
          </a>
        </div>
      </section>
    </main>
  );
}
