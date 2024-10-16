import {Suspense,useEffect,useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls,Preload} from "@react-three/drei"
import CanvasLoader from "../Loader";
import {Computers} from "./subcomponents"

const ComputersCanvas = ()=>{
  const [isMobile , setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{position:[20,3,5], fov: 25}}
    gl={{preserveDrawingBuffer:false}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Computers isMobile= {isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas