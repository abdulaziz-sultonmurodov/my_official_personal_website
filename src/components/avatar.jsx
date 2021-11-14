import React from 'react'
import {  useLoader } from "@react-three/fiber";
import Avatar from "../models/avatar.glb"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
 const gltf = useLoader(GLTFLoader, Avatar);
  return (
  <>
  <primitive object={gltf.scene} scale={0.4} />
</>
);
};

export default Model
