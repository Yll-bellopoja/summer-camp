"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Registration = {
  id: number;
  full_name: string;
  parent_name: string;
  phone: string;
  email: string;
  age: number;
  course_type: string;
  message: string;
};

export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  useEffect(() => {
    async function fetchRegistrations() {
      const { data, error } = await supabase
        .from("registrations")
        .select("*")
        .order("id", { ascending: false });

      if (!error && data) {
        setRegistrations(data);
      }
    }

    fetchRegistrations();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-black mb-8">
        Admin Dashboard
      </h1>

      <div className="grid gap-6">
        {registrations.map((student) => (
          <div
            key={student.id}
            className="rounded-3xl bg-white/10 border border-white/10 p-6"
          >
            <h2 className="text-2xl font-bold mb-3">
              {student.full_name}
            </h2>

            <div className="space-y-2 text-slate-300">
              <p>
                <span className="font-bold text-white">
                  Prindi:
                </span>{" "}
                {student.parent_name}
              </p>

              <p>
                <span className="font-bold text-white">
                  Telefoni:
                </span>{" "}
                {student.phone}
              </p>

              <p>
                <span className="font-bold text-white">
                  Email:
                </span>{" "}
                {student.email}
              </p>

              <p>
                <span className="font-bold text-white">
                  Mosha:
                </span>{" "}
                {student.age}
              </p>

              <p>
                <span className="font-bold text-white">
                  Kursi:
                </span>{" "}
                {student.course_type}
              </p>

              <p>
                <span className="font-bold text-white">
                  Mesazhi:
                </span>{" "}
                {student.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}