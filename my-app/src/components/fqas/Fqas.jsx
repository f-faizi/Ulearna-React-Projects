import React from "react";
import FqaHeader from "./FqaHeader";
import FqaQuestions from "./FqaQuestions";

function Fqas() {
  return (
    <div>
      <section className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
        <div>
          <FqaHeader />
          <FqaQuestions />
        </div>
      </section>
    </div>
  );
}

export default Fqas;
