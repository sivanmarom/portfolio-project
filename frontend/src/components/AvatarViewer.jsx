// frontend/src/components/AvatarViewer.jsx
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function AvatarModel(props) {
  const { scene } = useGLTF("https://models.readyplayer.me/6882201f5261d5d7f3bee1d3.glb");
  const avatarRef = useRef();

  useFrame((state) => {
    if (avatarRef.current) {
      // סיבוב עדין
      avatarRef.current.rotation.y += 0.005;

      // נשימה (עלייה וירידה קלה)
      avatarRef.current.position.y = -2.5 + Math.sin(state.clock.getElapsedTime() * 1.5) * 0.05;

      // תנודות ראש כלליות
      avatarRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.02;
    }
  });

  return <primitive object={scene} ref={avatarRef} scale={2.2} position={[-1, -4, -1]} />;
}

export default function AvatarViewer() {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 1.5, 3] }}>
      <ambientLight intensity={2.5} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <AvatarModel />
    </Canvas>
  );
}