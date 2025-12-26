'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function GlobeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (!containerRef.current || initialized.current) return
    initialized.current = true

    const container = containerRef.current

    // Use window dimensions directly
    const width = window.innerWidth
    const height = 700

    // Scene setup
    const scene = new THREE.Scene()

    // Camera - positioned to see the globe on the right
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
    camera.position.set(0, 0, 5)

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Globe group - positioned to the right
    const globe = new THREE.Group()
    globe.position.set(2.5, 0, 0)
    scene.add(globe)

    // Main wireframe sphere
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32)
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    globe.add(sphere)

    // Add latitude circles
    for (let lat = -60; lat <= 60; lat += 30) {
      const phi = (90 - lat) * (Math.PI / 180)
      const radius = 2 * Math.sin(phi)
      const y = 2 * Math.cos(phi)

      const points: THREE.Vector3[] = []
      for (let i = 0; i <= 64; i++) {
        const theta = (i / 64) * Math.PI * 2
        points.push(new THREE.Vector3(
          radius * Math.cos(theta),
          y,
          radius * Math.sin(theta)
        ))
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({
        color: 0x10b981,
        transparent: true,
        opacity: 0.5,
      })
      const line = new THREE.Line(geometry, material)
      globe.add(line)
    }

    // Add some dots on the globe surface
    const dotsGeometry = new THREE.BufferGeometry()
    const dotsPositions: number[] = []
    for (let i = 0; i < 50; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      dotsPositions.push(
        2.05 * Math.sin(phi) * Math.cos(theta),
        2.05 * Math.cos(phi),
        2.05 * Math.sin(phi) * Math.sin(theta)
      )
    }
    dotsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(dotsPositions, 3))
    const dotsMaterial = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 0.08,
      transparent: true,
      opacity: 0.8,
    })
    const dots = new THREE.Points(dotsGeometry, dotsMaterial)
    globe.add(dots)

    // Rockets array
    const rockets: Array<{
      mesh: THREE.Group
      progress: number
      startPos: THREE.Vector3
      endPos: THREE.Vector3
      speed: number
    }> = []

    // Function to create and launch a rocket
    function launchRocket() {
      const rocket = new THREE.Group()

      // Rocket body (white cone)
      const coneGeo = new THREE.ConeGeometry(0.04, 0.15, 8)
      const coneMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
      const cone = new THREE.Mesh(coneGeo, coneMat)
      cone.rotation.x = Math.PI
      rocket.add(cone)

      // Engine glow
      const glowGeo = new THREE.SphereGeometry(0.06, 8, 8)
      const glowMat = new THREE.MeshBasicMaterial({
        color: 0x10b981,
        transparent: true,
        opacity: 0.8,
      })
      const glow = new THREE.Mesh(glowGeo, glowMat)
      glow.position.y = -0.1
      rocket.add(glow)

      // Random start position on globe
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const startPos = new THREE.Vector3(
        2 * Math.sin(phi) * Math.cos(theta) + 2.5,
        2 * Math.cos(phi),
        2 * Math.sin(phi) * Math.sin(theta)
      )

      // End position (outward into space)
      const endPos = new THREE.Vector3(
        startPos.x + (startPos.x - 2.5) * 2,
        startPos.y + startPos.y * 2 + 1,
        startPos.z + startPos.z * 2
      )

      rocket.position.copy(startPos)
      scene.add(rocket)

      rockets.push({
        mesh: rocket,
        progress: 0,
        startPos,
        endPos,
        speed: 0.003 + Math.random() * 0.002,
      })
    }

    // Launch initial rockets
    launchRocket()
    setTimeout(launchRocket, 800)
    setTimeout(launchRocket, 1600)

    // Launch new rockets periodically
    const launchInterval = setInterval(() => {
      if (rockets.length < 5) {
        launchRocket()
      }
    }, 2000)

    // Stars background
    const starsGeometry = new THREE.BufferGeometry()
    const starsPositions: number[] = []
    for (let i = 0; i < 500; i++) {
      starsPositions.push(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        -10 - Math.random() * 30
      )
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsPositions, 3))
    const starsMaterial = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 0.05,
      transparent: true,
      opacity: 0.5,
    })
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Animation
    let animationId: number

    function animate() {
      // Rotate globe
      globe.rotation.y += 0.002

      // Animate rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const rocket = rockets[i]
        rocket.progress += rocket.speed

        if (rocket.progress >= 1) {
          scene.remove(rocket.mesh)
          rockets.splice(i, 1)
          continue
        }

        // Move along path
        rocket.mesh.position.lerpVectors(
          rocket.startPos,
          rocket.endPos,
          rocket.progress
        )

        // Point in direction of travel
        const direction = new THREE.Vector3()
          .subVectors(rocket.endPos, rocket.startPos)
          .normalize()
        rocket.mesh.lookAt(
          rocket.mesh.position.clone().add(direction)
        )
        rocket.mesh.rotateX(Math.PI / 2)

        // Fade out near end
        if (rocket.progress > 0.7) {
          const fade = 1 - (rocket.progress - 0.7) / 0.3
          rocket.mesh.children.forEach((child) => {
            if (child instanceof THREE.Mesh) {
              ;(child.material as THREE.MeshBasicMaterial).opacity = fade
            }
          })
        }
      }

      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const newWidth = window.innerWidth
      camera.aspect = newWidth / height
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, height)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      clearInterval(launchInterval)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  )
}
