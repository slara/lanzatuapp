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

    // Futuristic color palette
    const CYAN = 0x00f5ff
    const PURPLE = 0x8b5cf6

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

    // Inner glow sphere
    const glowGeometry = new THREE.SphereGeometry(1.95, 32, 32)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: CYAN,
      transparent: true,
      opacity: 0.03,
    })
    const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial)
    globe.add(glowSphere)

    // Main wireframe sphere with gradient effect
    const sphereGeometry = new THREE.SphereGeometry(2, 48, 48)
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: CYAN,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    globe.add(sphere)

    // Outer atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(2.1, 32, 32)
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: CYAN,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide,
    })
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    globe.add(atmosphere)

    // Add latitude circles with varying colors
    const latitudes = [-60, -30, 0, 30, 60]
    latitudes.forEach((lat, index) => {
      const phi = (90 - lat) * (Math.PI / 180)
      const radius = 2 * Math.sin(phi)
      const y = 2 * Math.cos(phi)

      const points: THREE.Vector3[] = []
      for (let i = 0; i <= 128; i++) {
        const theta = (i / 128) * Math.PI * 2
        points.push(new THREE.Vector3(
          radius * Math.cos(theta),
          y,
          radius * Math.sin(theta)
        ))
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const color = index % 2 === 0 ? CYAN : PURPLE
      const material = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: lat === 0 ? 0.6 : 0.3,
      })
      const line = new THREE.Line(geometry, material)
      globe.add(line)
    })

    // Add longitude lines
    for (let i = 0; i < 12; i++) {
      const points: THREE.Vector3[] = []
      const theta = (i / 12) * Math.PI * 2

      for (let j = 0; j <= 64; j++) {
        const phi = (j / 64) * Math.PI
        points.push(new THREE.Vector3(
          2 * Math.sin(phi) * Math.cos(theta),
          2 * Math.cos(phi),
          2 * Math.sin(phi) * Math.sin(theta)
        ))
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({
        color: i % 3 === 0 ? PURPLE : CYAN,
        transparent: true,
        opacity: 0.2,
      })
      const line = new THREE.Line(geometry, material)
      globe.add(line)
    }

    // Add orbital rings around the globe
    const orbitGroup = new THREE.Group()
    globe.add(orbitGroup)

    // Horizontal orbit
    const orbit1Points: THREE.Vector3[] = []
    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2
      orbit1Points.push(new THREE.Vector3(
        2.6 * Math.cos(angle),
        0,
        2.6 * Math.sin(angle)
      ))
    }
    const orbit1Geometry = new THREE.BufferGeometry().setFromPoints(orbit1Points)
    const orbit1Material = new THREE.LineBasicMaterial({
      color: CYAN,
      transparent: true,
      opacity: 0.4,
    })
    const orbit1 = new THREE.Line(orbit1Geometry, orbit1Material)
    orbit1.rotation.x = Math.PI / 6
    orbitGroup.add(orbit1)

    // Tilted orbit
    const orbit2Points: THREE.Vector3[] = []
    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2
      orbit2Points.push(new THREE.Vector3(
        2.8 * Math.cos(angle),
        0,
        2.8 * Math.sin(angle)
      ))
    }
    const orbit2Geometry = new THREE.BufferGeometry().setFromPoints(orbit2Points)
    const orbit2Material = new THREE.LineBasicMaterial({
      color: PURPLE,
      transparent: true,
      opacity: 0.3,
    })
    const orbit2 = new THREE.Line(orbit2Geometry, orbit2Material)
    orbit2.rotation.x = -Math.PI / 4
    orbit2.rotation.z = Math.PI / 6
    orbitGroup.add(orbit2)

    // Add glowing dots on the globe surface (representing data points/cities)
    const dotsGeometry = new THREE.BufferGeometry()
    const dotsPositions: number[] = []
    const dotsColors: number[] = []
    const cyanColor = new THREE.Color(CYAN)
    const purpleColor = new THREE.Color(PURPLE)

    for (let i = 0; i < 80; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      dotsPositions.push(
        2.02 * Math.sin(phi) * Math.cos(theta),
        2.02 * Math.cos(phi),
        2.02 * Math.sin(phi) * Math.sin(theta)
      )
      const color = Math.random() > 0.3 ? cyanColor : purpleColor
      dotsColors.push(color.r, color.g, color.b)
    }
    dotsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(dotsPositions, 3))
    dotsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(dotsColors, 3))
    const dotsMaterial = new THREE.PointsMaterial({
      size: 0.06,
      transparent: true,
      opacity: 0.9,
      vertexColors: true,
    })
    const dots = new THREE.Points(dotsGeometry, dotsMaterial)
    globe.add(dots)

    // Add floating particles around the globe
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesPositions: number[] = []
    const particlesColors: number[] = []
    const particlesSpeeds: number[] = []

    for (let i = 0; i < 100; i++) {
      const radius = 2.5 + Math.random() * 1.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      particlesPositions.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      )
      const color = Math.random() > 0.5 ? cyanColor : purpleColor
      particlesColors.push(color.r, color.g, color.b)
      particlesSpeeds.push(0.001 + Math.random() * 0.002)
    }
    particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlesPositions, 3))
    particlesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(particlesColors, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      transparent: true,
      opacity: 0.6,
      vertexColors: true,
    })
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    globe.add(particles)

    // Rockets array
    const rockets: Array<{
      mesh: THREE.Group
      progress: number
      startPos: THREE.Vector3
      endPos: THREE.Vector3
      speed: number
      trail: THREE.Line
    }> = []

    // Function to create and launch a rocket
    function launchRocket() {
      const rocket = new THREE.Group()

      // Rocket body (sleek futuristic design)
      const coneGeo = new THREE.ConeGeometry(0.03, 0.12, 6)
      const coneMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.9,
      })
      const cone = new THREE.Mesh(coneGeo, coneMat)
      cone.rotation.x = Math.PI
      rocket.add(cone)

      // Engine glow (cyan)
      const glowGeo = new THREE.SphereGeometry(0.05, 8, 8)
      const glowMat = new THREE.MeshBasicMaterial({
        color: CYAN,
        transparent: true,
        opacity: 0.9,
      })
      const glow = new THREE.Mesh(glowGeo, glowMat)
      glow.position.y = -0.08
      rocket.add(glow)

      // Outer glow halo
      const haloGeo = new THREE.SphereGeometry(0.08, 8, 8)
      const haloMat = new THREE.MeshBasicMaterial({
        color: PURPLE,
        transparent: true,
        opacity: 0.4,
      })
      const halo = new THREE.Mesh(haloGeo, haloMat)
      halo.position.y = -0.08
      rocket.add(halo)

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
        startPos.x + (startPos.x - 2.5) * 2.5,
        startPos.y + startPos.y * 2.5 + 1,
        startPos.z + startPos.z * 2.5
      )

      rocket.position.copy(startPos)
      scene.add(rocket)

      // Create trail
      const trailGeometry = new THREE.BufferGeometry()
      const trailPositions = new Float32Array(30 * 3)
      for (let i = 0; i < 30; i++) {
        trailPositions[i * 3] = startPos.x
        trailPositions[i * 3 + 1] = startPos.y
        trailPositions[i * 3 + 2] = startPos.z
      }
      trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3))
      const trailMaterial = new THREE.LineBasicMaterial({
        color: CYAN,
        transparent: true,
        opacity: 0.5,
      })
      const trail = new THREE.Line(trailGeometry, trailMaterial)
      scene.add(trail)

      rockets.push({
        mesh: rocket,
        progress: 0,
        startPos,
        endPos,
        speed: 0.004 + Math.random() * 0.003,
        trail,
      })
    }

    // Launch initial rockets
    launchRocket()
    setTimeout(launchRocket, 600)
    setTimeout(launchRocket, 1200)

    // Launch new rockets periodically
    const launchInterval = setInterval(() => {
      if (rockets.length < 6) {
        launchRocket()
      }
    }, 1800)

    // Stars background with futuristic colors
    const starsGeometry = new THREE.BufferGeometry()
    const starsPositions: number[] = []
    const starsColors: number[] = []
    for (let i = 0; i < 600; i++) {
      starsPositions.push(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        -15 - Math.random() * 40
      )
      // Mix of cyan, purple, and white stars
      const rand = Math.random()
      if (rand < 0.4) {
        starsColors.push(0, 0.96, 1) // cyan
      } else if (rand < 0.7) {
        starsColors.push(0.55, 0.36, 0.96) // purple
      } else {
        starsColors.push(1, 1, 1) // white
      }
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsPositions, 3))
    starsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starsColors, 3))
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      vertexColors: true,
    })
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Animation variables
    let time = 0

    // Animation
    let animationId: number

    function animate() {
      time += 0.01

      // Rotate globe slowly
      globe.rotation.y += 0.0015

      // Pulse the inner glow
      glowMaterial.opacity = 0.03 + Math.sin(time * 2) * 0.01

      // Rotate orbital rings at different speeds
      orbitGroup.rotation.y += 0.003
      orbitGroup.rotation.x = Math.sin(time * 0.5) * 0.1

      // Animate floating particles
      const positions = particlesGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        const speed = particlesSpeeds[i / 3]
        const x = positions[i]
        const z = positions[i + 2]
        const angle = Math.atan2(z, x) + speed
        const radius = Math.sqrt(x * x + z * z)
        positions[i] = radius * Math.cos(angle)
        positions[i + 2] = radius * Math.sin(angle)
      }
      particlesGeometry.attributes.position.needsUpdate = true

      // Animate rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const rocket = rockets[i]
        rocket.progress += rocket.speed

        if (rocket.progress >= 1) {
          scene.remove(rocket.mesh)
          scene.remove(rocket.trail)
          rockets.splice(i, 1)
          continue
        }

        // Move along path with easing
        const easedProgress = rocket.progress < 0.5
          ? 2 * rocket.progress * rocket.progress
          : 1 - Math.pow(-2 * rocket.progress + 2, 2) / 2

        rocket.mesh.position.lerpVectors(
          rocket.startPos,
          rocket.endPos,
          easedProgress
        )

        // Update trail
        const trailPositions = rocket.trail.geometry.attributes.position.array as Float32Array
        for (let j = trailPositions.length - 3; j >= 3; j -= 3) {
          trailPositions[j] = trailPositions[j - 3]
          trailPositions[j + 1] = trailPositions[j - 2]
          trailPositions[j + 2] = trailPositions[j - 1]
        }
        trailPositions[0] = rocket.mesh.position.x
        trailPositions[1] = rocket.mesh.position.y
        trailPositions[2] = rocket.mesh.position.z
        rocket.trail.geometry.attributes.position.needsUpdate = true

        // Point in direction of travel
        const direction = new THREE.Vector3()
          .subVectors(rocket.endPos, rocket.startPos)
          .normalize()
        rocket.mesh.lookAt(
          rocket.mesh.position.clone().add(direction)
        )
        rocket.mesh.rotateX(Math.PI / 2)

        // Fade out near end
        if (rocket.progress > 0.6) {
          const fade = 1 - (rocket.progress - 0.6) / 0.4
          rocket.mesh.children.forEach((child) => {
            if (child instanceof THREE.Mesh) {
              ;(child.material as THREE.MeshBasicMaterial).opacity = fade * 0.9
            }
          })
          ;(rocket.trail.material as THREE.LineBasicMaterial).opacity = fade * 0.5
        }
      }

      // Subtle star twinkling
      if (Math.random() < 0.02) {
        starsMaterial.opacity = 0.5 + Math.random() * 0.2
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
