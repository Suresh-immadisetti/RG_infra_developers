import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 bg-cta-pattern bg-cover bg-center">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-playfair font-semibold mb-4">Ready to Find Your Dream Property?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a consultation with our experts to explore how RG Infra Developers can help you find the perfect space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn btn-primary flex items-center justify-center sm:justify-start gap-2">
              Contact Us <ArrowRight size={18} />
            </a>
            <a href="#projects" className="btn btn-outline flex items-center justify-center sm:justify-start gap-2">
              Browse Projects <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;