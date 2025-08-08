import Image from 'next/image';
import Link from 'next/link';
import { FacebookIcon, HeartIcon, LinkedinIcon, TwitterIcon } from './icons/Icon';

interface ModernFooterProps {
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
}

function ModernFooter({
  logoSrc = '/img/logo-black-bg-small.jpg',
  logoAlt = 'APIFreaks',
  logoWidth = 120,
  logoHeight = 120,
}: ModernFooterProps) {
  return (
    <footer className="bg-black text-white px-6 xs:px-8 sm:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1540px] mx-auto">
        {/* CTA Section */}
        <div className="flex flex-col md:flex-row items-center justify-center py-10 gap-5">
          <p className="text-3xl font-bold text-white">
            Ready to get started?
          </p>
          <Link
            href="#"
            className="bg-yellow-400 text-center py-5 px-10 rounded-full text-black font-medium text-base hover:bg-yellow-300 transition-colors duration-150"
          >
            Sign Up for Free
          </Link>
        </div>

        <hr className="border-gray-600" />

        {/* Main Footer Content */}
        <div className="py-10 text-center sm:text-left">
          <div className="md:flex md:justify-between items-start gap-x-12 space-y-20 md:space-y-0">
            {/* Logo and Social Links */}
            <div className="flex flex-col justify-center space-y-3">
              <Link href="/" className="mx-auto md:mx-0">
                <Image
                  src={logoSrc}
                  width={logoWidth}
                  height={logoHeight}
                  alt={logoAlt}
                  className="rounded"
                />
              </Link>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
                <Link
                  href="/"
                  className="rounded-full bg-yellow-400 w-7 h-7 flex items-center justify-center text-black hover:bg-yellow-300 transition-colors duration-150"
                >
                  <LinkedinIcon width="16" height="16" />
                </Link>
                <Link
                  href="/"
                  className="rounded-full bg-yellow-400 w-7 h-7 flex items-center justify-center text-black hover:bg-yellow-300 transition-colors duration-150"
                >
                  <FacebookIcon width="16" height="16" />
                </Link>
                <Link
                  href="/"
                  className="rounded-full bg-yellow-400 w-7 h-7 flex items-center justify-center text-black hover:bg-yellow-300 transition-colors duration-150"
                >
                  <TwitterIcon width="16" height="16" />
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col flex-wrap sm:h-[500px] xl:h-[380px] md:w-[70%] gap-y-8">
              <div className="text-lg space-y-3">
                <h3 className="text-yellow-400 text-xl font-bold">
                  API Catalog
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      Geolocation APIs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      WHOIS APIs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      DNS APIs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      SSL APIs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      Domain Availability APIs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      Screenshot API
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-lg space-y-3">
                <h3 className="text-yellow-400 text-xl font-bold">
                  Tools Catalog
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      API Testing Tools
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      Documentation Generator
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      API Analytics
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-lg space-y-3">
                <h3 className="text-yellow-400 text-xl font-bold">Docs</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      Getting Started
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      API Reference
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-lg space-y-3">
                <h3 className="text-yellow-400 text-xl font-bold">
                  Pricing & Accounts
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      Pricing Plans
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      Account Settings
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      Billing
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-lg space-y-3">
                <h3 className="text-yellow-400 text-xl font-bold">Company</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition-colors duration-150">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-center text-base mt-20">
            <div className="rounded-full bg-yellow-400 w-10 h-10 flex items-center justify-center text-black mb-2">
              <HeartIcon width="20" height="20" />
            </div>
            <p>Copyright © 2024</p>
            <p>Made in Pakistan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ModernFooter;
export { ModernFooter };
