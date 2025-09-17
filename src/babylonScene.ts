import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, StandardMaterial, Color3 } from '@babylonjs/core';

export function createBabylonScene(canvas: HTMLCanvasElement): void {
  // Create the 3D engine
  const engine = new Engine(canvas, true);

  // Create a scene
  const scene = new Scene(engine);

  // Create a camera
  const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 3, 10, Vector3.Zero(), scene);
  camera.attachControl(canvas, true);

  // Create lights
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  light.intensity = 0.7;

  // Create a ground
  const ground = MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
  const groundMaterial = new StandardMaterial("groundMaterial", scene);
  groundMaterial.diffuseColor = new Color3(0.3, 0.3, 0.3);
  ground.material = groundMaterial;

  // Create a sphere
  const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);
  sphere.position.y = 1;
  const sphereMaterial = new StandardMaterial("sphereMaterial", scene);
  sphereMaterial.diffuseColor = new Color3(1, 0.5, 0.2);
  sphere.material = sphereMaterial;

  // Create a box
  const box = MeshBuilder.CreateBox("box", { size: 1.5 }, scene);
  box.position.x = -2;
  box.position.y = 0.75;
  const boxMaterial = new StandardMaterial("boxMaterial", scene);
  boxMaterial.diffuseColor = new Color3(0.2, 0.7, 1);
  box.material = boxMaterial;

  // Render loop
  engine.runRenderLoop(() => {
    scene.render();
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    engine.resize();
  });

  // Animation
  scene.registerBeforeRender(() => {
    sphere.rotation.y += 0.01;
    box.rotation.x += 0.005;
    box.rotation.z += 0.005;
  });
}
