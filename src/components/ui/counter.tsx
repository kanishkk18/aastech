import React from 'react';

const Counter: React.FC = () => {
  return (
    <main className="min-h-fit px-4 py-10 bg-black text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        {/* Stats Section */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {[
            { value: '150', label: 'Happy Clients' },
            { value: '50', label: 'Projects Completed' },
            { value: '12', label: 'Years of Experience' },
            { value: '86', label: 'Team Members' },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#0a0e24] to-[#070b1a] p-8 min-h-[180px]"
            >
              <div
                style={{
                  position: 'absolute',
                  borderRadius: 'inherit',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  overflow: 'hidden',
                }}
                data-framer-background-image-wrapper="true"
              >
                <img
                  decoding="async"
                  loading="lazy"
                  src="https://framerusercontent.com/images/WcrHWFTN7cBpOOCJ3uhVkpsJXQ.svg"
                  alt="Card Background"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    objectPosition: 'center',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <span className="mb-2 text-4xl font-bold sm:text-5xl">
                  {stat.value}
                  <span className="text-blue-500">+</span>
                </span>
                <span className="text-gray-400 text-sm sm:text-base">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Section */}
        <div className="w-full lg:w-1/2  flex flex-col">
          <div className="mb-4 inline-block w-fit rounded-full bg-[#0a0e24] px-4 py-2 text-sm font-medium">
            Results & Analytics
          </div>
          <span className="mb-6 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            Performance Insights and Analytics Overview
          </span>

          <div className="mb-6">
            <h3 className="mb-4 text-lg font-semibold sm:text-xl">
              Trusted by Leading Brands
            </h3>
            <div className="flex flex-wrap items-center gap-6 mt-5">
  {[
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  ].map((brand, i) => (
    <div key={i} className="flex flex-col items-center justify-center w-12 sm:w-12">
      <img
        src={brand.logo}
        alt={brand.name}
        className="h-8 object-contain mb-1 grayscale hover:grayscale-0 transition duration-300"
      />
      <span className="text-xs text-gray-400 text-center">{brand.name}</span>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Counter;
