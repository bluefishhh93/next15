import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { folder, useControls } from 'leva'

export default function LightControl() {
  const ambientRef = useRef<THREE.AmbientLight>(null)
  const directionalRef = useRef<THREE.DirectionalLight>(null)
  const pointRef = useRef<THREE.PointLight>(null)
  const spotRef = useRef<THREE.SpotLight>(null)

  const [ambientControls] = useControls(() => ({
    'Ambient Light': folder({
      visible: { value: false, label: 'Visible' },
      color: { value: 'white', label: 'Color' }
    })
  }))

  const [directionalControls] = useControls(() => ({
    'Directional Light': folder({
      visible: { value: true, label: 'Visible' },
      position: { 
        value: { x: 1, y: 1, z: 1 }, 
        label: 'Position',
        step: 0.1
      },
      color: { value: 'white', label: 'Color' }
    })
  }))

  const [pointControls] = useControls(() => ({
    'Point Light': folder({
      visible: { value: false, label: 'Visible' },
      position: { 
        value: { x: 2, y: 0, z: 0 }, 
        label: 'Position',
        step: 0.1
      },
      color: { value: 'white', label: 'Color' }
    })
  }))

  const [spotControls] = useControls(() => ({
    'Spot Light': folder({
      visible: { value: false, label: 'Visible' },
      position: { 
        value: { x: 3, y: 2.5, z: 1 }, 
        label: 'Position',
        step: 0.1
      },
      color: { value: 'white', label: 'Color' }
    })
  }))

  useEffect(() => {
    if (ambientRef.current) {
      ambientRef.current.visible = ambientControls.visible
      ambientRef.current.color = new THREE.Color(ambientControls.color)
    }
  }, [ambientControls])

  useEffect(() => {
    if (directionalRef.current) {
      directionalRef.current.visible = directionalControls.visible
      directionalRef.current.position.copy(directionalControls.position)
      directionalRef.current.color = new THREE.Color(directionalControls.color)
    }
  }, [directionalControls])

  useEffect(() => {
    if (pointRef.current) {
      pointRef.current.visible = pointControls.visible
      pointRef.current.position.copy(pointControls.position)
      pointRef.current.color = new THREE.Color(pointControls.color)
    }
  }, [pointControls])

  useEffect(() => {
    if (spotRef.current) {
      spotRef.current.visible = spotControls.visible
      spotRef.current.position.copy(spotControls.position)
      spotRef.current.color = new THREE.Color(spotControls.color)
    }
  }, [spotControls])

  return (
    <>
      <ambientLight ref={ambientRef} />
      <directionalLight ref={directionalRef} />
      <pointLight ref={pointRef} />
      <spotLight ref={spotRef} />
    </>
  )
}