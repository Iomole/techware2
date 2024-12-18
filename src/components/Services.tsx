import { services } from '../data/servicesData';
import { solutions } from '../data/solutionsData';
import { ServiceCard } from './ServiceCard';

export const Services = () => {
  const allOfferings = [...solutions, ...services];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Offerings</h2>
          <p className="text-xl text-gray-600">Comprehensive technology solutions and services for your business</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allOfferings.map((offering, index) => (
            <ServiceCard
              key={offering.title}
              {...offering}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};