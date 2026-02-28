"use client";

import Link from "next/link";

const galleryImages = [
  "https://ext.same-assets.com/3468861848/3091427760.webp",
  "https://ext.same-assets.com/3468861848/320970107.webp",
  "https://ext.same-assets.com/3468861848/1091551952.webp",
  "https://ext.same-assets.com/3468861848/1218685435.webp",
  "https://ext.same-assets.com/3468861848/2219204979.webp",
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-red text-white">
      {/* Main Footer Content */}
      <div className="grid md:grid-cols-2">
        {/* Left - Title and CTA */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[400px]">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none">
            Grow Today
          </h2>

          <Link
            href="mailto:hello@bornandbredbrand.com"
            className="inline-flex items-center gap-4 bg-white text-brand-red px-8 py-4 rounded-none font-bold text-lg hover:bg-gray-100 transition-colors w-fit mt-8"
          >
            Work with us
          </Link>
        </div>

        {/* Right - Image Gallery */}
        <div className="grid grid-cols-3 grid-rows-2 gap-1">
          {galleryImages.slice(0, 6).map((image, index) => (
            <div
              key={`gallery-${index}-${image.slice(-10)}`}
              className="aspect-square overflow-hidden"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-brand-black text-white py-12 px-8 md:px-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-block">
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2L28 8V24L16 30L4 24V8L16 2Z"
                  fill="#e51923"
                />
                <path
                  d="M12 12L20 16L12 20V12Z"
                  fill="white"
                />
              </svg>
            </Link>
            <p className="text-sm text-white/60 mt-4">
              San Francisco Creative Marketing Agency
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="#services" className="hover:text-white transition-colors">Market Research</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Brand Strategy</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Brand Identity</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Website Design</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Performance Marketing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#results" className="hover:text-white transition-colors">Results</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://behance.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Behance
                </a>
              </li>
            </ul>
            <a
              href="mailto:hello@bornandbredbrand.com"
              className="inline-block mt-4 text-sm text-white hover:text-brand-red transition-colors"
            >
              hello@bornandbredbrand.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © 2024 Born & Bred. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
