import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function FqaQuestions() {
  return (
    <div>
      {" "}
      <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
        <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
          <button
            type="button"
            className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
          >
            <span className="flex text-lg font-semibold text-black">
              How do I get started?
            </span>

            <ChevronUp className="h-5 w-5 text-gray-500" />
          </button>
          <div className="px-4 pb-5 sm:px-6 sm:pb-6">
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
              inventore ratione deleniti?
            </p>
          </div>
        </div>
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
          >
            <button
              type="button"
              className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
            >
              <span className="flex text-start text-lg font-semibold text-black">
                What is the difference between a free and paid account?
              </span>
              <ChevronDown className="hidden h-5 w-5 text-gray-500 md:block" />
            </button>
          </div>
        ))}
      </div>
      <p className="textbase mt-6 text-center text-gray-600">
        Can&apos;t find what you&apos;re looking for?{" "}
        <a
          href="#"
          title=""
          className="font-semibold text-black hover:underline"
        >
          Contact our support
        </a>
      </p>
    </div>
  );
}

export default FqaQuestions;
