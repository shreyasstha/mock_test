"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "./component/footer";

const images = ["/images/character.png", "/images/dream_logo.jpeg"];

export default function LandingPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="w-full bg-[#3587CA] shadow px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/dream_logo.jpeg"
            alt="Logo"
            width={70}
            height={70}
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-white">
            Dream Consultancy
          </span>
        </div>
        <Link href="/login">
          <button className="bg-white text-blue-500 px-7 py-2 rounded-full hover:text-blue-900">
            Login
          </button>
        </Link>
      </header>

      {/* Slider */}
      <div className="w-full relative overflow-hidden h-[500px]">
        <Image
          key={current}
          src={images[current]}
          alt={`Slide ${current + 1}`}
          fill
          className="object-cover transition-opacity duration-1000 opacity-100"
        />

        <div className="absolute bottom-0 bg-black/50 text-white p-4 w-full text-center">
          <p className="text-lg">
            Welcome to Dream Consultancy – Guiding you for Japanese IELTS
            success!
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 py-8 text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">About Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Dream Consultancy is dedicated to helping students excel in Japanese
          language proficiency. Our programs focus on vocabulary, grammar, and
          listening – essential components for clearing N1 and N2 phases of the
          Japanese IELTS.
        </p>
      </section>

      {/* Sections: Vocabulary, Grammar, Listening */}
      <section className="px-6 py-10 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Vocabulary",
            time: "17:00 - 17:30",
            qns: "20",
            attendees: "300+",
            cost: "Free",
          },
          {
            title: "Grammar",
            time: "17:30 - 18:00",
            qns: "20",
            attendees: "250+",
            cost: "Free",
          },
          {
            title: "Listening",
            time: "18:00 - 18:30",
            qns: "20",
            attendees: "200+",
            cost: "Free",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white border border-blue-300 rounded-xl shadow hover:shadow-lg transition"
          >
            <div
              className="relative h-40 bg-cover bg-center rounded-t-xl"
              style={{ backgroundImage: `url('/images/character.png')` }}
            >
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-sm px-3 py-1 rounded-md shadow">
                {item.title}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title} - Practice Session
              </h3>
              <p className="text-sm text-gray-600 mb-2">Dream Consultancy</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><span className="font-medium">⏰ Time:</span> {item.time} </li>
                <li> <span className="font-medium">❓ Questions:</span> {item.qns}</li>
                <li><span className="font-medium">👥 Attending:</span>{item.attendees}</li>
                <li><span className="font-medium">💲 Cost:</span> {item.cost}</li>
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* N1 and N2 Sections */}
      <section className="px-6 py-8 grid md:grid-rows-2 gap-6">
        {[{ title: "N1" }, { title: "N2" }].map((item, index) => (
          <div
            key={index}
            className="bg-white border border-blue-300 rounded-xl shadow hover:shadow-lg transition">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title} - Try Sample Questions
              </h3>
            </div>
          </div>
        ))}
      </section>
      
    
      <Footer />
    </div>
  );
}
