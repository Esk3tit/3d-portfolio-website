import React, { Suspense, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import CanvasLoader from "./components/Loader";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, BallCanvas, ComputersCanvas, EarthCanvas } from "./components";
import { Canvas } from "@react-three/fiber";
import { View, Preload, OrbitControls } from "@react-three/drei";

const App = () => {
  const containerRef = useRef();
  const heroRef = useRef();
  const techRef = useRef();
  const earthRef = useRef();
  const starsRef = useRef();

  return (
    <div ref={containerRef}>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero ref={heroRef} />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact ref={earthRef} />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
      <Canvas eventSource={containerRef}>
        <View index={1} track={heroRef}>
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            <ComputersCanvas />
          </Suspense>
        </View>
        {/* <View>
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            // MAP ALL BALLS HERE AND THEN ATTACH THEM TO DIV WHERE ALL BALLS ARE DISPLAYED IN TECH FILE
            <BallCanvas />
          </Suspense>
        </View> */}
        <View index={2} track={earthRef}>
          {/* <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <EarthCanvas />
          </Suspense> */}
        </View>
        {/* <View>
          
        </View> */}
        <Preload all />
      </Canvas>
    </div>
    
  )
}

export default App
