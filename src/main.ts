import './style.css'
import { createBabylonScene } from './babylonScene.ts'

// Get the canvas element
const canvas = document.querySelector<HTMLCanvasElement>('#babylon-canvas')!;

// Initialize the Babylon.js scene
createBabylonScene(canvas);
