
import TestimonialCard from "@/components/TestimonialCard";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Šta naše mušterije kažu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TestimonialCard
            name="Marko Petrović"
            role="Fitnes trener"
            content="MusclEatz mi je promenio život! Hrana je ukusna i nutritivno izbalansirana. Perfektno za moje klijente i za mene."
            rating={5}
          />
          
          <TestimonialCard
            name="Ana Jovanović"
            role="IT Stručnjak"
            content="Nemam vremena da kuvam zdrave obroke. MusclEatz je savršeno rešenje - sveže, ukusno i zdravo!"
            rating={5}
          />
          
          <TestimonialCard
            name="Nikola Nikolić"
            role="Sportista"
            content="Otkad koristim MusclEatz, moji rezultati su drastično poboljšani. Kvalitet hrane je izvanredan."
            rating={4}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
