import { useEffect, useRef } from 'react';

const FallingPetals = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Petal settings
    const petalCount = 50;
    const petals: Petal[] = [];
    const colors = ['rgba(255, 228, 225, 0.8)', 'rgba(255, 192, 203, 0.8)', 'rgba(255, 182, 193, 0.8)']; // Pale pinks

    class Petal {
      x: number;
      y: number;
      size: number;
      speed: number;
      velY: number;
      velX: number;
      angle: number;
      spin: number;
      color: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height - height;
        this.size = Math.random() * 10 + 5;
        this.speed = Math.random() * 1 + 0.5;
        this.velY = this.speed;
        this.velX = 0;
        this.angle = Math.random() * 360;
        this.spin = Math.random() < 0.5 ? 1 : -1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.y += this.velY;
        this.x += Math.sin(this.angle * Math.PI / 180) * 0.5;
        this.angle += this.spin * 0.5;

        if (this.y > height) {
          this.y = -this.size;
          this.x = Math.random() * width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        
        // Draw a simple petal shape
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(this.size / 2, -this.size / 2, this.size, 0, 0, this.size);
        ctx.bezierCurveTo(-this.size, -2, -this.size / 2, -this.size / 1, 1, -1);
        ctx.fill();
        
        ctx.restore();
      }
    }

    const init = () => {
      for (let i = 0; i < petalCount; i++) {
        petals.push(new Petal());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      petals.forEach(petal => {
        petal.update();
        petal.draw();
      });
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none',
        zIndex: 2 // Above background, below text (text is usually higher z-index)
      }} 
    />
  );
};

export default FallingPetals;
