import { solutions } from '../data/solutionsData';
import { ServiceCard } from './ServiceCard';

export const Solutions = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
          <p className="text-xl text-gray-600">Enterprise-grade technology solutions for your business</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <ServiceCard
              key={solution.title}
              {...solution}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};