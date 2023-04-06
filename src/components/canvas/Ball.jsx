import React, { Suspense, forwardRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture, View } from '@react-three/drei';

import CanvasLoader from '../Loader';
import { technologies } from '../../constants';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
}

const BallCanvas = forwardRef((_, refs) => {
  console.log(refs.current)
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      eventSource={refs.current[0]}
    >
      {technologies.map((technology, index) => (
        <View index={index + 1} track={refs.current[index + 1]}>
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={technology.icon} />
          </Suspense>
        </View>
          
      ))}

      <Preload all />
    </Canvas>
  );
});

export default BallCanvas;