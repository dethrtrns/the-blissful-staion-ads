import React from 'react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-[140px] md:pt-[180px] pb-[15vw] container mx-auto px-6 md:px-8 max-w-[1200px]">
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(155,107,196,0.05)_0%,rgba(252,250,255,0)_70%)] -z-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 text-center md:text-left">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] leading-tight mb-4 md:mb-6 font-cormorant font-semibold bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">
            Rekindle Your <br className="hidden sm:block" /> Inner Peace
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-light)] mb-8 md:mb-10">
            At The Blissful Station, we provide expert, ethical, and evidence-based care in a confidential, secure environment. Take the first step towards a better tomorrow.
          </p>
          <div>
            <a href="#contact" className="inline-block bg-[var(--primary)] text-white font-semibold py-3 px-7 rounded-full transition-all duration-400 hover:bg-[var(--primary-light)] hover:-translate-y-1 shadow-[0_4px_15px_rgba(33,77,62,0.2)] hover:shadow-[0_6px_20px_rgba(33,77,62,0.3)]">
              Get Started Today
            </a>
          </div>
        </div>
        <div className="relative mt-8 md:mt-0">
          <img
            src="/assets/therapy_room.webp"
            alt="The Blissful Station Therapy Room"
            className="w-full rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-[float_6s_ease-in-out_infinite]"
          />
          <div className="hidden md:flex absolute bottom-0 -left-10 bg-[rgba(255,255,255,0.8)] backdrop-blur-[15px] p-6 rounded-[20px] border border-[rgba(33,77,62,0.1)] shadow-[0_10px_40px_rgba(33,77,62,0.08)] items-center gap-5 z-10">
            <div className="w-11 h-11 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-xl">
              <i className="fas fa-leaf"></i>
            </div>
            <div>
              <strong className="block text-[var(--primary)] font-cormorant text-lg font-semibold">Expert Care</strong>
              <p className="text-[var(--text-light)] text-sm">Verified Psychologist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
