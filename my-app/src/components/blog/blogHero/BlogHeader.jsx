import React from "react";

function BlogHeader({ title, description, search }) {
  return (
    <div>
      <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
        <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          {title}
        </p>
        <p className="max-w-4xl text-base text-gray-600 md:text-xl">
          {description}
        </p>
        <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder={`${search}...`}
          ></input>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {search}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;
