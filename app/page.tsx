// Next.js 14 Single Page Resume Website for Nipun Dineshan
// Ready for Vercel deployment
"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white px-6 py-10">
      <section className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">Nipun Dineshan</h1>
          <p className="text-xl mt-2 text-slate-300">
            Senior Software Engineer | Full Stack | Blockchain | Cloud
          </p>
          <p className="mt-2 text-slate-400">UAE · 16+ Years Experience</p>

          <div className="flex gap-4 mt-4 flex-wrap">
            <a href="mailto:nipundineshan@gmail.com" className="underline">
              Email
            </a>
            <a href="#" className="underline">
              LinkedIn
            </a>
            <a href="#" className="underline">
              GitHub
            </a>
          </div>
        </motion.div>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-3">Professional Summary</h2>
          <p className="text-slate-300 leading-relaxed">
            Senior Software Engineer with 16 years of experience in Java,
            Microservices, and Full-Stack Development, specializing in
            enterprise software, healthcare imaging systems, and blockchain
            wallet solutions. Proven track record in leading cross-functional
            teams, designing scalable architectures, and delivering
            high-performance applications.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-4">Core Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-slate-300">
            {[
              "Java",
              "Spring Boot",
              "NestJS",
              "Angular",
              "TypeScript",
              "Microservices",
              "Docker",
              "PostgreSQL",
              "MongoDB",
              "Blockchain",
              "DevOps",
              "Cloud",
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
                  Implemented real-time wallet insights with tagging and
                  filtering.
                </li>
                <li>
                  Built full-stack solution using Angular, NestJS, PostgreSQL,
                  Docker.
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold">
                Quest Global (NeST) – Senior Lead Engineer
              </h3>
              <p className="text-slate-400">Jul 2014 – Sep 2024 · India</p>
              <ul className="list-disc ml-5 mt-3 text-slate-300 space-y-2">
                <li>
                  Led team of 8 engineers building GE Healthcare medical imaging
                  systems.
                </li>
                <li>
                  Architected X-Ray Acquisition System improving speed by 25%.
                </li>
                <li>
                  Introduced Agile best practices increasing sprint success to
                  95%.
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold">
                Tata Elxsi – Software Engineer
              </h3>
              <p className="text-slate-400">Feb 2010 – Jun 2014 · India</p>
              <ul className="list-disc ml-5 mt-3 text-slate-300 space-y-2">
                <li>
                  Built enterprise messaging systems and reusable Angular
                  components.
                </li>
                <li>
                  Delivered high quality production modules under strict
                  timelines.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-4">Major Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Wallet Management System – Blockchain Fintech",
              "X-Ray Acquisition System – GE Healthcare",
              "Common Service Desktop – Ultrasound Devices",
              "Jabber Messaging App – Enterprise Chat",
            ].map((p) => (
              <div key={p} className="bg-slate-900 p-6 rounded-2xl">
                {p}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-3">
            Education & Achievements
          </h2>
          <p className="text-slate-300">
            Diploma in Electronics – NTTF · BCA – In Progress
          </p>
          <ul className="list-disc ml-5 mt-3 text-slate-300 space-y-2">
            <li>16 years in enterprise & product engineering</li>
            <li>Architected multi-chain blockchain wallet platform</li>
            <li>Led global engineering teams</li>
          </ul>
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
