import { useGLTF } from "@react-three/drei"
const Computers = ({isMobile}) => {
    const computer = useGLTF("./desktop_pc/scene.gltf")
    return (
      <mesh>
        <hemisphereLight intensity={3} groundColor="black"/>
        <pointLight intensity={1}/>
        <primitive object={computer.scene}
        scale = {isMobile?0.7:0.75}
        position = {isMobile?[0,-3,-2.2]:[0,-3.25,-1.5]}
        rotation = {[-0.01,-0.2,-0.1]}
        />
      </mesh>
    )
}
export default Computers