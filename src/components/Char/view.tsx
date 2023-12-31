/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/char.glb -o src/components/Char/view.tsx 
*/

import {useAnimations, useGLTF} from '@react-three/drei'
import {useFrame, useGraph} from "@react-three/fiber";
import {useEffect, useMemo, useRef, useState} from "react";
import {Group, Vector3} from "three";
import {SkeletonUtils} from "three-stdlib";

const MOVEMENT_SPEED = 0.032

export const Model = (
    {
        bodyColor = 'green',
        headColor = 'red',
        feetColor = 'yellow',
        position = new Vector3(0)
    }) => {

    const memoPosition = useMemo(() => position, [])

    const group = useRef()
    // @ts-ignore
    const {scene,  materials, animations} = useGLTF('/models/char.glb')

    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])

    const {nodes} = useGraph(clone)

    const [animation, setAnimation] = useState('CharacterArmature|Walk')

    const {actions} = useAnimations(animations, group)

    console.log({actions})

    useEffect(() => {
        // @ts-ignore
        actions[animation].reset().fadeIn(0.5).play()

        return () => {
            actions[animation]?.fadeOut(0.5)
        }
    }, [animation]);

    useFrame((state, delta) => {

        if(!group.current) return

        const group3D = group.current as Group

        if(group3D.position.distanceTo(position) > 0.1) {

            const direction = group3D.position.clone().sub(position).normalize().multiplyScalar(MOVEMENT_SPEED)
            group3D.position.sub(direction)
            group3D.lookAt(position)
            setAnimation('CharacterArmature|Run')
        } else {
            setAnimation('CharacterArmature|Idle')
        }
    })

    return (
        <group ref={group} dispose={null} position={memoPosition}>
            <group name="Root_Scene">
                <group name="RootNode">
                    <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <primitive object={nodes.Root}/>
                    </group>
                    <group name="Medieval_Body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        {/*@ts-ignore*/}
                        <skinnedMesh name="Medieval_Body_1" geometry={nodes.Medieval_Body_1.geometry}
                                     /*@ts-ignore*/
                                     material={materials.Black} skeleton={nodes.Medieval_Body_1.skeleton}/>
                        {/*@ts-ignore*/}
                        <skinnedMesh name="Medieval_Body_2" geometry={nodes.Medieval_Body_2.geometry}
                                     /*@ts-ignore*/
                                     material={materials.LightBrown} skeleton={nodes.Medieval_Body_2.skeleton}>
                            <meshStandardMaterial color={bodyColor}/>
                        </skinnedMesh>
                        {/*@ts-ignore*/}
                        <skinnedMesh name="Medieval_Body_3" geometry={nodes.Medieval_Body_3.geometry}
                            /*@ts-ignore*/
                                     material={materials.DarkBrown} skeleton={nodes.Medieval_Body_3.skeleton}>
                            <meshStandardMaterial color={bodyColor}/>
                        </skinnedMesh>
                        {/*@ts-ignore*/}
                        <skinnedMesh name="Medieval_Body_4" geometry={nodes.Medieval_Body_4.geometry}
                            /*@ts-ignore*/
                                     material={materials.Skin} skeleton={nodes.Medieval_Body_4.skeleton}/>
                        {/*@ts-ignore*/}
                        <skinnedMesh name="Medieval_Body_5" geometry={nodes.Medieval_Body_5.geometry}
                            /*@ts-ignore*/
                                     material={materials.Gold} skeleton={nodes.Medieval_Body_5.skeleton}/>
                        {/*@ts-ignore*/}
                        <skinnedMesh name="Medieval_Body_6" geometry={nodes.Medieval_Body_6.geometry}
                            /*@ts-ignore*/
                                     material={materials.Metal} skeleton={nodes.Medieval_Body_6.skeleton}/>
                    </group>
                    <group name="Medieval_Feet" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        {/*@ts-ignore*/}
                        <skinnedMesh name="Medieval_Feet_1" geometry={nodes.Medieval_Feet_1.geometry}
                            /*@ts-ignore*/
                                     material={materials.LightBrown} skeleton={nodes.Medieval_Feet_1.skeleton}>
                            <meshStandardMaterial color={feetColor}/>
                        </skinnedMesh>
                        {/*@ts-ignore*/}
                        <skinnedMesh name="Medieval_Feet_2" geometry={nodes.Medieval_Feet_2.geometry}
                            /*@ts-ignore*/
                                     material={materials.DarkBrown} skeleton={nodes.Medieval_Feet_2.skeleton}/>
                    </group>
                    <group name="Medieval_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        {/*@ts-ignore*/}
                        <skinnedMesh name="Medieval_Head_1" geometry={nodes.Medieval_Head_1.geometry}
                            /*@ts-ignore*/
                                     material={materials.Black} skeleton={nodes.Medieval_Head_1.skeleton}/>
                        {/*@ts-ignore*/}
                        <skinnedMesh name="Medieval_Head_2" geometry={nodes.Medieval_Head_2.geometry}
                            /*@ts-ignore*/
                                     material={materials.DarkBrown} skeleton={nodes.Medieval_Head_2.skeleton}>
                            <meshStandardMaterial color={headColor}/>
                        </skinnedMesh>
                        {/*@ts-ignore*/}
                        <skinnedMesh name="Medieval_Head_3" geometry={nodes.Medieval_Head_3.geometry}
                                     /*@ts-ignore*/
                                     material={materials.Skin} skeleton={nodes.Medieval_Head_3.skeleton}/>
                        {/*@ts-ignore*/}
                        <skinnedMesh name="Medieval_Head_4" geometry={nodes.Medieval_Head_4.geometry}
                                     /*@ts-ignore*/
                                     material={materials.White} skeleton={nodes.Medieval_Head_4.skeleton}/>
                        {/*@ts-ignore*/}
                        <skinnedMesh name="Medieval_Head_5" geometry={nodes.Medieval_Head_5.geometry}
                                     /*@ts-ignore*/
                                     material={materials.Brown} skeleton={nodes.Medieval_Head_5.skeleton}/>
                    </group>
                    {/*@ts-ignore*/}
                    <skinnedMesh name="Medieval_Legs" geometry={nodes.Medieval_Legs.geometry} material={materials.Black}
                        /*@ts-ignore*/
                                 skeleton={nodes.Medieval_Legs.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={100}/>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/char.glb')
