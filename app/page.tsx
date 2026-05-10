"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  CalendarDays,
  MapPin,
  Sparkles,
  Code2,
  Megaphone,
  BrainCircuit,
  Clock,
  Phone,
  Mail,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

export default function DigitalSummerCampWebsite() {
  const [form, setForm] = useState({
    fullName: "",
    parentName: "",
    phone: "",
    email: "",
    age: "",
    courseType: "Standard Camp",
    schedule: "10:00 - 11:30",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const SUPABASE_URL = "https://zvcripwxrxqbrifwejrk.supabase.co";
    const SUPABASE_KEY = "sb_publishable_oJWFf-C1IiFLVwQLjTktcg_g-gCYsf1";

    const response = await fetch(`${SUPABASE_URL}/rest/v1/registrations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        full_name: form.fullName,
        parent_name: form.parentName,
        phone: form.phone,
        email: form.email,
        age: Number(form.age),
        course_type: form.courseType,
        message: form.message,
      }),
    });

    if (response.ok) {
      setStatus(
        "Regjistrimi u dërgua me sukses. Do t’ju kontaktojmë së shpejti!"
      );

      setForm({
        fullName: "",
        parentName: "",
        phone: "",
        email: "",
        age: "",
        courseType: "Standard Camp",
        schedule: "10:00 - 11:30",
        message: "",
      });
    } else {
      setStatus("Ka ndodhur një gabim. Regjistrimi nuk u ruajt.");
    }
  }

  const courses = [
    {
      icon: <Megaphone className="w-7 h-7" />,
      title: "Digital Marketing",
      text: "Mëso krijimin e postimeve, strategjitë për Instagram, TikTok dhe Facebook.",
    },
    {
      icon: <BrainCircuit className="w-7 h-7" />,
      title: "AI në Marketing",
      text: "Përdor ChatGPT dhe AI tools për ide kreative dhe marketing modern.",
    },
    {
      icon: <Code2 className="w-7 h-7" />,
      title: "Programming Basics",
      text: "Hyrje në HTML, CSS dhe JavaScript për krijimin e website-ve.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            Digital Summer Camp
          </div>

          <a
            href="#register"
            className="px-5 py-2 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition"
          >
            Regjistrohu
          </a>
        </div>
      </nav>

      <section className="relative pt-36 pb-24 px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-cyan-200 mb-6">
              <Sparkles className="w-4 h-4" />
              Kamp veror për të rinj 12–18 vjeç
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Mëso AI, Marketing Digjital dhe Programim këtë verë
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl leading-8">
              Kurs praktik online dhe fizik për fëmijë dhe të rinj që duan të
              mësojnë aftësi moderne digjitale.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#register"
                className="px-8 py-4 rounded-2xl bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition"
              >
                Apliko tani
              </a>

              <a
                href="#courses"
                className="px-8 py-4 rounded-2xl bg-white/10 border border-white/10 font-bold hover:bg-white/15 transition"
              >
                Shiko programin
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-white/10 border border-white/10 p-8"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-slate-900 p-5 border border-white/10">
                <BrainCircuit className="w-10 h-10 text-cyan-300" />
                <h3 className="font-bold mt-5 text-xl">AI Tools</h3>
              </div>

              <div className="rounded-3xl bg-slate-900 p-5 border border-white/10">
                <Megaphone className="w-10 h-10 text-violet-300" />
                <h3 className="font-bold mt-5 text-xl">Marketing</h3>
              </div>

              <div className="rounded-3xl bg-slate-900 p-5 border border-white/10">
                <Code2 className="w-10 h-10 text-orange-300" />
                <h3 className="font-bold mt-5 text-xl">Coding</h3>
              </div>

              <div className="rounded-3xl bg-cyan-400 text-slate-950 p-5">
                <UserCheck className="w-10 h-10" />
                <h3 className="font-black mt-5 text-xl">Free Trial</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-black mb-5">Profili im personal</h2>
            <p className="text-slate-300 leading-8 text-lg">
              Ky kurs është krijuar për të rinjtë që duan të mësojnë AI,
              marketing digjital dhe programim në mënyrë praktike.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white/10 border border-white/10 p-8">
            <h3 className="text-2xl font-bold mb-6">
              Pse ta zgjedhin këtë kurs?
            </h3>

            <div className="space-y-4">
              {[
                "Mësim praktik",
                "Përdorim i AI",
                "Projekt real",
                "Aftësi për të ardhmen",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-300" />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-10 text-center">
            Çka mësohet në kurs?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.title}
                className="rounded-[2rem] bg-white/10 border border-white/10 p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center mb-6">
                  {course.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                <p className="text-slate-300 leading-7">{course.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-10 text-center">Orari</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Grupi 1", "10:00 - 11:30"],
              ["Grupi 2", "13:00 - 14:30"],
              ["Grupi 3", "17:00 - 18:30"],
            ].map(([group, time]) => (
              <div
                key={group}
                className="rounded-[2rem] bg-slate-950 border border-white/10 p-8"
              >
                <Clock className="w-10 h-10 text-cyan-300 mb-5" />
                <h3 className="text-2xl font-bold">{group}</h3>
                <p className="text-3xl font-black mt-4 text-cyan-300">
                  {time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-[2rem] bg-white/10 border border-white/10 p-8">
            <MapPin className="w-9 h-9 text-cyan-300 mb-4" />
            <h3 className="text-xl font-bold">Lokacioni</h3>
            <p className="text-slate-300 mt-2">Prishtinë, Kosovë</p>
          </div>

          <div className="rounded-[2rem] bg-white/10 border border-white/10 p-8">
            <Phone className="w-9 h-9 text-cyan-300 mb-4" />
            <h3 className="text-xl font-bold">Telefoni</h3>
            <p className="text-slate-300 mt-2">+383 44 000 000</p>
          </div>

          <div className="rounded-[2rem] bg-white/10 border border-white/10 p-8">
            <Mail className="w-9 h-9 text-cyan-300 mb-4" />
            <h3 className="text-xl font-bold">Email</h3>
            <p className="text-slate-300 mt-2">info@digitalsummercamp.com</p>
          </div>
        </div>
      </section>

      <section id="register" className="py-20 px-5 bg-slate-900/50">
        <div className="max-w-5xl mx-auto rounded-[2rem] bg-white/10 border border-white/10 p-10">
          <div className="text-center mb-10">
            <CalendarDays className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
            <h2 className="text-4xl font-black">Kërkesë për regjistrim</h2>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              placeholder="Emri i nxënësit"
              className="input"
            />

            <input
              name="parentName"
              value={form.parentName}
              onChange={handleChange}
              required
              placeholder="Emri i prindit"
              className="input"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Numri i telefonit"
              className="input"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="input"
            />

            <input
              name="age"
              value={form.age}
              onChange={handleChange}
              required
              type="number"
              placeholder="Mosha"
              className="input"
            />

            <select
              name="courseType"
              value={form.courseType}
              onChange={handleChange}
              className="input"
            >
              <option>Basic Camp</option>
              <option>Standard Camp</option>
              <option>Online Camp</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Mesazh shtesë"
              className="input md:col-span-2 h-32 resize-none"
            />

            <button
              type="submit"
              className="md:col-span-2 py-4 rounded-2xl bg-cyan-400 text-slate-950 font-black hover:bg-cyan-300 transition"
            >
              Dërgo regjistrimin
            </button>
          </form>

          {status && (
            <p className="mt-6 text-center text-cyan-300 font-semibold">
              {status}
            </p>
          )}
        </div>
      </section>

      <footer className="py-8 px-5 border-t border-white/10 text-center text-slate-400">
        © 2026 Digital Summer Camp
      </footer>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 1rem;
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: white;
          padding: 1rem;
          outline: none;
        }

        .input:focus {
          border-color: rgb(34, 211, 238);
        }

        .input::placeholder {
          color: rgb(148, 163, 184);
        }

        select.input option {
          color: black;
        }
      `}</style>
    </div>
  );
}