"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "./component/footer";

export default function LandingPage() {
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
            <button className="bg-white text-blue-500 font-semibold px-7 py-2 rounded-full hover:bg-blue-100 ">
             LOGIN
            </button>
          </Link>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-200 text-black overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              MASTER YOUR <br />
              <span className="text-blue-600">JLPT N1 & N2</span>
            </h1>
            <p className="text-lg mb-6 text-black-200">
             Prepare for the JLPT 2025 exam with 50+ practice sets covering vocabulary,
              grammar, and listening —  <span className="font-bold ">for FREE</span>.
            </p>
             <Link href="/login">
            <button className="bg-white text-blue-500 font-semibold px-7 py-2 rounded-full hover:bg-blue-100  ">
             GET STARTED
            </button>
          </Link>
          </div>

          {/* Image */}
          <div className="md:w-1/2 relative">
            <Image
              src="/images/test.jpg"
              alt="Student giving test"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Welcome Message */}
        <div className="absolute bottom-0 bg-black/50 text-white p-4 w-full text-center">
          <p className="text-lg">
            Welcome to Dream Consultancy – Guiding you for Japanese IELTS success!
          </p>
        </div>
      </section>

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
            attendees: "30+",
            cost: "Free",
             backgroundImage:"/images/vocabulary.png"
          },
          {
            title: "Grammar",
            time: "17:30 - 18:00",
            qns: "20",
            attendees: "25+",
            cost: "Free",
             backgroundImage:"/images/grammar.png"
          },
          {
            title: "Listening",
            time: "18:00 - 18:30",
            qns: "20",
            attendees: "20+",
            cost: "Free",
            backgroundImage:"/images/listening.png"
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white border border-blue-300 rounded-xl shadow hover:shadow-lg transition"
          >
            <div
              className="relative h-70  bg-cover bg-center rounded-t-xl"
              style={{ backgroundImage: `url('${item.backgroundImage}')`,
             backgroundPosition: 'center 10%'
             }}
            >
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-sm px-3 py-1 rounded-md shadow">
                {item.title}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title} - Practice Session
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li> <span className="font-medium">⏰ Time:</span> {item.time}</li>
                <li><span className="font-medium">❓ Questions:</span> {item.qns}</li>
                <li><span className="font-medium">👥 Attending:</span>{item.attendees}</li>
                <li><span className="font-medium">💲 Cost:</span> {item.cost}</li>
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* N1 and N2 Sections */}
      <section className="px-6 py-8 grid md:grid-rows-2 gap-6 text-center">
        {[{ title: "N1" }, { title: "N2" }].map((item, index) => (
          <div
            key={index}
            className="bg-white border border-blue-300 rounded-xl shadow hover:shadow-lg transition"
          >
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
