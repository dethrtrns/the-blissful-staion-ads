import React from 'react';

export function StatsSection() {
  return (
    <section className="py-[80px] bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white rounded-[50px] my-[100px] mx-auto max-w-[1150px] container px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="stat-item">
          <h3 className="text-5xl font-cormorant font-semibold text-white mb-2">500+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item">
          <h3 className="text-5xl font-cormorant font-semibold text-white mb-2">1-on-1</h3>
          <p>Dedicated Care</p>
        </div>
        <div className="stat-item">
          <h3 className="text-5xl font-cormorant font-semibold text-white mb-2">100%</h3>
          <p>Confidentiality</p>
        </div>
        <div className="stat-item">
          <h3 className="text-5xl font-cormorant font-semibold text-white mb-2">98%</h3>
          <p>Satisfied Patients</p>
        </div>
      </div>
    </section>
  );
}
