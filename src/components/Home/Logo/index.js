import React, { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoA from '../../../assets/images/test8.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outLineLogoRef = useRef()
  const solidLogoRef = useRef()
  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)
  //   // gsap
  //   //   .timeline()
  //   //   .to(bgRef.current, { duration: 1, opacity: 1 })
  //   //   .from(solidLogoRef.current, { drawSVG: 0, duration: 20 })

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 4,
  //       duration: 4,
  //     }
  //   )
  // }, [])
  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} src={LogoA} className="solid-logo" alt="logoA" />
      {/* <svg
        width="48.008"
        height="57.305"
        viewBox="0 0 48.008 57.305"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="svgGroup"
          stroke-linecap="round"
          fill-rule="evenodd"
          font-size="9pt"
          stroke="#000"
          stroke-width="mm"
          fill="none"
          className="svg-container"
        >
          <path
            ref={outLineLogoRef}
            d="M 48.008 57.305 L 43.789 57.305 L 36.016 37.109 L 12.031 37.109 L 4.102 57.305 L 0 57.305 L 22.461 0 L 26.133 0 L 48.008 57.305 Z M 13.398 33.477 L 34.727 33.477 L 26.836 12.07 A 48.128 48.128 0 0 1 26.671 11.631 Q 26.448 11.027 26.167 10.228 A 139.986 139.986 0 0 1 26.074 9.961 Q 25.625 8.672 25.137 7.227 A 136.797 136.797 0 0 0 24.653 5.82 A 116.633 116.633 0 0 0 24.18 4.492 Q 23.789 5.859 23.32 7.227 A 728.342 728.342 0 0 0 22.639 9.222 A 649.563 649.563 0 0 0 22.422 9.863 A 69.957 69.957 0 0 1 22.002 11.069 A 51.209 51.209 0 0 1 21.602 12.148 L 13.398 33.477 Z"
            vector-effect="non-scaling-stroke"
          />
        </g>
      </svg> */}
    </div>
  )
}

export default Logo
