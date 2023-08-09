const navigation = {
  menu: [
    { name: "Breakfast", href: "#" },
    { name: "Lunch", href: "#" },
    { name: "Dinner", href: "#" },
    { name: "Desserts", href: "#" },
  ],
  reservations: [
    { name: "Make a Reservation", href: "#" },
    { name: "View Availability", href: "#" },
    { name: "Special Occasions", href: "#" },
  ],
  about: [
    { name: "Our Story", href: "#" },
    { name: "Meet the Chef", href: "#" },
    { name: "Ingredients", href: "#" },
    { name: "Reviews", href: "#" },
  ],
  contact: [
    { name: "Contact Us", href: "#" },
    { name: "Location", href: "#" },
    { name: "Hours of Operation", href: "#" },
    { name: "Feedback", href: "#" },
  ],
};

/**
 * Footer component displaying navigation links, language, currency, and newsletter subscription.
 *
 * @component
 * @example
 *  Usage within a parent component:
 *  import Footer from './path/to/Footer';
 *  ...
 *  <Footer />
 */

export default function Footer() {
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-white">Menu</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.menu.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-white">
                  Reservation
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.reservations.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-white">About</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-white">Contact</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="text-base font-medium text-white">
              Language &amp; Currency
            </h3>
            <form className="mt-4 sm:max-w-xs">
              <fieldset className="w-full">
                <label htmlFor="language" className="sr-only">
                  Language
                </label>
                <div className="relative">
                  <select
                    id="language"
                    name="language"
                    className="block w-full appearance-none rounded-md border border-transparent bg-gray-700 bg-none py-2 pl-3 pr-10 text-base text-white focus:border-white focus:outline-none focus:ring-white sm:text-sm"
                    defaultValue="English"
                  >
                    <option>English</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Japanese</option>
                    <option>Spanish</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"></div>
                </div>
              </fieldset>
              <fieldset className="mt-4 w-full">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <div className="relative mt-1.5">
                  <select
                    id="currency"
                    name="currency"
                    className="block w-full appearance-none rounded-md border border-transparent bg-gray-700 bg-none py-2 pl-3 pr-10 text-base text-white focus:border-white focus:outline-none focus:ring-white sm:text-sm"
                    defaultValue="AUD"
                  >
                    <option>ARS</option>
                    <option>AUD</option>
                    <option>CAD</option>
                    <option>CHF</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>JPY</option>
                    <option>USD</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"></div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 className="text-base font-medium text-white">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-base text-gray-300">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form className="mt-4 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
