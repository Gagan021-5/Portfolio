import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import { Stars, Cloud, Float, PerformanceMonitor } from '@react-three/drei'

// Optimized Background Scene - No Post Processing
function BackgroundScene({ perfSaves }) {
  // Drastically reduce segment count if lag is detected
  const cloudSegments = perfSaves ? 5 : 10; 

  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={3000} // Reduced count slightly for performance
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      {/* Clouds with lower opacity to reduce overdraw stress */}
      <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Cloud opacity={0.3} speed={0.4} width={10} depth={1.5} segments={cloudSegments} color="#4f46e5" />
      </Float>
      
      <Float speed={0.3} rotationIntensity={0.1} floatIntensity={0.3}>
        <Cloud opacity={0.2} speed={0.3} width={8} depth={1} segments={Math.max(4, cloudSegments - 5)} color="#06b6d4" position={[5, 2, -5]} />
      </Float>
      
      <Float speed={0.4} rotationIntensity={0.15} floatIntensity={0.4}>
        <Cloud opacity={0.25} speed={0.5} width={12} depth={1.2} segments={Math.max(6, cloudSegments - 2)} color="#8b5cf6" position={[-4, -1, -8]} />
      </Float>

      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#4f46e5" />
    </>
  )
}

export default function BackgroundCanvas() {
  // Cap initial DPR at 1.5 for performance stability
  const [dpr, setDpr] = useState(1.5) 
  const [perfSaves, setPerfSaves] = useState(false)

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        dpr={dpr}
        gl={{ 
          antialias: false, // Disabling antialias on background saves huge resources
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
      >
        <PerformanceMonitor 
          // Aggressively lower quality on lag
          onDecline={() => { setDpr(1); setPerfSaves(true); }} 
        />
        
        <Suspense fallback={null}>
          <BackgroundScene perfSaves={perfSaves} />
        </Suspense>
      </Canvas>
    </div>
  )
}