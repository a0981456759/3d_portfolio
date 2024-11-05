import React from 'react'
import {Circles} from '@react-three/fiber'
import Loader from '../components/Loader'
import {Suspense} from 'react'
      {/* <div className='absolute top-28 left-0 right-0 z-10
      flex item-center justify-center'>
      </div> */}
const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{near: 0.1, far: 1000}}>
        <Suspense fallback={<Loader/>}></Suspense>

      </Canvas>
    </section>
  )
}

export default Home