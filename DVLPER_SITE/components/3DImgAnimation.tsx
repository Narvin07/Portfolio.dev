'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

useGLTF.preload('/models/airplane.glb');

interface PlaneAnimationProps {
  playKey: number;
  onAnimationComplete?: () => void;
  text?: string;
  photoUrl?: string;
}

function PlaneModel({
  playKey,
  onAnimationComplete,
  text = 'NARVIN SACHANIYA',
  photoUrl = '/images/your-photo.jpg',
}: PlaneAnimationProps) {
  const groupRef = useRef<THREE.Group>(null);
  const planeRef = useRef<THREE.Group>(null);
  const posterRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);
  const imageMaterialRef = useRef<THREE.MeshBasicMaterial>(null);
  const tlRef = useRef<gsap.core.Timeline>();

  const { scene: planeScene } = useGLTF('/models/airplane.glb');
  const texture = useTexture(photoUrl);

  // One-time setup of TL
  useEffect(() => {
    if (
      !groupRef.current ||
      !planeRef.current ||
      !posterRef.current ||
      !textRef.current ||
      !imageMaterialRef.current
    )
      return;

    const airplane = planeRef.current;
    const poster = posterRef.current;
    const textMesh = textRef.current;
    const imageMat = imageMaterialRef.current;
    const group = groupRef.current;

    // Initial state (no flicker)
    gsap.set(group.position, { x: 10, y: 2, z: 0 });
    gsap.set(group.rotation, { y: -Math.PI / 2 });
    gsap.set(poster.rotation, { y: Math.PI / 2 });
    gsap.set(imageMat, { opacity: 0 });
    textMesh.visible = false;

    const tl = gsap.timeline({
      paused: true,
      onComplete: () => onAnimationComplete?.(),
    });

    const enterDur = 2;
    const openDur = 1;
    const holdDur = 2;
    const closeDur = 1;
    const exitDur = 2;

    tl
      // Fly in
      .to(group.position, { x: 0, duration: enterDur, ease: 'power2.out' })
      .to(group.position, { y: 1, duration: 0.5, ease: 'power1.inOut' }, '<')

      // Open
      .to(poster.rotation, { y: 0, duration: openDur, ease: 'power2.out' }, '-=0.5')
      .to(imageMat, { opacity: 1, duration: 0.5 }, '<0.5')
      .add(() => { textMesh.visible = true; }, '<')

      // Hold
      .to({}, { duration: holdDur })

      // Close
      .to(imageMat, { opacity: 0, duration: 0.5 })
      .add(() => { textMesh.visible = false; }, '<')
      .to(poster.rotation, { y: Math.PI / 2, duration: closeDur, ease: 'power2.in' }, '-=0.5')

      // Fly out
      .to(group.position, { x: -10, duration: exitDur, ease: 'power2.in' }, '-=0.5');

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [onAnimationComplete]);

  // Re-trigger animation whenever playKey changes
  useEffect(() => {
    tlRef.current?.restart();
  }, [playKey]);

  return (
    <group ref={groupRef}>
      {/* Plane */}
      <group ref={planeRef}>
        <primitive object={planeScene} scale={0.1} />
      </group>

      {/* Poster */}
      <mesh ref={posterRef} position={[0, 0, -0.5]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[2, 1.5]} />
        <meshBasicMaterial
          ref={imageMaterialRef}
          map={texture}
          transparent
          opacity={0}
          toneMapped={false}
        />
      </mesh>

      {/* Text (separate mesh, slight offset from poster) */}
      <Text
        ref={textRef}
        position={[0, -0.6, -0.49]}
        fontSize={0.15}
        color="black"
        anchorX="center"
        anchorY="middle"
        visible={false}
      >
        {text}
      </Text>
    </group>
  );
}

export default function ThreeScene() {
  const [playKey, setPlayKey] = React.useState(0);

  // Example trigger: every 10s
  useEffect(() => {
    const id = setInterval(() => setPlayKey((k) => k + 1), 10000);
    return () => clearInterval(id);
  }, []);

  const handleDone = () => {
    console.log('Plane animation complete!');
  };

  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 75 }} dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <React.Suspense fallback={null}>
        <PlaneModel
          playKey={playKey}
          onAnimationComplete={handleDone}
          text="NARVIN SACHANIYA"
          photoUrl="/images/narvin.jpg"
        />
      </React.Suspense>
      {process.env.NODE_ENV === 'development' && <OrbitControls />}
    </Canvas>
  );
}
