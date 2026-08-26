import { forwardRef } from "react";

/**
 * Thin structural wrapper every section uses so section rhythm (min-height,
 * centering, overflow control) lives in one place instead of being
 * redeclared per section.
 */
const SectionWrapper = forwardRef(function SectionWrapper(
  { id, className = "", children, innerClassName = "", background = null },
  ref
) {
  return (
    <section id={id} ref={ref} className={`section ${className}`}>
      {background}
      <div className={`section__inner ${innerClassName}`}>{children}</div>
    </section>
  );
});

export default SectionWrapper;
