import {Environment, OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Experience} from "./components/Experience";
import {SocketManager} from "./components/SocketManager";

function App() {

    return (
        <div className='h-full'>
            <SocketManager/>
            <Canvas camera={{
                position: [8, 8, 8],
                fov: 30
            }}>

                <Experience/>

                <Environment preset={'sunset'}/>
                <ambientLight intensity={0.3}/>
                <OrbitControls/>
            </Canvas>
        </div>
    )
}

export default App
