import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { MeshBasicMaterial } from "three";
import { Nero } from "../models/Nero";
// import { CarTwo } fro./CarTwoTwo";

import Floor from "./Floor";
import Ground from "./Ground";

import { Sl } from "../models/Sl";
import { Mustang } from "../models/Mustang";

// import { MeshBasicMaterial } from "three";

type Props = {};

function CarShow({}: Props) {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault position={[3, 2, 5]} fov={20} />
      <color args={[0, 0, 0]} attach="background" />

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Mustang />
      <Sl />
      <Nero />
      <Floor />
    </>
  );
}

export default CarShow;
