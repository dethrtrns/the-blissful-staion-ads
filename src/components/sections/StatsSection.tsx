import React from 'react';

export function StatsSection() {
  return (
    <section className="py-[60px] md:py-[80px] bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white rounded-[30px] md:rounded-[50px] my-[60px] md:my-[100px] mx-4 md:mx-auto max-w-[1150px] md:container px-6 md:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
        <div className="stat-item">
          <h3 className="text-4xl md:text-5xl font-cormorant font-semibold text-white mb-2">500+</h3>
          <p className="text-sm md:text-base">Happy Clients</p>
        </div>
        <div className="stat-item">
          <h3 className="text-4xl md:text-5xl font-cormorant font-semibold text-white mb-2">1-on-1</h3>
          <p className="text-sm md:text-base">Dedicated Care</p>
        </div>
        <div className="stat-item">
          <h3 className="text-4xl md:text-5xl font-cormorant font-semibold text-white mb-2">100%</h3>
          <p className="text-sm md:text-base">Confidentiality</p>
        </div>
        <div className="stat-item">
          <h3 className="text-4xl md:text-5xl font-cormorant font-semibold text-white mb-2">98%</h3>
          <p className="text-sm md:text-base">Satisfied Patients</p>
        </div>
      </div>
    </section>
  );
}
