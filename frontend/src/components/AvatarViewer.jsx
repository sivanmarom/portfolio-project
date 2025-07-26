import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function AvatarModel() {
  // טוען את המודל והאנימציות
  const { scene, animations } = useGLTF("https://models.readyplayer.me/68838cc95261d5d7f3d977fe.glb");
  const avatarRef = useRef();

  // בדיקה אם יש אנימציות מוכנות
  console.log("🎬 scene:", scene);

  // תנועה עדינה
  useFrame((state) => {
    if (avatarRef.current) {
      // סיבוב איטי סביב ציר Y
      avatarRef.current.rotation.y += 0.005;

      // נשימה – תנועה מעלה/מטה קלה
      avatarRef.current.position.y = -2.5 + Math.sin(state.clock.getElapsedTime() * 1.5) * 0.05;

      // תנודות ראש קלות בציר X
      avatarRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.02;
    }
  });

  return (
    <primitive
      object={scene}
      ref={avatarRef}
      scale={2.2}
      position={[-1, -4, -1]}
    />
  );
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