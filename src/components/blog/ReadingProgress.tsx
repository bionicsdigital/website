'use client'
import { useEffect, useState } from 'react'
export default function ReadingProgress(){const [progress,setProgress]=useState(0);useEffect(()=>{const update=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setProgress(max?Math.min(100,window.scrollY/max*100):0)};update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[]);return <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent"><div className="h-full bg-emerald-500" style={{width:`${progress}%`}} /></div>}
