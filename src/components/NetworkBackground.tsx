"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  originalPos: THREE.Vector3;
}

export default function NetworkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 250;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle nodes configuration
    const count = 75;
    const particles: Particle[] = [];
    const positions = new Float32Array(count * 3);
    const particleGeometry = new THREE.BufferGeometry();

    const rangeX = width > 768 ? 400 : 200;
    const rangeY = height > 768 ? 300 : 150;

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * rangeX;
      const y = (Math.random() - 0.5) * rangeY;
      const z = (Math.random() - 0.5) * 100;

      const pos = new THREE.Vector3(x, y, z);
      particles.push({
        position: pos,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.4,
          (Math.random() - 0.5) * 0.4,
          (Math.random() - 0.5) * 0.2
        ),
        originalPos: pos.clone(),
      });

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Node Material (glowing blue-purple points)
    const pMaterial = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 3.5,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const pointCloud = new THREE.Points(particleGeometry, pMaterial);
    scene.add(pointCloud);

    // Lines Connecting Nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    });

    // Create line geometry with placeholders
    const maxConnections = count * 6; // Max connecting threads
    const linePositions = new Float32Array(maxConnections * 2 * 3); // 2 points per line, 3 coordinates
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // Mouse Tracking
    const mouse = new THREE.Vector2(0, 0);
    const targetMouse = new THREE.Vector2(0, 0);

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize coordinate: -1 to +1
      targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Window Resize
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const tempPos = new THREE.Vector3();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Lerp mouse coordinates for smooth parallax
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      // Parallax effect on whole scene
      scene.rotation.y = mouse.x * 0.06;
      scene.rotation.x = -mouse.y * 0.06;

      const posAttribute = pointCloud.geometry.getAttribute(
        "position"
      ) as THREE.BufferAttribute;
      const linePosAttribute = lineMesh.geometry.getAttribute(
        "position"
      ) as THREE.BufferAttribute;

      // Update particle positions
      for (let i = 0; i < count; i++) {
        const particle = particles[i];

        // Move particle
        particle.position.add(particle.velocity);

        // Soft bounce off virtual boundary box
        if (Math.abs(particle.position.x) > rangeX / 2 + 50) {
          particle.velocity.x *= -1;
        }
        if (Math.abs(particle.position.y) > rangeY / 2 + 50) {
          particle.velocity.y *= -1;
        }
        if (Math.abs(particle.position.z) > 100) {
          particle.velocity.z *= -1;
        }

        // Apply slight attraction to mouse cursor position (transformed into scene coords)
        const mouseInScene = new THREE.Vector3(
          mouse.x * (rangeX / 3),
          mouse.y * (rangeY / 3),
          0
        );
        const distToMouse = particle.position.distanceTo(mouseInScene);
        if (distToMouse < 120) {
          const force = (120 - distToMouse) / 120;
          const pull = mouseInScene.clone().sub(particle.position).normalize().multiplyScalar(force * 0.15);
          particle.position.add(pull);
        }

        posAttribute.setXYZ(
          i,
          particle.position.x,
          particle.position.y,
          particle.position.z
        );
      }
      posAttribute.needsUpdate = true;

      // Update connecting threads
      let lineIndex = 0;
      const maxDistance = 65; // Distance to form a link

      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dist = particles[i].position.distanceTo(particles[j].position);

          if (dist < maxDistance && lineIndex < maxConnections) {
            // Add connection segment
            linePosAttribute.setXYZ(
              lineIndex * 2,
              particles[i].position.x,
              particles[i].position.y,
              particles[i].position.z
            );
            linePosAttribute.setXYZ(
              lineIndex * 2 + 1,
              particles[j].position.x,
              particles[j].position.y,
              particles[j].position.z
            );
            lineIndex++;
          }
        }
      }

      // Zero out the remaining buffer indices to clear old lines
      for (let k = lineIndex; k < maxConnections; k++) {
        linePosAttribute.setXYZ(k * 2, 0, 0, 0);
        linePosAttribute.setXYZ(k * 2 + 1, 0, 0, 0);
      }

      linePosAttribute.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-transparent"
      style={{ opacity: 0.65 }}
    />
  );
}
