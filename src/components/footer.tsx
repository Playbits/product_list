const Footer = () => (
  <footer className="bg-gray-50 mt-20">
    <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
      <div className="max-w-sm">
        <div className="mb-6 flex h-12 items-center space-x-2">
          <a className="flex items-center text-2xl font-black" href="/">
            <span className="mr-2 text-3xl text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z"
                />
              </svg>
            </span>
            <span className="text-blue-600">Switchive</span>
          </a>
        </div>
        <div className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a
          officia ea expedita!
        </div>
      </div>
      <div className="">
        <div className="mt-4 mb-2 font-medium xl:mb-4">Address</div>
        <div className="text-gray-500">
          35 Remida Heights, <br />
          45 Street, <br />
          South Caroline, US
        </div>
      </div>
      <div className="">
        <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
        <nav aria-label="Footer Navigation" className="text-gray-500">
          <ul className="space-y-3">
            <li>
              <a className="hover:text-blue-600 hover:underline" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600 hover:underline" href="#">
                Demo
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600 hover:underline" href="#">
                Press
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600 hover:underline" href="#">
                Support Hub
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600 hover:underline" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="">
        <div className="mt-4 mb-2 font-medium xl:mb-4">
          Subscribe to our Newsletter
        </div>
        <div className="flex flex-col">
          <div className="mb-4">
            <input
              type="email"
              className="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="Enter your email"
            />
            <button className="block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-100">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
        <div className="">© 2022 BelAir | All Rights Reserved</div>
        <div className="">
          <a className="" href="#">
            Privacy Policy
          </a>
          <span>|</span>
          <a className="" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
