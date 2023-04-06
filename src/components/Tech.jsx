import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useRef } from "react";

const Tech = () => {
  const refs = useRef([]);
  const containerRef = useRef();

  refs.current.push(containerRef);

  const handleRef = (ref) => {
    refs.current.push(ref);
    return ref;
  }

  return (
    <div ref={containerRef} className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name} onClick={() => console.log(refs)} ref={ref => handleRef(ref)} />
      ))}
      <BallCanvas ref={refs} />
    </div>
  )
}

export default SectionWrapper(Tech, "");