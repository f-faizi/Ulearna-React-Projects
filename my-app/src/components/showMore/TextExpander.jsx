import React, { useState } from "react";

function TextExpander({
  children,
  className,
  collapsedNumWords = 10,
  expandButtonText = "show less",
  collapseButtonText = "show more",
  buttonColor = "#ff00aa",
  expanded = false,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ");

  return (
    <div className="pt-10">
      <span className={`${className}`}>{displayText}</span>
      <button
        onClick={() => setIsExpanded((exp) => !exp)}
        className={`pl-5`}
        style={{ color: buttonColor }}
      >
        {isExpanded ? expandButtonText : collapseButtonText}
      </button>
    </div>
  );
}

export default TextExpander;
