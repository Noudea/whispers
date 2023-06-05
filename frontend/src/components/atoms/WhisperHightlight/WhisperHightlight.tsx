"use client"
import styles from './WhisperHightlight.module.css'
import {useAppContext} from "@/context/AppContext";

const WhisperHightlight = () => {

  const { whisperHightlightData } = useAppContext();

  return(
    <>
      <style jsx>{`
      .highlight {
        height: ${whisperHightlightData.height}px;
        width: ${whisperHightlightData.width}px;
        opacity: ${whisperHightlightData.visible ? 1 : 0};
        transform: translate3d(${whisperHightlightData.left}px, ${whisperHightlightData.top}px, 0px);
        will-change: transform,height,opacity;
        -webkit-transition-property: height,opacity;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-in-out;
        transition-timing-function: ease-in-out;
        transition-property:transform, height, opacity;
      }
`}</style>
      <div className={`${styles.whisperHighlight} highlight`}>
      </div>
    </>
  )
}

export default WhisperHightlight
