import React from 'react';

const testimonials = [
  {
    rating: '⭐⭐⭐⭐⭐',
    text: '"The counseling sessions helped me navigate through a very difficult phase of my life. The environment is extremely supportive and non-judgmental."',
    name: 'Anjali R.',
    location: 'Lucknow'
  },
  {
    rating: '⭐⭐⭐⭐⭐',
    text: '"Professional, ethical, and deeply empathetic. The Blissful Station is truly a sanctuary for mental wellness. Highly recommend their services."',
    name: 'Sameer K.',
    location: 'Online Client'
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-[100px] container mx-auto px-8 max-w-[1200px]">
      <div className="text-center max-w-[600px] mx-auto mb-16">
        <h2 className="text-4xl font-cormorant font-semibold text-[var(--primary)] mb-4">What Our Clients Say</h2>
        <p className="text-[var(--text-light)]">Real stories of transformation and healing from those we've had the privilege to support.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-[var(--bg-color)] p-12 rounded-[30px] relative transition-all duration-400 hover:bg-white hover:shadow-[0_10px_40px_rgba(33,77,62,0.08)]">
            <div className="mb-6 text-[0.9rem] tracking-[2px]">{testimonial.rating}</div>
            <p className="italic text-lg leading-relaxed mb-8 text-[var(--text-dark)]">{testimonial.text}</p>
            <div className="flex flex-col">
              <strong className="font-cormorant text-xl text-[var(--primary)]">{testimonial.name}</strong>
              <span className="text-[0.9rem] text-[var(--text-light)]">{testimonial.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
