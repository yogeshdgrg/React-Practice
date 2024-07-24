import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

// const App = () => {
//   const boxRef = useRef()
//   const circleRef = useRef()
//   const containerRef = useRef()
//   // console.log(boxRef.current)
//   useGSAP(()=>{
//     gsap.from(boxRef.current,{
//       opacity:0,
//       rotate:720,
//       duration:1,
//       delay:1
//     })
//   },{scope:containerRef})

//   useGSAP(()=>{
//     gsap.from(circleRef.current,{
//       opacity:0,
//       duration:1,
//       delay:1,
//       ease:'circ.in'
//     })
//   },{scope:containerRef})

//   return (
//     <>
//       <div ref={containerRef} className='container'>
//         <div ref={circleRef} className='circle'></div>
//         <div ref={boxRef} className='box'></div>
//       </div>
//       {/* <div className='container1'>
//         <div ref={circleRef} className='circle'></div>
//         <div ref={boxRef} className='box'></div>
//       </div> */}
//     </>
//   )
// }

const App = () => {
  const { contextSafe } = useGSAP()
  const handleAnimate = contextSafe(() => {
    gsap.from(".box", {
      y: 600,
      opacity: 0,
      duration: 2,
    })
  })
  return (
    <>
      <button onClick={handleAnimate} className="btn">
        Animate
      </button>
      <div className="box"></div>
    </>
  )
}

export default App
