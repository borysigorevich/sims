import React, {useEffect} from 'react';
import {io} from 'socket.io-client'
import {atom, useAtom} from 'jotai'

export const socket = io('http://localhost:3001')

type CharactersType = {
    id: string,
    position: [number, number, number]
    bodyColor: string
    headColor: string
    feetColor: string
}[]

export const charactersAtom = atom<CharactersType>([])

export const SocketManager = () => {

    const [_, setCharacters] = useAtom(charactersAtom)

    useEffect(() => {

        const onConnect = () => {
            console.log('connected')
        }

        const onDisconnect = () => {
            console.log('disconnected')
        }

        const onMessage = (message: string) => {
            console.log('hello', message)
        }

        const onCharacters = (characters: CharactersType) => {
            console.log('characters', characters)
            setCharacters(characters)
        }

        socket.on('connect', onConnect)
        socket.on('disconnect', onDisconnect)
        socket.on('hello', onMessage)
        socket.on('characters', onCharacters)

        return () => {
            socket.off('connect', onConnect)
            socket.off('disconnect', onDisconnect)
            socket.off('message', onMessage)
            socket.off('characters', onCharacters)
        }
    }, []);

 return (
  <>

  </>
 );
};