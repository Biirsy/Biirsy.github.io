"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur",
      date: "16 Mei 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/images/ev3.jpeg",
      price: "Rp 72.000",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur",
      date: "16 Mei 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/images/ev3.jpeg",
      price: "Rp 72.000",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur",
      date: "16 Mei 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/images/ev3.jpeg",
      price: "Rp 72.000",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur",
      date: "16 Mei 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/images/ev3.jpeg",
      price: "Rp 72.000",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur",
      date: "16 Mei 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/images/ev3.jpeg",
      price: "Rp 72.000",
    },
  ];

  const quizs = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur",
      image: "/images/quiz.jpg",
      num: 2,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur",
      image: "/images/quiz.jpg",
      num: 2,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur",
      image: "/images/quiz.jpg",
      num: 2,
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur",
      image: "/images/quiz.jpg",
      num: 2,
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur",
      image: "/images/quiz.jpg",
      num: 2,
    },
  ];

  const artikels = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur",
      image: "/images/artikel1.jpg",
      date: "16 Mei 2025",
      num: 2,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur",
      image: "/images/artikel1.jpg",
      date: "16 Mei 2025",
      num: 2,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur",
      image: "/images/artikel1.jpg",
      date: "16 Mei 2025",
      num: 2,
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur",
      image: "/images/artikel1.jpg",
      date: "16 Mei 2025",
      num: 2,
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur",
      image: "/images/artikel1.jpg",
      date: "16 Mei 2025",
      num: 2,
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        sliderRef.current.scrollLeft -= scrollAmount;
      } else {
        sliderRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/images/hero.jpg"
          alt="hero"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0"
        />
      </div>
      {/* Navbar*/}
      <div className="relative z-20 w-full">
        <div
          className={`container mx-auto px-4 lg:px-6 ${
            isMenuOpen ? "bg-black/90" : ""
          }`}
        >
          <nav className="flex items-center justify-between py-6">
            <div className="w-[237px] h-[45px] relative">
              <Link href="/">
                <div className="cursor-pointer h-full w-full">
                  <Image
                    src="/images/logow.png"
                    alt="logow"
                    fill
                    sizes="237px"
                    priority
                    style={{ objectFit: "contain", objectPosition: "left" }}
                  />
                </div>
              </Link>
            </div>
            <div className="hidden md:flex lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
              <div className="flex">
                <Link href="/beranda">
                  <span className="text-[#FED8B1] text-[18px] mx-4 font-medium cursor-pointer transition-all duration-300">
                    Beranda
                  </span>
                </Link>
                <Link href="/event">
                  <span className="text-white text-[18px] mx-4 font-medium cursor-pointer hover:text-[#FED8B1] transition-all duration-300">
                    Event
                  </span>
                </Link>
                <Link href="/kuis">
                  <span className="text-white text-[18px] mx-4 font-medium cursor-pointer hover:text-[#FED8B1] transition-all duration-300">
                    Kuis
                  </span>
                </Link>
                <Link href="/artikel">
                  <span className="text-white text-[18px] mx-4 font-medium cursor-pointer hover:text-[#FED8B1] transition-all duration-300">
                    Artikel
                  </span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link href="/register">
                <button className="bg-[#FED8B1] text-[#6F4E37] px-6 py-2 rounded-[12px] font-semibold">
                  Daftar
                </button>
              </Link>
              <Link href="/login">
                <button className="bg-[#6F4E37] text-white px-6 py-2 rounded-[12px] font-semibold hover:bg-[#5d4230] transition-all duration-300">
                  Masuk
                </button>
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex flex-col items-center justify-center"
              >
                <span
                  className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-white transition-all ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </button>
            </div>
          </nav>
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 absolute w-full left-0 right-0 p-4 transition-all">
              <div className="flex flex-col space-y-3 py-2">
                <Link href="/beranda">
                  <span className="text-[#FED8B1] text-[18px] font-medium block px-4 py-2 border-l-4 border-[#FED8B1]">
                    Beranda
                  </span>
                </Link>
                <Link href="/event">
                  <span className="text-white text-[18px] font-medium block px-4 py-2 hover:text-[#FED8B1] transition-all duration-300">
                    Event
                  </span>
                </Link>
                <Link href="/kuis">
                  <span className="text-white text-[18px] font-medium block px-4 py-2 hover:text-[#FED8B1] transition-all duration-300">
                    Kuis
                  </span>
                </Link>
                <Link href="/artikel">
                  <span className="text-white text-[18px] font-medium block px-4 py-2 hover:text-[#FED8B1] transition-all duration-300">
                    Artikel
                  </span>
                </Link>
                <div className="flex flex-col space-y-3 pt-3">
                  <Link href="/register">
                    <button className="bg-[#FED8B1] text-[#6F4E37] py-2 rounded-[12px] font-semibold w-full">
                      Daftar
                    </button>
                  </Link>
                  <Link href="/login">
                    <button className="bg-[#6F4E37] text-white py-2 rounded-[12px] font-semibold w-full hover:bg-[#5d4230] transition-all duration-300">
                      Masuk
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Hero Section */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 -mt-16"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-4xl lg:text-6xl xl:text-5xl font-semibold mb-2 lg:mb-4 max-w-3xl xl:max-w-4xl">
          <span className="text-white">Beli Tiket Event </span>
          <span className="text-[#ECB176]">Budaya </span>
          <span className="text-white">
            Favoritmu <br />
            Melalui{" "}
          </span>
          <span className="text-[#ECB176]">Ragam Nusantara</span>
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl mb-6 max-w-3xl">
          Jelajahi kekayaan budaya Indonesia dengan Ragam Nusantara, platform
          tiket event tradisional terlengkap.
        </p>
        <button className="bg-[#6F4E37] hover:bg-[#5d4230] text-white px-8 py-3 lg:px-10 lg:py-4 rounded-[12px] font-semibold transition-all duration-300">
          Dapatkan Tiket
        </button>
      </div>

      {/* Event Terbaru*/}
      <div className="relative w-full py-12">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#000000] mb-6 px-2 sm:px-0">
            Masih Hangat Nih!
          </h2>

          <div
            className="relative"
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
          >
            <button
              onClick={() => scroll("left")}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 sm:p-2 rounded-full shadow-md transition-opacity duration-300 ${
                showArrows ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#000000]"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button
              onClick={() => scroll("right")}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 sm:p-2 rounded-full shadow-md transition-opacity duration-300 ${
                showArrows ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#000000]"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div
              ref={sliderRef}
              className="flex overflow-x-auto gap-4 pb-4 snap-x scroll-smooth px-2 sm:px-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {events.map((event) => (
                <div
                  key={event.id}
                  className="min-w-[240px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-[320px] flex-none snap-start"
                  data-aos="fade-up"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="relative h-36 w-full">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="font-medium text-[#000000] text-base sm:text-lg mb-1 line-clamp-2 overflow-hidden text-ellipsis">
                        {event.title}
                      </h3>
                      <p className="text-[#9d9d9d] text-xs sm:text-sm mb-1 sm:mb-2">
                        {event.date}
                      </p>
                      <p className="text-[#9d9d9d] text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 overflow-hidden text-ellipsis">
                        {event.description}
                      </p>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                        <Link
                          href="#"
                          className="text-[#000000] text-xs sm:text-sm"
                        >
                          Mulai Dari
                        </Link>
                        <span className="text-[#000000] font-semibold text-xs sm:text-sm">
                          {event.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Kuis */}
      <div className="relative w-full py-10">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 lg:w-1/2 px-2 sm:px-0 flex flex-col justify-center mb-6 md:mb-0">
              <h2 className="text-2xl md:text-4xl font-semibold text-[#000000] mb-3">
                Selesaikan kuis dan dapatkan promo
              </h2>
              <Link href="/kuis">
                <button className="bg-[#FED8B1] text-[#6F4E37] px-6 py-3 rounded-[10px] text-sm font-semibold w-fit">
                  Lihat semua kuis
                </button>
              </Link>
            </div>

            <div className="md:w-2/3 lg:w-3/5">
              <div
                className="relative"
                onMouseEnter={() => setShowArrows(true)}
                onMouseLeave={() => setShowArrows(false)}
              >
                <button
                  onClick={() => scroll("left")}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 sm:p-2 rounded-full shadow-md transition-opacity duration-300 ${
                    showArrows ? "opacity-100" : "opacity-0"
                  }`}
                  aria-label="Scroll left"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#000000]"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <button
                  onClick={() => scroll("right")}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 sm:p-2 rounded-full shadow-md transition-opacity duration-300 ${
                    showArrows ? "opacity-100" : "opacity-0"
                  }`}
                  aria-label="Scroll right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#000000]"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                <div
                  ref={sliderRef}
                  className="flex overflow-x-auto gap-4 pb-4 snap-x scroll-smooth"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>

                  {quizs.map((quiz) => (
                    <div
                      key={quiz.id}
                      className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[360px] flex-none snap-start"
                      data-aos="fade-left"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                    >
                      <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="relative h-48 sm:h-52 w-full">
                          <Image
                            src={quiz.image}
                            alt={quiz.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-[#000000] text-base sm:text-lg mb-2 line-clamp-2 overflow-hidden text-ellipsis">
                            {quiz.title}
                          </h3>
                          <div className="flex items-center">
                            <span className="text-[#6F4E37] text-xs font-medium">
                              {quiz.num} Pertanyaan
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promo */}
      <div className="relative w-full py-4 sm:py-6" data-aos="fade-up">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
            <div className="h-[260px] sm:h-[2560px] md:h-[260px] lg:h-[260px] relative">
              <Image
                src="/images/promo.jpg"
                alt="promo"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Populer di Daerahmu*/}
      <div className="relative w-full py-12">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#000000] mb-6 px-2 sm:px-0">
            Populer di <span className="text-[#ECB176]">Surabaya</span>
          </h2>

          <div
            className="relative"
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
          >
            <button
              onClick={() => scroll("left")}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 sm:p-2 rounded-full shadow-md transition-opacity duration-300 ${
                showArrows ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#000000]"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button
              onClick={() => scroll("right")}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 sm:p-2 rounded-full shadow-md transition-opacity duration-300 ${
                showArrows ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#000000]"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div
              ref={sliderRef}
              className="flex overflow-x-auto gap-4 pb-4 snap-x scroll-smooth px-2 sm:px-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {events.map((event) => (
                <div
                  key={event.id}
                  className="min-w-[240px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-[320px] flex-none snap-start"
                  data-aos="fade-up"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="relative h-36 w-full">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="font-medium text-[#000000] text-base sm:text-lg mb-1 line-clamp-2 overflow-hidden text-ellipsis">
                        {event.title}
                      </h3>
                      <p className="text-[#9d9d9d] text-xs sm:text-sm mb-1 sm:mb-2">
                        {event.date}
                      </p>
                      <p className="text-[#9d9d9d] text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 overflow-hidden text-ellipsis">
                        {event.description}
                      </p>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                        <Link
                          href="#"
                          className="text-[#000000] text-xs sm:text-sm"
                        >
                          Mulai Dari
                        </Link>
                        <span className="text-[#000000] font-semibold text-xs sm:text-sm">
                          {event.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Khusus untukmu*/}
      <div className="relative w-full py-12">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#000000] mb-6 px-2 sm:px-0">
            Khusus untuk <span className="text-[#ECB176]">Kamu</span>
          </h2>

          <div
            className="relative"
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
          >
            <button
              onClick={() => scroll("left")}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 sm:p-2 rounded-full shadow-md transition-opacity duration-300 ${
                showArrows ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#000000]"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button
              onClick={() => scroll("right")}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 sm:p-2 rounded-full shadow-md transition-opacity duration-300 ${
                showArrows ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#000000]"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div
              ref={sliderRef}
              className="flex overflow-x-auto gap-4 pb-4 snap-x scroll-smooth px-2 sm:px-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {events.map((event) => (
                <div
                  key={event.id}
                  className="min-w-[240px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-[320px] flex-none snap-start"
                  data-aos="fade-up"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="relative h-36 w-full">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="font-medium text-[#000000] text-base sm:text-lg mb-1 line-clamp-2 overflow-hidden text-ellipsis">
                        {event.title}
                      </h3>
                      <p className="text-[#9d9d9d] text-xs sm:text-sm mb-1 sm:mb-2">
                        {event.date}
                      </p>
                      <p className="text-[#9d9d9d] text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 overflow-hidden text-ellipsis">
                        {event.description}
                      </p>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                        <Link
                          href="#"
                          className="text-[#000000] text-xs sm:text-sm"
                        >
                          Mulai Dari
                        </Link>
                        <span className="text-[#000000] font-semibold text-xs sm:text-sm">
                          {event.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Promo */}
      <div className="relative w-full py-4 sm:py-6" data-aos="fade-up">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
            <div className="h-[260px] sm:h-[2560px] md:h-[260px] lg:h-[260px] relative">
              <Image
                src="/images/promo.jpg"
                alt="promo"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Artikel */}
      <div className="relative w-full py-12">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#000000] mb-6 px-2 sm:px-0">
            Coba baca ini yuk!
          </h2>

          <div
            className="relative"
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
          >
            <button
              onClick={() => scroll("left")}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 sm:p-2 rounded-full shadow-md transition-opacity duration-300 ${
                showArrows ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#000000]"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button
              onClick={() => scroll("right")}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z- 10 bg-white p-1 sm:p-2 rounded-full shadow-md transition-opacity duration-300 ${
                showArrows ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#000000]"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div
              ref={sliderRef}
              className="flex overflow-x-auto gap-4 pb-4 snap-x scroll-smooth px-2 sm:px-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {artikels.map((artikel) => (
                <div
                  key={artikel.id}
                  className="min-w-[240px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-[320px] flex-none snap-start"
                  data-aos="fade-up"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="relative h-36 w-full">
                      <Image
                        src={artikel.image}
                        alt={artikel.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="font-medium text-[#000000] text-base sm:text-lg mb-1 line-clamp-2 overflow-hidden text-ellipsis">
                        {artikel.title}
                      </h3>
                      <p className="text-[#9d9d9d] text-xs sm:text-sm mb-1 sm:mb-2">
                        {artikel.date}
                      </p>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                        <span className="text-[#9d9d9d] text-xs">
                          {artikel.num} min read
                        </span>
                        <Link href="#">
                          <button className="bg-[#FED8B1] text-[#6F4E37] px-3 py-2 text-xs rounded-lg font-medium">
                            Baca Artikel
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#6F4E37] py-10 px-4 sm:px-6 lg:px-8 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="mb-6 md:mb-0">
              <div
                className="mb-3 relative"
                style={{ width: "237px", height: "60px" }}
              >
                <Link href="/">
                  <div className="cursor-pointer h-full w-full relative">
                    <Image
                      src="/images/logow.png"
                      alt="logow"
                      width={237}
                      height={60}
                      priority
                      style={{ objectFit: "contain", objectPosition: "left" }}
                    />
                  </div>
                </Link>
              </div>
              <p className="text-sm md:text-base max-w-xs">
                Dapatkan tiket event favoritmu melalui
                <br />
                Ragam Nusantara
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end">
              <nav className="flex space-x-6 mb-6">
                <Link href="/beranda">
                  <span className="text-white hover:text-[#FED8B1] transition-colors">
                    Beranda
                  </span>
                </Link>
                <Link href="/event">
                  <span className="text-white hover:text-[#FED8B1] transition-colors">
                    Event
                  </span>
                </Link>
                <Link href="/kuis">
                  <span className="text-white hover:text-[#FED8B1] transition-colors">
                    Kuis
                  </span>
                </Link>
                <Link href="/artikel">
                  <span className="text-white hover:text-[#FED8B1] transition-colors">
                    Artikel
                  </span>
                </Link>
              </nav>

              <div className="flex space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <div className="bg-[#FED8B1] rounded-full w-8 h-8 flex items-center justify-center text-[#6F4E37]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <div className="bg-[#FED8B1] rounded-full w-8 h-8 flex items-center justify-center text-[#6F4E37]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1 ```javascript
                      .333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter/X"
                >
                  <div className="bg-[#FED8B1] rounded-full w-8 h-8 flex items-center justify-center text-[#6F4E37]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#8D7059] my-6"></div>

          <div className="text-right text-sm">
            ©2025 Ragam Nusantara All right reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
