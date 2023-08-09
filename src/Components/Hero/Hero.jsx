/**
 * Hero component showcasing the restaurant's ambiance and description.
 *
 * @component
 * @example
 * Usage within a parent component:
 * import Hero from './path/to/Hero';
 * ...
 * <Hero />
 */
const Hero = () => {
  return (
    <div className="relative h-2/3 py-36 ">
      {/* Background Image */}
      <img
        src="https://i.ibb.co/n83gLjz/rest.png"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />

      {/* Curved SVG Background */}
      <svg
        className="absolute inset-x-0 -bottom-1 text-white"
        viewBox="0 0 1160 163"
      >
        <path
          fill="currentColor"
          d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
        />
      </svg>

      {/* Content */}
      <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            {/* Restaurant Name */}
            <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-9xl sm:leading-none font-Satisfy text-red-500 ">
              PetPooja
            </h2>

            {/* Restaurant Description */}
            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg md:leading-relaxed">
              Immerse yourself in a world of exceptional flavors at our
              restaurant. Indulge in meticulously crafted dishes that blend
              tradition with innovation, creating an unforgettable dining
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
