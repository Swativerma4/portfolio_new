import React from 'react'
import "./preloader.css"
import { preLoaderAnim } from '.';
export const preloader = () => {
    useEffect(()=>{
        preLoaderAnim()
      },[]);
  return (
    <div className='preloader'>
    <div className='texts-container'>
        <span>Developer,</span>
        <span>Curator,</span>
        <span>Vibe.</span>
    </div>
</div>

  )
}
