'use client'
import { useRef, useEffect, useState } from "react"
import { useWindowListener } from "@/hooks/useWindowListener"

export default function VideoPlayer({vdoSrc, isPlaying, onPlayPause} : 
    {vdoSrc:string, isPlaying:boolean, onPlayPause:Function}) {

    const vdoRef = useRef<HTMLVideoElement>(null)

    useEffect(()=>{
        if(isPlaying) {
            vdoRef.current?.play()
        } else {
            vdoRef.current?.pause()
        }
    }, [isPlaying])

    useWindowListener("resize", (e)=>{alert('Window Width is ' 
    + (e.target as Window).innerWidth)});

    return (
        <video className="w-[40%]" src={vdoSrc} ref={vdoRef} controls loop muted
        onPlay={()=>{onPlayPause(true)}} onPause={()=>{onPlayPause(false)}}/>
    )
}