import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import { Stars, Cloud, Float, PerformanceMonitor } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

function BackgroundScene({ perfSaves }) {
  // If performance is low (perfSaves is true), we render clouds with fewer details
  const cloudSegments = perfSaves ? 10 : 20;

  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      {/* Main Cloud */}
      <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Cloud
          opacity={0.4}
          speed={0.4}
          width={10}
          depth={1.5}
          segments={cloudSegments}
          color="#4f46e5" // Indigo
        />
      </Float>
      
      {/* Secondary Cloud */}
      <Float speed={0.3} rotationIntensity={0.1} floatIntensity={0.3}>
        <Cloud
          opacity={0.3}
          speed={0.3}
          width={8}
          depth={1}
          segments={Math.max(5, cloudSegments - 5)} // Lower detail for background clouds
          color="#06b6d4" // Cyan
          position={[5, 2, -5]}
        />
      </Float>
      
      {/* Tertiary Cloud */}
      <Float speed={0.4} rotationIntensity={0.15} floatIntensity={0.4}>
        <Cloud
          opacity={0.35}
          speed={0.5}
          width={12}
          depth={1.2}
          segments={Math.max(8, cloudSegments - 2)}
          color="#8b5cf6" // Violet
          position={[-4, -1, -8]}
        />
      </Float>

      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#4f46e5" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      <pointLight position={[0, 0, 20]} intensity={0.3} color="#8b5cf6" />
    </>
  )
}

export default function BackgroundCanvas() {
  const [dpr, setDpr] = useState(2)
  const [perfSaves, setPerfSaves] = useState(false)

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        dpr={dpr}
        gl={{ 
          antialias: false, // Bloom needs to handle AA or we disable it for perf
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
      >
        {/* PerformanceMonitor adjusts quality dynamically */}
        <PerformanceMonitor 
          onIncline={() => { setDpr(2); setPerfSaves(false); }} 
          onDecline={() => { setDpr(1); setPerfSaves(true); }} 
        />
        
        <Suspense fallback={null}>
          <BackgroundScene perfSaves={perfSaves} />
          
          <EffectComposer disableNormalPass>
            <Bloom
              blendFunction={BlendFunction.SCREEN}
              intensity={0.5} // Increased slightly for impact
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              mipmapBlur // Makes the bloom softer and more performant
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}