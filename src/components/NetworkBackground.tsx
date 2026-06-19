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

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    // Attempt WebGL context initialization
    try {
      scene = new THREE.Scene();
      
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 250;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

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

      const pMaterial = new THREE.PointsMaterial({
        color: 0x3b82f6,
        size: 3.5,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });

      const pointCloud = new THREE.Points(particleGeometry, pMaterial);
      scene.add(pointCloud);

      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
      });

      const maxConnections = count * 6;
      const linePositions = new Float32Array(maxConnections * 2 * 3);
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(linePositions, 3)
      );
      const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lineMesh);

      const mouse = new THREE.Vector2(0, 0);
      const targetMouse = new THREE.Vector2(0, 0);

      const handleMouseMove = (event: MouseEvent) => {
        targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener("mousemove", handleMouseMove);

      const handleResize = () => {
        if (!container || !camera || !renderer) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        mouse.x += (targetMouse.x - mouse.x) * 0.05;
        mouse.y += (targetMouse.y - mouse.y) * 0.05;

        scene.rotation.y = mouse.x * 0.06;
        scene.rotation.x = -mouse.y * 0.06;

        const posAttribute = pointCloud.geometry.getAttribute(
          "position"
        ) as THREE.BufferAttribute;
        const linePosAttribute = lineMesh.geometry.getAttribute(
          "position"
        ) as THREE.BufferAttribute;

        for (let i = 0; i < count; i++) {
          const particle = particles[i];
          particle.position.add(particle.velocity);

          if (Math.abs(particle.position.x) > rangeX / 2 + 50) {
            particle.velocity.x *= -1;
          }
          if (Math.abs(particle.position.y) > rangeY / 2 + 50) {
            particle.velocity.y *= -1;
          }
          if (Math.abs(particle.position.z) > 100) {
            particle.velocity.z *= -1;
          }

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

        let lineIndex = 0;
        const maxDistance = 65;

        for (let i = 0; i < count; i++) {
          for (let j = i + 1; j < count; j++) {
            const dist = particles[i].position.distanceTo(particles[j].position);

            if (dist < maxDistance && lineIndex < maxConnections) {
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

        for (let k = lineIndex; k < maxConnections; k++) {
          linePosAttribute.setXYZ(k * 2, 0, 0, 0);
          linePosAttribute.setXYZ(k * 2 + 1, 0, 0, 0);
        }

        linePosAttribute.needsUpdate = true;
        renderer?.render(scene, camera);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        if (renderer && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        scene.clear();
        renderer?.dispose();
      };
    } catch (webglError) {
      console.warn("WebGL initialization failed. Loading HTML5 Canvas 2D fallback particle simulation.", webglError);

      // HTML5 Canvas 2D Fallback
      const canvas2d = document.createElement("canvas");
      canvas2d.width = width;
      canvas2d.height = height;
      canvas2d.style.position = "absolute";
      canvas2d.style.top = "0";
      canvas2d.style.left = "0";
      canvas2d.style.width = "100%";
      canvas2d.style.height = "100%";
      container.appendChild(canvas2d);

      const ctx = canvas2d.getContext("2d");
      if (!ctx) return;

      const particles2d = Array.from({ length: 45 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      }));

      let mouse2d = { x: width / 2, y: height / 2 };

      const handleMouseMove2d = (e: MouseEvent) => {
        const rect = canvas2d.getBoundingClientRect();
        mouse2d.x = e.clientX - rect.left;
        mouse2d.y = e.clientY - rect.top;
      };

      window.addEventListener("mousemove", handleMouseMove2d);

      const handleResize2d = () => {
        if (!canvas2d || !container) return;
        canvas2d.width = container.clientWidth;
        canvas2d.height = container.clientHeight;
      };

      window.addEventListener("resize", handleResize2d);

      const animate2d = () => {
        animationFrameId = requestAnimationFrame(animate2d);
        const w = canvas2d.width;
        const h = canvas2d.height;

        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "rgba(59, 130, 246, 0.4)";
        ctx.strokeStyle = "rgba(139, 92, 246, 0.08)";

        particles2d.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;

          const dx = mouse2d.x - p.x;
          const dy = mouse2d.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            p.x += (dx / dist) * 0.2;
            p.y += (dy / dist) * 0.2;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.lineWidth = 0.8;
        for (let i = 0; i < particles2d.length; i++) {
          for (let j = i + 1; j < particles2d.length; j++) {
            const p1 = particles2d[i];
            const p2 = particles2d[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 80) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      };

      animate2d();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("mousemove", handleMouseMove2d);
        window.removeEventListener("resize", handleResize2d);
        if (container.contains(canvas2d)) {
          container.removeChild(canvas2d);
        }
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-transparent"
      style={{ opacity: 0.65 }}
    />
  );
}
