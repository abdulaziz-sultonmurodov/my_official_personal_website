import React, { Suspense } from "react";
import Model from "../../components/avatar";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { Link } from "react-router-dom";

const MyModel = () => {
  return (
    <>
      <div className="pt-4 pl-10">
        <Link to="/">Go Back</Link>
      </div>
      <Canvas
        style={{ height: "160vh" }}
        camera={{
          fov: 25,
          zoom: 1.3,
          near: 1,
          far: 2000,
        }}
      >
        <Suspense fallback={<Html>loading..</Html>}>
          <Model />
          <OrbitControls makeDefault />
          <directionalLight position={[-20, 30, 20]} intensity={1} />
          <directionalLight position={[20, 30, -20]} intensity={1} />
          <directionalLight position={[10, -10, 0]} intensity={1} />
          <directionalLight position={[-10, 10, -60]} intensity={1} />
          <directionalLight position={[-20, -50, 0]} intensity={1} />
          <directionalLight position={[40, 50, 20]} intensity={1} />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </>
  );
};

export default MyModel;
