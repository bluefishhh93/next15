import { useEffect, useRef, useState } from "react";

const Light = () => {
    const directionalLightRef = useRef()
    const [isReady, setIsReady] = useState(false)
    useEffect(() => {
        if (directionalLightRef.current) {
            setIsReady(true)
        }
    })
    return (
        <>
            <directionalLight
                castShadow
                ref={directionalLightRef}
                position={[5, 50, 60]}
                rotation={[0.8, 0, 0]}
                color={0xffffff}
                intensity={4}
            />
            {isReady && (
                <directionalLightHelper args={[directionalLightRef.current!, 2, 0xff0000]} />
            )}
        </>
    )
}
export default Light
