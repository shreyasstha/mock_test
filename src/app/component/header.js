import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md px-4 sm:px-8 py-4 flex justify-between items-center">
      {/* Logo on the left */}
      <div className="flex items-center space-x-2">
        <Image
          src="/images/dream_logo.jpeg"
          alt="Dream Consultancy Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-lg font-bold text-blue-800">Dream Consultancy</span>
      </div>

      {/* Login Button on the right */}
      <div>
        <Link href="/login">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
}
