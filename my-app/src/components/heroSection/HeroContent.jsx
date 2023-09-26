import React from "react";

function HeroContent({ content }) {
  return (
    <div>
      <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
        <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
          <div className="rounded-full bg-white p-1 px-2">
            <p className="text-sm font-medium">{content.hiring}</p>
          </div>
          <p className="text-sm font-medium">{content.joining}</p>
        </div>
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
          {content.title}
        </h1>
        <p className="mt-8 text-lg text-gray-700">{content.description}</p>
        <form action="" className="mt-8 flex items-start space-x-2">
          <div>
            <input
              className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Enter your email"
              id="email"
            ></input>
            <p className="mt-2 text-sm text-gray-500">
              We care about your privacy
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HeroContent;
