import {useCursor} from "@react-three/drei";
import {useAtom} from "jotai";
import {useState} from "react";
import {Vector3} from "three";
import {Model} from "../Char/view.tsx";
import {charactersAtom, socket} from "../SocketManager";


export const Experience = () => {

    const [characters] = useAtom(charactersAtom)
    const [onFloor, setOnFloor] = useState(false)

    useCursor(onFloor, 'pointer', 'auto')

    console.log({characters}, 'client')

    return (
        <>
            <mesh
                rotation={[Math.PI * -0.5, 0, 0]}
                onClick={(e) => socket.emit('move', [e.point.x, 0, e.point.z])}
                onPointerOver={(e) => setOnFloor(true)}
                onPointerOut={(e) => setOnFloor(false)}
            >
                <planeGeometry args={[10, 10]}/>
                <meshStandardMaterial color={'#f0f0f0'}/>
            </mesh>

            {characters.map(({id, position, ...rest}) => {
                return <Model
                    key={id}
                    position={new Vector3(...position)}
                    {...rest}
                />
            })}
            {/*<Model position={new Vector3(5, 0, 2)} bodyColor={'teal'}/>*/}
        </>
    );
};