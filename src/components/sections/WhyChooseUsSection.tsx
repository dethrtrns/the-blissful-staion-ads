import React from 'react';

const features = [
  { icon: 'fa-certificate', title: 'Verified Expert', description: 'Care provided by a certified and experienced clinical psychologist.' },
  { icon: 'fa-shield-alt', title: '100% Confidential', description: 'Your privacy is our priority. We offer a safe and secure environment.' },
  { icon: 'fa-hand-holding-heart', title: 'Evidence-Based', description: 'We use proven therapeutic approaches for consistent and positive results.' },
  { icon: 'fa-clock', title: 'Flexible Sessions', description: 'Convenient online and offline timings to suit your busy schedule.' },
]

export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-[60px] md:py-[100px] container mx-auto px-6 md:px-8 max-w-[1200px]">
      <div className="text-center max-w-[600px] mx-auto mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-[var(--primary)] mb-4">Why The Blissful Station?</h2>
        <p className="text-[var(--text-light)]">We are dedicated to providing the highest quality of mental healthcare with an emphasis on your well-being.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {features.map((feature, idx) => (
          <div key={idx} className="text-center p-8 bg-[var(--bg-color)] rounded-[20px] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_rgba(33,77,62,0.08)] hover:bg-white group">
            <div className="w-[60px] h-[60px] bg-[var(--secondary)] rounded-2xl flex items-center justify-center mx-auto mb-6 text-[var(--primary)] text-2xl">
              <i className={`fas ${feature.icon}`}></i>
            </div>
            <h3 className="text-xl font-outfit mb-3 text-[var(--primary)] font-semibold">{feature.title}</h3>
            <p className="text-[0.95rem] text-[var(--text-light)]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
