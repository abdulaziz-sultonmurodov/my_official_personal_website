import React, { Suspense } from "react";
import Model from "../../components/avatar";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { Link } from "react-router-dom";
import { FaRegHandPeace, FaRegHandPointer } from "react-icons/fa";
import { AiOutlineZoomIn, AiOutlineHome } from "react-icons/ai";

const MyModel = () => {
  return (
    <>
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
      <div className="top-5 left-6 fixed bg-gray-200 opacity-40 px-4 py-1 rounded-lg">
        <Link className="flex items-center" to="/">
          <AiOutlineHome className="mr-2" />
          Go Back
        </Link>
      </div>
      <div className="fixed bottom-5 right-6 bg-gray-200 opacity-40 px-4 py-1 rounded-lg">
        <p className="flex items-center">
          <AiOutlineZoomIn className="mr-2" />
          Hold two fingers to zoom in/out
        </p>
        <p className="flex items-center">
          <FaRegHandPointer className="mr-2" />
          Hold one fingers to move around
        </p>
        <p className="flex items-center">
          <FaRegHandPeace className="mr-2" />
          Slide two fingers to move
        </p>
      </div>
    </>
  );
};

export default MyModel;
