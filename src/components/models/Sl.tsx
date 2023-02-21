/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --types
Author: Ajay Gawde (https://sketchfab.com/aagawde)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mercedes-benz-sl-65-amg-low-poly-dc937a228add44889251dfc5fc8dd886
Title: Mercedes Benz SL-65 AMG - Low Poly
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder_015_2_0: THREE.Mesh;
    Cylinder_014_4_0: THREE.Mesh;
    Cylinder_013_6_0: THREE.Mesh;
    Cylinder_012_8_0: THREE.Mesh;
    Cylinder_011_10_0: THREE.Mesh;
    Cylinder_010_12_0: THREE.Mesh;
    Cylinder_009_14_0: THREE.Mesh;
    Cylinder_005_16_0: THREE.Mesh;
    Cylinder_008_18_0: THREE.Mesh;
    Cylinder_003_20_0: THREE.Mesh;
    Cylinder_006_22_0: THREE.Mesh;
    Cylinder_001_24_0: THREE.Mesh;
    Cylinder_002_26_0: THREE.Mesh;
    Cylinder_007: THREE.Mesh;
    Cylinder_004_30_0: THREE.Mesh;
    Plane_32_0: THREE.Mesh;
    Cylinder_34_0: THREE.Mesh;
  };
  materials: {
    Cylinder_015: THREE.MeshStandardMaterial;
    Cylinder_014: THREE.MeshStandardMaterial;
    Cylinder_013: THREE.MeshStandardMaterial;
    Cylinder_012: THREE.MeshStandardMaterial;
    Cylinder_011: THREE.MeshStandardMaterial;
    Cylinder_010: THREE.MeshStandardMaterial;
    Cylinder_009: THREE.MeshStandardMaterial;
    Cylinder_005: THREE.MeshStandardMaterial;
    Cylinder_008: THREE.MeshStandardMaterial;
    Cylinder_003: THREE.MeshStandardMaterial;
    Cylinder_006: THREE.MeshStandardMaterial;
    Cylinder_001: THREE.MeshStandardMaterial;
    Cylinder_002: THREE.MeshStandardMaterial;
    Cylinder_007: THREE.MeshStandardMaterial;
    Cylinder_004: THREE.MeshStandardMaterial;
    Plane: THREE.MeshStandardMaterial;
    Cylinder: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Object_0";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Sl(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/models/sl/scene.gltf"
  ) as GLTFResult;
  // const { actions } = useAnimations<GLTFActions>(animations, group);
  return (
    <group {...props} dispose={null} position={[0, 0, 0]}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.09}
        >
          <group name="SL65_-_AMG_Animatedabccleanermaterialmergergles">
            <group name="Object_2" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_3">
                <group
                  name="Object_4"
                  position={[-0.92, 0.36, -1.27]}
                  rotation={[0, 0, Math.PI]}
                  scale={[1.16, 1.07, 1.07]}
                >
                  <group name="TimeframeMainGroup">
                    <group name="Object_6">
                      <mesh
                        name="Cylinder_015_2_0"
                        geometry={nodes.Cylinder_015_2_0.geometry}
                        material={materials.Cylinder_015}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_8"
                  position={[-0.91, 0.36, -1.27]}
                  rotation={[0, 0, Math.PI]}
                  scale={[1.06, 0.98, 0.98]}
                >
                  <group name="TimeframeMainGroup_1">
                    <group name="Object_10">
                      <mesh
                        name="Cylinder_014_4_0"
                        geometry={nodes.Cylinder_014_4_0.geometry}
                        material={materials.Cylinder_014}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_12"
                  position={[-0.91, 0.35, -1.11]}
                  rotation={[Math.PI, 0, -Math.PI]}
                  scale={[1.16, 1.07, 1.07]}
                >
                  <group name="TimeframeMainGroup_2">
                    <group name="Object_14">
                      <mesh
                        name="Cylinder_013_6_0"
                        geometry={nodes.Cylinder_013_6_0.geometry}
                        material={materials.Cylinder_013}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_16"
                  position={[-0.9, 0.34, 1.3]}
                  rotation={[0, 0, Math.PI]}
                >
                  <group name="TimeframeMainGroup_3">
                    <group name="Object_18">
                      <mesh
                        name="Cylinder_012_8_0"
                        geometry={nodes.Cylinder_012_8_0.geometry}
                        material={materials.Cylinder_012}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_20"
                  position={[-0.89, 0.34, 1.3]}
                  rotation={[0, 0, Math.PI]}
                >
                  <group name="TimeframeMainGroup_4">
                    <group name="Object_22">
                      <mesh
                        name="Cylinder_011_10_0"
                        geometry={nodes.Cylinder_011_10_0.geometry}
                        material={materials.Cylinder_011}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_24"
                  position={[-0.89, 0.33, 1.16]}
                  rotation={[0, 0, Math.PI]}
                >
                  <group name="TimeframeMainGroup_5">
                    <group name="Object_26">
                      <mesh
                        name="Cylinder_010_12_0"
                        geometry={nodes.Cylinder_010_12_0.geometry}
                        material={materials.Cylinder_010}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_28"
                  position={[0.92, 0.35, -1.27]}
                  scale={[1.16, 1.07, 1.07]}
                >
                  <group name="TimeframeMainGroup_6">
                    <group name="Object_30">
                      <mesh
                        name="Cylinder_009_14_0"
                        geometry={nodes.Cylinder_009_14_0.geometry}
                        material={materials.Cylinder_009}
                      />
                    </group>
                  </group>
                </group>
                <group name="Object_32" position={[0.9, 0.33, 1.3]}>
                  <group name="TimeframeMainGroup_7">
                    <group name="Object_34">
                      <mesh
                        name="Cylinder_005_16_0"
                        geometry={nodes.Cylinder_005_16_0.geometry}
                        material={materials.Cylinder_005}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_36"
                  position={[0.91, 0.35, -1.27]}
                  scale={[1.06, 0.98, 0.98]}
                >
                  <group name="TimeframeMainGroup_8">
                    <group name="Object_38">
                      <mesh
                        name="Cylinder_008_18_0"
                        geometry={nodes.Cylinder_008_18_0.geometry}
                        material={materials.Cylinder_008}
                      />
                    </group>
                  </group>
                </group>
                <group name="Object_40" position={[0.89, 0.33, 1.3]}>
                  <group name="TimeframeMainGroup_9">
                    <group name="Object_42">
                      <mesh
                        name="Cylinder_003_20_0"
                        geometry={nodes.Cylinder_003_20_0.geometry}
                        material={materials.Cylinder_003}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_44"
                  position={[0.91, 0.36, -1.11]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[1.16, 1.07, 1.07]}
                >
                  <group name="TimeframeMainGroup_10">
                    <group name="Object_46">
                      <mesh
                        name="Cylinder_006_22_0"
                        geometry={nodes.Cylinder_006_22_0.geometry}
                        material={materials.Cylinder_006}
                      />
                    </group>
                  </group>
                </group>
                <group name="Object_48" position={[0.89, 0.34, 1.16]}>
                  <group name="TimeframeMainGroup_11">
                    <group name="Object_50">
                      <mesh
                        name="Cylinder_001_24_0"
                        geometry={nodes.Cylinder_001_24_0.geometry}
                        material={materials.Cylinder_001}
                      />
                    </group>
                  </group>
                </group>
                <group name="Object_52">
                  <group name="TimeframeMainGroup_12">
                    <group name="Object_54">
                      <mesh
                        name="Cylinder_002_26_0"
                        geometry={nodes.Cylinder_002_26_0.geometry}
                        material={materials.Cylinder_002}
                      />
                    </group>
                  </group>
                </group>
                <group name="Object_56">
                  <group name="MorphMainGroup">
                    <mesh
                      name="Cylinder_007"
                      geometry={nodes.Cylinder_007.geometry}
                      material={materials.Cylinder_007}
                      morphTargetDictionary={
                        nodes.Cylinder_007.morphTargetDictionary
                      }
                      morphTargetInfluences={
                        nodes.Cylinder_007.morphTargetInfluences
                      }
                    />
                  </group>
                </group>
                <group name="Object_59">
                  <group name="TimeframeMainGroup_13">
                    <group name="Object_61">
                      <mesh
                        name="Cylinder_004_30_0"
                        geometry={nodes.Cylinder_004_30_0.geometry}
                        material={materials.Cylinder_004}
                      />
                    </group>
                  </group>
                </group>
                <group name="Object_63">
                  <group name="TimeframeMainGroup_14">
                    <group name="Object_65">
                      <mesh
                        name="Plane_32_0"
                        geometry={nodes.Plane_32_0.geometry}
                        material={materials.Plane}
                      />
                    </group>
                  </group>
                </group>
                <group name="Object_67">
                  <group name="TimeframeMainGroup_15">
                    <group name="Object_69">
                      <mesh
                        name="Cylinder_34_0"
                        geometry={nodes.Cylinder_34_0.geometry}
                        material={materials.Cylinder}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/sl/scene.gltf");
