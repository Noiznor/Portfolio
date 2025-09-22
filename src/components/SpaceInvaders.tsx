import React, { useRef, useEffect } from 'react';

const SpaceInvaders: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext('2d');
    if (!c) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Player {
      position: { x: number; y: number } | null = null;
      velocity: { x: number; y: number };
      width: number = 0;
      height: number = 0;
      image: HTMLImageElement;
      isLoaded: boolean = false;

      constructor() {
        this.velocity = { x: 0, y: 0 };
        this.image = new Image();
        this.image.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZmMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMmwzLjA5IDYuMzFMMjIgOS4yN2wtNS4wOSA0Ljk3TDE4LjE4IDIybC02LjE4LTMuMjZMMiA5LjI3bDYuOTEtMS4wNEwxMiAyeiIvPjwvc3ZnPg==';
        this.image.onload = () => {
          const scale = 1.5;
          this.width = this.image.width * scale;
          this.height = this.image.height * scale;
          this.position = {
            x: canvas.width / 2 - this.width / 2,
            y: canvas.height - this.height - 20,
          };
          this.isLoaded = true;
        };
      }

      draw() {
        if (c && this.position && this.isLoaded) {
          c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
      }

      update() {
        if (this.position) {
          this.position.x += this.velocity.x;
          this.draw();
        }
      }
    }

    class Projectile {
      position: { x: number; y: number };
      velocity: { x: number; y: number };
      radius: number;
      color: string;

      constructor({ position, velocity, color = '#00ff00' }: { position: { x: number; y: number }; velocity: { x: number; y: number }; color?: string }) {
        this.position = position;
        this.velocity = velocity;
        this.radius = 4;
        this.color = color;
      }

      draw() {
        if (c) {
          c.beginPath();
          c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
          c.fillStyle = this.color;
          c.fill();
          c.closePath();
        }
      }

      update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.draw();
      }
    }

    class Invader {
      position: { x: number; y: number } | null = null;
      width: number = 0;
      height: number = 0;
      image: HTMLImageElement;
      isLoaded: boolean = false;
      originalPosition: { x: number; y: number };

      constructor({ position }: { position: { x: number; y: number } }) {
        this.originalPosition = position;
        this.image = new Image();
        this.image.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNNCA0aDE2djE2SDR6Ii8+PHBhdGggZD0iTTkgOWg2djZIOXoiLz48cGF0aCBkPSJtMSAxaDIyIi8+PC9zdmc+';
        this.image.onload = () => {
          const scale = 1;
          this.width = this.image.width * scale;
          this.height = this.image.height * scale;
          this.position = {
            x: this.originalPosition.x,
            y: this.originalPosition.y,
          };
          this.isLoaded = true;
        };
      }

      draw(gridPosition: {x: number, y: number}) {
        if (c && this.position && this.isLoaded) {
          c.drawImage(this.image, this.position.x + gridPosition.x, this.position.y + gridPosition.y, this.width, this.height);
        }
      }

      update({ velocity }: { velocity: { x: number; y: number } }) {
        // Position is now relative to the grid, so we don't update it here
      }
    }

    class Grid {
      position: { x: number; y: number };
      velocity: { x: number; y: number };
      invaders: Invader[];
      width: number;

      constructor() {
        this.position = { x: 0, y: 0 };
        this.velocity = { x: 2, y: 0 };
        this.invaders = [];
        const columns = Math.floor(Math.random() * 8 + 5);
        const rows = Math.floor(Math.random() * 4 + 2);
        this.width = columns * 30;

        for (let x = 0; x < columns; x++) {
          for (let y = 0; y < rows; y++) {
            this.invaders.push(new Invader({ position: { x: x * 30, y: y * 30 } }));
          }
        }
      }

      update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.y = 0;

        if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
          this.velocity.x = -this.velocity.x;
          this.velocity.y = 30;
        }
      }
    }

    const player = new Player();
    const projectiles: Projectile[] = [];
    const grids: Grid[] = [];
    const invaderProjectiles: Projectile[] = [];

    const keys = {
      a: { pressed: false },
      d: { pressed: false },
      space: { pressed: false },
    };

    let frames = 0;
    let game = { over: false, active: true };

    function init() {
        grids.push(new Grid());
    }

    function animate() {
      if (!c || !game.active) return;
      requestAnimationFrame(animate);

      if (!player.isLoaded) return;

      c.fillStyle = 'black';
      c.fillRect(0, 0, canvas.width, canvas.height);
      
      player.update();

      for (let i = projectiles.length - 1; i >= 0; i--) {
        const projectile = projectiles[i];
        if (projectile.position.y + projectile.radius <= 0) {
          projectiles.splice(i, 1);
        } else {
          projectile.update();
        }
      }
      
      for (let i = invaderProjectiles.length - 1; i >= 0; i--) {
        const projectile = invaderProjectiles[i];
        if (projectile.position.y + projectile.radius >= canvas.height) {
          invaderProjectiles.splice(i, 1);
        } else {
          projectile.update();
        }

        if (player.position && projectile.position.y + projectile.radius >= player.position.y && projectile.position.x >= player.position.x && projectile.position.x <= player.position.x + player.width) {
            console.log('Game Over');
            game.over = true;
            setTimeout(() => game.active = false, 2000);
        }
      }


      for (let gridIndex = grids.length - 1; gridIndex >= 0; gridIndex--) {
        const grid = grids[gridIndex];
        grid.update();

        if (frames % 100 === 0 && grid.invaders.length > 0) {
            const randomInvader = grid.invaders[Math.floor(Math.random() * grid.invaders.length)];
            if(randomInvader.isLoaded && randomInvader.position){
                invaderProjectiles.push(new Projectile({
                    position: {
                        x: randomInvader.position.x + grid.position.x + randomInvader.width / 2,
                        y: randomInvader.position.y + grid.position.y + randomInvader.height
                    },
                    velocity: { x: 0, y: 5 },
                    color: 'red'
                }))
            }
        }

        for (let i = grid.invaders.length - 1; i >= 0; i--) {
            const invader = grid.invaders[i];
            if(invader.isLoaded && invader.position){
              invader.draw(grid.position);

              for (let j = projectiles.length - 1; j >= 0; j--) {
                  const projectile = projectiles[j];
                  const invaderX = invader.position.x + grid.position.x;
                  const invaderY = invader.position.y + grid.position.y;

                  if (projectile.position.y - projectile.radius <= invaderY + invader.height && 
                      projectile.position.x + projectile.radius >= invaderX && 
                      projectile.position.x - projectile.radius <= invaderX + invader.width &&
                      projectile.position.y + projectile.radius >= invaderY) {
                      
                      grid.invaders.splice(i, 1);
                      projectiles.splice(j, 1);
                  }
              }
            }
        }
      }

      if (keys.a.pressed && player.position && player.position.x >= 0) {
        player.velocity.x = -7;
      } else if (keys.d.pressed && player.position && player.position.x + player.width <= canvas.width) {
        player.velocity.x = 7;
      } else {
        player.velocity.x = 0;
      }

      if (frames % 1000 === 0) {
          grids.push(new Grid());
      }

      frames++;
    }

    init();
    animate();

    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (!game.active) return;
      switch (key) {
        case 'a': keys.a.pressed = true; break;
        case 'd': keys.d.pressed = true; break;
        case ' ': 
            if(player.position){
                projectiles.push(
                    new Projectile({
                    position: {
                        x: player.position.x + player.width / 2,
                        y: player.position.y,
                    },
                    velocity: { x: 0, y: -10 },
                    })
                );
            }
            break;
      }
    };

    const handleKeyUp = ({ key }: KeyboardEvent) => {
        if (!game.active) return;
        switch (key) {
            case 'a': keys.a.pressed = false; break;
            case 'd': keys.d.pressed = false; break;
            case ' ': break;
        }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      game.active = false;
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default SpaceInvaders;
