import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleInDeg } from "./angleInRad";
import { Hover } from "./Hover";
import { Bumble } from "./Bumble";

type Props = {};

function ThreeScenes({}: Props) {
  const boxRef = useRef<Mesh>(null);
  const { scale, position, size, int } = useControls({
    scale: 1,
    position: [0, 0, 0],

    intensity: 1,
  });
  // useFrame(() => {
  //   boxRef.current.position.y += 0.005;
  //   boxRef.current.position.x += 0.005;
  // });
  return (
    <>
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <ambientLight args={["#fff", 0.5]} />

      {/* sportlight */}
      <spotLight position={position} args={["#fff", 2]} />

      <mesh rotation={[angleInDeg(-90), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="#fed700" />
      </mesh>
      {/* <Hover /> */}
      <mesh ref={boxRef}>
        <Bumble />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[2, 2, 0.4]} />
        <meshStandardMaterial color="#fed700" />
      </mesh>
    </>
  );
}

export default ThreeScenes;
