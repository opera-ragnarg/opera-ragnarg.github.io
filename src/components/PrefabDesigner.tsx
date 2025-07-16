import React, { useState } from 'react';
import { PrefabCard } from './PrefabCard';
import { DropdownField, ToggleField } from './FormField';
import { 
  PlayerIcon, 
  PlatformIcon, 
  ItemIcon, 
  RoomIcon, 
  NPCIcon, 
  DoorIcon, 
  MenuIcon, 
  ScoreIcon, 
  ControlsIcon, 
  UIIcon 
} from './icons/PrefabIcons';

const prefabTypes = [
  { id: 'player', name: 'Player', icon: PlayerIcon },
  { id: 'platform', name: 'Platform', icon: PlatformIcon },
  { id: 'item', name: 'Item', icon: ItemIcon },
  { id: 'room', name: 'Room', icon: RoomIcon },
  { id: 'npc', name: 'NPC', icon: NPCIcon },
  { id: 'door', name: 'Door', icon: DoorIcon },
  { id: 'menu', name: 'Menu', icon: MenuIcon },
  { id: 'score', name: 'Score', icon: ScoreIcon },
  { id: 'controls', name: 'Controls', icon: ControlsIcon },
  { id: 'ui', name: 'UI', icon: UIIcon },
];

interface PrefabFormData {
  [key: string]: any;
}

export function PrefabDesigner() {
  const [activePrefab, setActivePrefab] = useState('player');
  const [formData, setFormData] = useState<PrefabFormData>({
    player: {
      variant: 'Basic Character',
      movement: 'Platform',
      maxSpeed: '5',
      jumpHeight: '10',
      hasDoubleJump: false,
      sprite: 'Default',
      animations: 'Basic',
      collisionBox: 'Rectangle',
      health: '100',
      abilities: 'None'
    },
    platform: {
      variant: 'Solid Platform',
      type: 'Static',
      material: 'Stone',
      oneWay: false,
      moving: false,
      sprite: 'Default',
      width: '128',
      height: '32',
      collision: 'Solid',
      breakable: false
    },
    item: {
      variant: 'Collectible',
      type: 'Coin',
      value: '10',
      respawns: false,
      timer: '0',
      sprite: 'Default',
      animation: 'Idle',
      sound: 'Pickup',
      effect: 'None',
      stackable: true
    },
    room: {
      variant: 'Standard Room',
      cameraType: 'Follow Player',
      movement: 'Smooth',
      width: '1024',
      height: '768',
      physics: 'Enabled',
      background: 'Default',
      music: 'None',
      lighting: 'Normal',
      boundaries: 'Solid',
      transition: 'Fade'
    },
    npc: {
      variant: 'Basic NPC',
      behavior: 'Stationary',
      dialogue: 'Enabled',
      interaction: 'On Contact',
      movement: 'None',
      sprite: 'Default',
      animations: 'Idle',
      ai: 'Simple',
      hostile: false,
      questGiver: false
    },
    door: {
      variant: 'Standard Door',
      destination: 'Room 1',
      locked: false,
      keyRequired: 'None',
      direction: 'Right',
      sprite: 'Default',
      animation: 'None',
      sound: 'Door Open',
      transition: 'Fade',
      oneWay: false
    },
    menu: {
      variant: 'Pause Menu',
      restart: true,
      resume: true,
      quit: true,
      settings: false,
      sound: true,
      music: true,
      fullscreen: false,
      saveLoad: false,
      controls: false,
      credits: false
    },
    score: {
      variant: 'Point System',
      source: 'Items',
      multiplier: '1',
      display: 'Top Right',
      format: 'Numbers',
      winCondition: 'None',
      resetOnDeath: true,
      saveHiscore: false,
      bonus: false,
      penalty: false
    },
    controls: {
      variant: 'Keyboard',
      left: 'A',
      right: 'D',
      jump: 'Space',
      action: 'E',
      pause: 'Escape',
      restart: 'R',
      customizable: false,
      gamepad: false,
      touchControls: false,
      sensitivity: '1.0'
    },
    ui: {
      variant: 'HUD',
      healthBar: true,
      scoreDisplay: true,
      inventory: false,
      minimap: false,
      compass: false,
      timer: false,
      notifications: true,
      tooltips: true,
      quickActions: false,
      statusEffects: false
    }
  });

  const updateFormData = (prefabId: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [prefabId]: {
        ...prev[prefabId],
        [field]: value
      }
    }));
  };

  const renderFormFields = (prefabId: string) => {
    const data = formData[prefabId];
    if (!data) return null;

    switch (prefabId) {
      case 'player':
        return (
          <div className="grid grid-cols-2 gap-x-4">
            <DropdownField
              label="Variant"
              value={data.variant}
              onValueChange={(value) => updateFormData(prefabId, 'variant', value)}
              options={['Basic Character', 'Platformer Hero', 'Top-Down Player', 'Side-Scroller', 'RPG Character']}
              description="Choose the base character type that determines default behaviors and properties"
            />
            <DropdownField
              label="Movement Type"
              value={data.movement}
              onValueChange={(value) => updateFormData(prefabId, 'movement', value)}
              options={['Platform', 'Top-Down', 'Physics', 'Grid-Based', 'Custom']}
              description="Defines how the player character moves and responds to input"
            />
            <DropdownField
              label="Max Speed"
              value={data.maxSpeed}
              onValueChange={(value) => updateFormData(prefabId, 'maxSpeed', value)}
              options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
              description="Maximum movement speed in pixels per frame or units per second"
            />
            <DropdownField
              label="Jump Height"
              value={data.jumpHeight}
              onValueChange={(value) => updateFormData(prefabId, 'jumpHeight', value)}
              options={['5', '8', '10', '12', '15', '18', '20', '25', '30']}
              description="How high the character can jump, measured in pixels or grid units"
            />
            <ToggleField
              label="Double Jump"
              checked={data.hasDoubleJump}
              onCheckedChange={(checked) => updateFormData(prefabId, 'hasDoubleJump', checked)}
              description="Allows the player to perform a second jump while in mid-air"
            />
            <DropdownField
              label="Sprite Set"
              value={data.sprite}
              onValueChange={(value) => updateFormData(prefabId, 'sprite', value)}
              options={['Default', 'Pixel Art', 'Cartoon', 'Realistic', 'Custom']}
              description="Visual appearance style for the character sprite and animations"
            />
            <DropdownField
              label="Animations"
              value={data.animations}
              onValueChange={(value) => updateFormData(prefabId, 'animations', value)}
              options={['Basic', 'Full Set', 'Minimal', 'Advanced', 'Custom']}
              description="Set of available animations like idle, walk, jump, and special moves"
            />
            <DropdownField
              label="Collision Box"
              value={data.collisionBox}
              onValueChange={(value) => updateFormData(prefabId, 'collisionBox', value)}
              options={['Rectangle', 'Circle', 'Capsule', 'Custom', 'Pixel Perfect']}
              description="Shape used for collision detection with platforms and other objects"
            />
            <DropdownField
              label="Health"
              value={data.health}
              onValueChange={(value) => updateFormData(prefabId, 'health', value)}
              options={['1', '3', '5', '10', '50', '100', 'Unlimited']}
              description="Starting health points or number of lives for the player character"
            />
            <DropdownField
              label="Special Abilities"
              value={data.abilities}
              onValueChange={(value) => updateFormData(prefabId, 'abilities', value)}
              options={['None', 'Dash', 'Wall Jump', 'Glide', 'Shoot', 'Multiple']}
              description="Special moves or abilities the player character can perform"
            />
          </div>
        );

      case 'platform':
        return (
          <div className="grid grid-cols-2 gap-x-4">
            <DropdownField
              label="Variant"
              value={data.variant}
              onValueChange={(value) => updateFormData(prefabId, 'variant', value)}
              options={['Solid Platform', 'One-Way Platform', 'Moving Platform', 'Breakable Platform', 'Disappearing Platform']}
              description="Type of platform that determines its basic behavior and interaction rules"
            />
            <DropdownField
              label="Platform Type"
              value={data.type}
              onValueChange={(value) => updateFormData(prefabId, 'type', value)}
              options={['Static', 'Moving', 'Rotating', 'Falling', 'Triggered']}
              description="Movement behavior of the platform - static stays in place, moving follows a path"
            />
            <DropdownField
              label="Material"
              value={data.material}
              onValueChange={(value) => updateFormData(prefabId, 'material', value)}
              options={['Stone', 'Wood', 'Metal', 'Ice', 'Grass', 'Sand']}
              description="Material affects visual appearance and may influence physics properties"
            />
            <ToggleField
              label="One-Way"
              checked={data.oneWay}
              onCheckedChange={(checked) => updateFormData(prefabId, 'oneWay', checked)}
              description="Allows player to jump up through platform but land on top - common for platformers"
            />
            <ToggleField
              label="Moving"
              checked={data.moving}
              onCheckedChange={(checked) => updateFormData(prefabId, 'moving', checked)}
              description="Platform moves along a predefined path, carrying objects that stand on it"
            />
            <DropdownField
              label="Sprite"
              value={data.sprite}
              onValueChange={(value) => updateFormData(prefabId, 'sprite', value)}
              options={['Default', 'Tiled', 'Single Texture', 'Animated', 'Custom']}
              description="Visual representation method - tiled repeats a texture, single uses one image"
            />
            <DropdownField
              label="Width"
              value={data.width}
              onValueChange={(value) => updateFormData(prefabId, 'width', value)}
              options={['32', '64', '96', '128', '160', '192', '224', '256']}
              description="Platform width in pixels - determines how much space players have to land"
            />
            <DropdownField
              label="Height"
              value={data.height}
              onValueChange={(value) => updateFormData(prefabId, 'height', value)}
              options={['16', '24', '32', '48', '64', '96', '128']}
              description="Platform thickness in pixels - affects visual appearance and collision"
            />
            <DropdownField
              label="Collision"
              value={data.collision}
              onValueChange={(value) => updateFormData(prefabId, 'collision', value)}
              options={['Solid', 'Semi-Solid', 'Trigger', 'None']}
              description="How objects interact with this platform - solid blocks movement, trigger detects contact"
            />
            <ToggleField
              label="Breakable"
              checked={data.breakable}
              onCheckedChange={(checked) => updateFormData(prefabId, 'breakable', checked)}
              description="Platform can be destroyed by player actions like jumping on it or attacking"
            />
          </div>
        );

      case 'item':
        return (
          <div className="grid grid-cols-2 gap-x-4">
            <DropdownField
              label="Variant"
              value={data.variant}
              onValueChange={(value) => updateFormData(prefabId, 'variant', value)}
              options={['Collectible', 'Power-Up', 'Key Item', 'Consumable', 'Equipment']}
              description="Category of item that determines its basic function and behavior in the game"
            />
            <DropdownField
              label="Item Type"
              value={data.type}
              onValueChange={(value) => updateFormData(prefabId, 'type', value)}
              options={['Coin', 'Gem', 'Heart', 'Key', 'Star', 'Orb']}
              description="Specific item appearance and default value - affects sprite and typical point worth"
            />
            <DropdownField
              label="Point Value"
              value={data.value}
              onValueChange={(value) => updateFormData(prefabId, 'value', value)}
              options={['1', '5', '10', '25', '50', '100', '500', '1000']}
              description="Points awarded to player when this item is collected - higher for rarer items"
            />
            <ToggleField
              label="Respawns"
              checked={data.respawns}
              onCheckedChange={(checked) => updateFormData(prefabId, 'respawns', checked)}
              description="Item reappears after being collected, either immediately or after a timer"
            />
            <DropdownField
              label="Respawn Timer"
              value={data.timer}
              onValueChange={(value) => updateFormData(prefabId, 'timer', value)}
              options={['0', '5', '10', '30', '60', '120', '300']}
              description="Seconds before item respawns - 0 means instant respawn if enabled"
            />
            <DropdownField
              label="Sprite"
              value={data.sprite}
              onValueChange={(value) => updateFormData(prefabId, 'sprite', value)}
              options={['Default', 'Shiny', 'Glowing', 'Animated', 'Custom']}
              description="Visual style of the item - animated and glowing versions attract more attention"
            />
            <DropdownField
              label="Animation"
              value={data.animation}
              onValueChange={(value) => updateFormData(prefabId, 'animation', value)}
              options={['Idle', 'Floating', 'Spinning', 'Pulsing', 'Bobbing']}
              description="Movement animation when item is waiting to be collected"
            />
            <DropdownField
              label="Pickup Sound"
              value={data.sound}
              onValueChange={(value) => updateFormData(prefabId, 'sound', value)}
              options={['Pickup', 'Coin', 'Chime', 'Pop', 'Ding', 'None']}
              description="Sound effect played when player collects this item"
            />
            <DropdownField
              label="Special Effect"
              value={data.effect}
              onValueChange={(value) => updateFormData(prefabId, 'effect', value)}
              options={['None', 'Heal Player', 'Speed Boost', 'Jump Boost', 'Invincibility', 'Extra Life']}
              description="Special ability or status effect granted to player upon collection"
            />
            <ToggleField
              label="Stackable"
              checked={data.stackable}
              onCheckedChange={(checked) => updateFormData(prefabId, 'stackable', checked)}
              description="Multiple copies can be collected and stored in inventory or counter"
            />
          </div>
        );

      case 'room':
        return (
          <div className="grid grid-cols-2 gap-x-4">
            <DropdownField
              label="Variant"
              value={data.variant}
              onValueChange={(value) => updateFormData(prefabId, 'variant', value)}
              options={['Standard Room', 'Scrolling Level', 'Single Screen', 'Multi-Layer', 'Procedural']}
              description="Room layout type that determines camera behavior and level structure"
            />
            <DropdownField
              label="Camera Type"
              value={data.cameraType}
              onValueChange={(value) => updateFormData(prefabId, 'cameraType', value)}
              options={['Follow Player', 'Fixed Position', 'Auto Scroll', 'Manual Control', 'Smooth Follow']}
              description="How the camera behaves in this room - following player or staying in fixed position"
            />
            <DropdownField
              label="Camera Movement"
              value={data.movement}
              onValueChange={(value) => updateFormData(prefabId, 'movement', value)}
              options={['Smooth', 'Instant', 'Delayed', 'Elastic', 'Custom']}
              description="Style of camera transitions and movement - smooth is less jarring for players"
            />
            <DropdownField
              label="Room Width"
              value={data.width}
              onValueChange={(value) => updateFormData(prefabId, 'width', value)}
              options={['512', '800', '1024', '1280', '1920', '2560', 'Custom']}
              description="Room width in pixels - larger rooms allow more exploration space"
            />
            <DropdownField
              label="Room Height"
              value={data.height}
              onValueChange={(value) => updateFormData(prefabId, 'height', value)}
              options={['384', '600', '768', '720', '1080', '1440', 'Custom']}
              description="Room height in pixels - taller rooms enable vertical platforming"
            />
            <ToggleField
              label="Physics"
              checked={data.physics}
              onCheckedChange={(checked) => updateFormData(prefabId, 'physics', checked)}
              description="Enables gravity, collision detection, and realistic movement physics in this room"
            />
            <DropdownField
              label="Background"
              value={data.background}
              onValueChange={(value) => updateFormData(prefabId, 'background', value)}
              options={['Default', 'Parallax', 'Animated', 'Static Image', 'Solid Color', 'Gradient']}
              description="Background visual style - parallax creates depth, animated adds life to the scene"
            />
            <DropdownField
              label="Background Music"
              value={data.music}
              onValueChange={(value) => updateFormData(prefabId, 'music', value)}
              options={['None', 'Ambient', 'Action', 'Peaceful', 'Tension', 'Custom']}
              description="Background music track that plays while in this room"
            />
            <DropdownField
              label="Lighting"
              value={data.lighting}
              onValueChange={(value) => updateFormData(prefabId, 'lighting', value)}
              options={['Normal', 'Dark', 'Bright', 'Dynamic', 'Spotlight', 'Colored']}
              description="Lighting atmosphere that affects visibility and mood of the room"
            />
            <DropdownField
              label="Room Boundaries"
              value={data.boundaries}
              onValueChange={(value) => updateFormData(prefabId, 'boundaries', value)}
              options={['Solid', 'Wrap Around', 'Deadly', 'Transition', 'Invisible Walls']}
              description="What happens when player reaches the edge of the room"
            />
          </div>
        );

      case 'npc':
        return (
          <div className="grid grid-cols-2 gap-x-4">
            <DropdownField
              label="Variant"
              value={data.variant}
              onValueChange={(value) => updateFormData(prefabId, 'variant', value)}
              options={['Basic NPC', 'Merchant', 'Guard', 'Villager', 'Quest Giver']}
              description="NPC role that determines default behaviors and interaction options"
            />
            <DropdownField
              label="Behavior Pattern"
              value={data.behavior}
              onValueChange={(value) => updateFormData(prefabId, 'behavior', value)}
              options={['Stationary', 'Patrol', 'Wander', 'Chase Player', 'Flee', 'Custom Path']}
              description="How the NPC moves when not interacting with the player"
            />
            <ToggleField
              label="Has Dialogue"
              checked={data.dialogue}
              onCheckedChange={(checked) => updateFormData(prefabId, 'dialogue', checked)}
              description="NPC can engage in conversation with the player character"
            />
            <DropdownField
              label="Interaction Type"
              value={data.interaction}
              onValueChange={(value) => updateFormData(prefabId, 'interaction', value)}
              options={['On Contact', 'On Key Press', 'On Click', 'Automatic', 'Proximity']}
              description="How the player initiates interaction with this NPC"
            />
            <DropdownField
              label="Movement Speed"
              value={data.movement}
              onValueChange={(value) => updateFormData(prefabId, 'movement', value)}
              options={['None', 'Very Slow', 'Slow', 'Normal', 'Fast', 'Very Fast']}
              description="How quickly the NPC moves when following their behavior pattern"
            />
            <DropdownField
              label="Sprite Style"
              value={data.sprite}
              onValueChange={(value) => updateFormData(prefabId, 'sprite', value)}
              options={['Default', 'Humanoid', 'Animal', 'Robot', 'Fantasy', 'Custom']}
              description="Visual appearance category that affects sprite selection and animations"
            />
            <DropdownField
              label="Animations"
              value={data.animations}
              onValueChange={(value) => updateFormData(prefabId, 'animations', value)}
              options={['Idle', 'Walk Cycle', 'Full Set', 'Minimal', 'Expressive']}
              description="Available animation states for the NPC - more animations feel more alive"
            />
            <DropdownField
              label="AI Complexity"
              value={data.ai}
              onValueChange={(value) => updateFormData(prefabId, 'ai', value)}
              options={['Simple', 'Basic', 'Intermediate', 'Advanced', 'Custom']}
              description="Intelligence level affecting decision making and response to player actions"
            />
            <ToggleField
              label="Hostile"
              checked={data.hostile}
              onCheckedChange={(checked) => updateFormData(prefabId, 'hostile', checked)}
              description="NPC will attack or harm the player when they get too close"
            />
            <ToggleField
              label="Quest Giver"
              checked={data.questGiver}
              onCheckedChange={(checked) => updateFormData(prefabId, 'questGiver', checked)}
              description="NPC can provide missions or objectives for the player to complete"
            />
          </div>
        );

      case 'door':
        return (
          <div className="grid grid-cols-2 gap-x-4">
            <DropdownField
              label="Variant"
              value={data.variant}
              onValueChange={(value) => updateFormData(prefabId, 'variant', value)}
              options={['Standard Door', 'Portal', 'Teleporter', 'Exit Door', 'Secret Passage']}
              description="Type of transition mechanism that affects visual style and behavior"
            />
            <DropdownField
              label="Destination"
              value={data.destination}
              onValueChange={(value) => updateFormData(prefabId, 'destination', value)}
              options={['Room 1', 'Room 2', 'Room 3', 'Next Level', 'Previous Level', 'Custom']}
              description="Where the player will be transported when using this door"
            />
            <ToggleField
              label="Locked"
              checked={data.locked}
              onCheckedChange={(checked) => updateFormData(prefabId, 'locked', checked)}
              description="Door requires a key or specific condition to be opened"
            />
            <DropdownField
              label="Key Required"
              value={data.keyRequired}
              onValueChange={(value) => updateFormData(prefabId, 'keyRequired', value)}
              options={['None', 'Red Key', 'Blue Key', 'Yellow Key', 'Master Key', 'Custom']}
              description="Specific key item needed to unlock this door if it's locked"
            />
            <DropdownField
              label="Open Direction"
              value={data.direction}
              onValueChange={(value) => updateFormData(prefabId, 'direction', value)}
              options={['Right', 'Left', 'Up', 'Down', 'In Place', 'Slide']}
              description="Animation direction when door opens or direction player faces after transition"
            />
            <DropdownField
              label="Door Sprite"
              value={data.sprite}
              onValueChange={(value) => updateFormData(prefabId, 'sprite', value)}
              options={['Default', 'Wooden', 'Metal', 'Stone', 'Energy', 'Invisible']}
              description="Visual appearance of the door that should match the room's theme"
            />
            <DropdownField
              label="Open Animation"
              value={data.animation}
              onValueChange={(value) => updateFormData(prefabId, 'animation', value)}
              options={['None', 'Swing Open', 'Slide Open', 'Fade Out', 'Dissolve', 'Custom']}
              description="Visual effect shown when the door opens before room transition"
            />
            <DropdownField
              label="Sound Effect"
              value={data.sound}
              onValueChange={(value) => updateFormData(prefabId, 'sound', value)}
              options={['Door Open', 'Portal', 'Teleport', 'Click', 'Whoosh', 'None']}
              description="Audio feedback played when player uses the door"
            />
            <DropdownField
              label="Transition Style"
              value={data.transition}
              onValueChange={(value) => updateFormData(prefabId, 'transition', value)}
              options={['Fade', 'Slide', 'Instant', 'Zoom', 'Circular', 'Custom']}
              description="Screen transition effect between the current room and destination"
            />
            <ToggleField
              label="One Way"
              checked={data.oneWay}
              onCheckedChange={(checked) => updateFormData(prefabId, 'oneWay', checked)}
              description="Door only works in one direction - player cannot return through it"
            />
          </div>
        );

      case 'menu':
        return (
          <div className="grid grid-cols-2 gap-x-4">
            <DropdownField
              label="Variant"
              value={data.variant}
              onValueChange={(value) => updateFormData(prefabId, 'variant', value)}
              options={['Pause Menu', 'Main Menu', 'Settings Menu', 'Game Over Menu', 'Victory Menu']}
              description="Type of menu that determines when it appears and default options available"
            />
            <ToggleField
              label="Restart Game"
              checked={data.restart}
              onCheckedChange={(checked) => updateFormData(prefabId, 'restart', checked)}
              description="Includes button to restart the current level or entire game"
            />
            <ToggleField
              label="Resume Game"
              checked={data.resume}
              onCheckedChange={(checked) => updateFormData(prefabId, 'resume', checked)}
              description="Includes button to close menu and continue playing from current position"
            />
            <ToggleField
              label="Quit to Menu"
              checked={data.quit}
              onCheckedChange={(checked) => updateFormData(prefabId, 'quit', checked)}
              description="Includes button to return to main menu, losing current progress"
            />
            <ToggleField
              label="Settings"
              checked={data.settings}
              onCheckedChange={(checked) => updateFormData(prefabId, 'settings', checked)}
              description="Includes button to access game settings and configuration options"
            />
            <ToggleField
              label="Sound Toggle"
              checked={data.sound}
              onCheckedChange={(checked) => updateFormData(prefabId, 'sound', checked)}
              description="Includes option to turn sound effects on or off"
            />
            <ToggleField
              label="Music Toggle"
              checked={data.music}
              onCheckedChange={(checked) => updateFormData(prefabId, 'music', checked)}
              description="Includes option to turn background music on or off"
            />
            <ToggleField
              label="Fullscreen"
              checked={data.fullscreen}
              onCheckedChange={(checked) => updateFormData(prefabId, 'fullscreen', checked)}
              description="Includes option to toggle between windowed and fullscreen display modes"
            />
            <ToggleField
              label="Save/Load"
              checked={data.saveLoad}
              onCheckedChange={(checked) => updateFormData(prefabId, 'saveLoad', checked)}
              description="Includes options to save current progress or load a previous save file"
            />
            <ToggleField
              label="Controls"
              checked={data.controls}
              onCheckedChange={(checked) => updateFormData(prefabId, 'controls', checked)}
              description="Includes option to view or customize control scheme and key bindings"
            />
          </div>
        );

      case 'score':
        return (
          <div className="grid grid-cols-2 gap-x-4">
            <DropdownField
              label="Variant"
              value={data.variant}
              onValueChange={(value) => updateFormData(prefabId, 'variant', value)}
              options={['Point System', 'Timer', 'Lives Counter', 'Progress Bar', 'Leaderboard']}
              description="Type of scoring system that tracks different aspects of player performance"
            />
            <DropdownField
              label="Point Source"
              value={data.source}
              onValueChange={(value) => updateFormData(prefabId, 'source', value)}
              options={['Items', 'Enemies', 'Time', 'Completion', 'Combo', 'Distance']}
              description="Primary way players earn points or increase their score"
            />
            <DropdownField
              label="Score Multiplier"
              value={data.multiplier}
              onValueChange={(value) => updateFormData(prefabId, 'multiplier', value)}
              options={['1', '1.5', '2', '2.5', '3', '5', '10', 'Variable']}
              description="Number that point values are multiplied by - can increase based on performance"
            />
            <DropdownField
              label="Display Position"
              value={data.display}
              onValueChange={(value) => updateFormData(prefabId, 'display', value)}
              options={['Top Left', 'Top Right', 'Top Center', 'Bottom Left', 'Bottom Right', 'Custom']}
              description="Where the score appears on screen during gameplay"
            />
            <DropdownField
              label="Display Format"
              value={data.format}
              onValueChange={(value) => updateFormData(prefabId, 'format', value)}
              options={['Numbers', 'Stars', 'Progress Bar', 'Letter Grade', 'Percentage', 'Custom']}
              description="Visual representation of the score value - numbers are most common"
            />
            <DropdownField
              label="Win Condition"
              value={data.winCondition}
              onValueChange={(value) => updateFormData(prefabId, 'winCondition', value)}
              options={['None', 'Target Score', 'High Score', 'Time Limit', 'Perfect Score', 'Custom']}
              description="Score requirement that must be met to complete level or win game"
            />
            <ToggleField
              label="Reset on Death"
              checked={data.resetOnDeath}
              onCheckedChange={(checked) => updateFormData(prefabId, 'resetOnDeath', checked)}
              description="Score returns to zero when player character dies or fails"
            />
            <ToggleField
              label="Save High Score"
              checked={data.saveHiscore}
              onCheckedChange={(checked) => updateFormData(prefabId, 'saveHiscore', checked)}
              description="Tracks and saves the highest score achieved across play sessions"
            />
            <ToggleField
              label="Bonus Points"
              checked={data.bonus}
              onCheckedChange={(checked) => updateFormData(prefabId, 'bonus', checked)}
              description="Awards extra points for special achievements like speed runs or perfect completion"
            />
            <ToggleField
              label="Score Penalties"
              checked={data.penalty}
              onCheckedChange={(checked) => updateFormData(prefabId, 'penalty', checked)}
              description="Deducts points for negative actions like taking damage or using hints"
            />
          </div>
        );

      case 'controls':
        return (
          <div className="grid grid-cols-2 gap-x-4">
            <DropdownField
              label="Variant"
              value={data.variant}
              onValueChange={(value) => updateFormData(prefabId, 'variant', value)}
              options={['Keyboard', 'Gamepad', 'Touch', 'Mouse', 'Hybrid']}
              description="Primary input method that determines default control scheme"
            />
            <DropdownField
              label="Move Left"
              value={data.left}
              onValueChange={(value) => updateFormData(prefabId, 'left', value)}
              options={['A', 'Left Arrow', 'Q', 'Z', 'Custom']}
              description="Key or button assigned to move the character left"
            />
            <DropdownField
              label="Move Right"
              value={data.right}
              onValueChange={(value) => updateFormData(prefabId, 'right', value)}
              options={['D', 'Right Arrow', 'E', 'X', 'Custom']}
              description="Key or button assigned to move the character right"
            />
            <DropdownField
              label="Jump"
              value={data.jump}
              onValueChange={(value) => updateFormData(prefabId, 'jump', value)}
              options={['Space', 'W', 'Up Arrow', 'Z', 'Enter', 'Custom']}
              description="Key or button assigned to make the character jump"
            />
            <DropdownField
              label="Action/Interact"
              value={data.action}
              onValueChange={(value) => updateFormData(prefabId, 'action', value)}
              options={['E', 'F', 'Enter', 'Space', 'Shift', 'Custom']}
              description="Key or button for general interactions like opening doors or talking to NPCs"
            />
            <DropdownField
              label="Pause Menu"
              value={data.pause}
              onValueChange={(value) => updateFormData(prefabId, 'pause', value)}
              options={['Escape', 'P', 'Tab', 'Enter', 'Custom']}
              description="Key or button to open the pause menu during gameplay"
            />
            <DropdownField
              label="Quick Restart"
              value={data.restart}
              onValueChange={(value) => updateFormData(prefabId, 'restart', value)}
              options={['R', 'F5', 'Ctrl+R', 'Backspace', 'Custom']}
              description="Key combination for quickly restarting the current level"
            />
            <ToggleField
              label="Customizable"
              checked={data.customizable}
              onCheckedChange={(checked) => updateFormData(prefabId, 'customizable', checked)}
              description="Players can reassign keys and buttons to their preferred layout"
            />
            <ToggleField
              label="Gamepad Support"
              checked={data.gamepad}
              onCheckedChange={(checked) => updateFormData(prefabId, 'gamepad', checked)}
              description="Game recognizes and responds to controller input alongside keyboard"
            />
            <ToggleField
              label="Touch Controls"
              checked={data.touchControls}
              onCheckedChange={(checked) => updateFormData(prefabId, 'touchControls', checked)}
              description="On-screen buttons and gestures for mobile devices and tablets"
            />
            <DropdownField
              label="Input Sensitivity"
              value={data.sensitivity}
              onValueChange={(value) => updateFormData(prefabId, 'sensitivity', value)}
              options={['0.5', '0.75', '1.0', '1.25', '1.5', '2.0', 'Custom']}
              description="Responsiveness multiplier for analog inputs like gamepad sticks"
            />
          </div>
        );

      case 'ui':
        return (
          <div className="grid grid-cols-2 gap-x-4">
            <DropdownField
              label="Variant"
              value={data.variant}
              onValueChange={(value) => updateFormData(prefabId, 'variant', value)}
              options={['HUD', 'Inventory', 'Menu System', 'Dialogue Box', 'Status Display']}
              description="Type of user interface element that determines layout and functionality"
            />
            <ToggleField
              label="Health Bar"
              checked={data.healthBar}
              onCheckedChange={(checked) => updateFormData(prefabId, 'healthBar', checked)}
              description="Shows player's current health or life points on screen"
            />
            <ToggleField
              label="Score Display"
              checked={data.scoreDisplay}
              onCheckedChange={(checked) => updateFormData(prefabId, 'scoreDisplay', checked)}
              description="Shows current score, points, or currency on screen during gameplay"
            />
            <ToggleField
              label="Inventory"
              checked={data.inventory}
              onCheckedChange={(checked) => updateFormData(prefabId, 'inventory', checked)}
              description="Panel showing collected items and equipment that player can access"
            />
            <ToggleField
              label="Minimap"
              checked={data.minimap}
              onCheckedChange={(checked) => updateFormData(prefabId, 'minimap', checked)}
              description="Small map showing player location and nearby areas or objectives"
            />
            <ToggleField
              label="Compass"
              checked={data.compass}
              onCheckedChange={(checked) => updateFormData(prefabId, 'compass', checked)}
              description="Directional indicator showing cardinal directions or objective markers"
            />
            <ToggleField
              label="Timer"
              checked={data.timer}
              onCheckedChange={(checked) => updateFormData(prefabId, 'timer', checked)}
              description="Countdown or count-up timer for time-sensitive levels or challenges"
            />
            <ToggleField
              label="Notifications"
              checked={data.notifications}
              onCheckedChange={(checked) => updateFormData(prefabId, 'notifications', checked)}
              description="Pop-up messages for achievements, warnings, or important events"
            />
            <ToggleField
              label="Tooltips"
              checked={data.tooltips}
              onCheckedChange={(checked) => updateFormData(prefabId, 'tooltips', checked)}
              description="Helpful text that appears when hovering over or interacting with objects"
            />
            <ToggleField
              label="Quick Actions"
              checked={data.quickActions}
              onCheckedChange={(checked) => updateFormData(prefabId, 'quickActions', checked)}
              description="Hotkey bar or quick-access buttons for frequently used items or abilities"
            />
            <ToggleField
              label="Status Effects"
              checked={data.statusEffects}
              onCheckedChange={(checked) => updateFormData(prefabId, 'statusEffects', checked)}
              description="Icons showing temporary effects like power-ups, debuffs, or special states"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen bg-[#121019] text-white relative">
      <div className="flex h-full">
        {/* Left sidebar with prefab types */}
        <div className="w-[240px] bg-[#1b1825] border-r border-[#2a2635] flex flex-col">
          <div className="p-6 border-b border-[#2a2635]">
            <h1 className="text-lg text-white">Prefab Designer</h1>
            <p className="text-sm text-[#8a80ac] mt-1">Configure game elements</p>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-2">
              {prefabTypes.map((prefab) => {
                const Icon = prefab.icon;
                return (
                  <button
                    key={prefab.id}
                    onClick={() => setActivePrefab(prefab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-left transition-colors ${
                      activePrefab === prefab.id
                        ? 'bg-[#2d283e] text-white'
                        : 'text-[#8a80ac] hover:bg-[#221e2e] hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{prefab.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="h-16 bg-[#1b1825] border-b border-[#2a2635] flex items-center px-6">
            <div className="flex items-center gap-3">
              {(() => {
                const currentPrefab = prefabTypes.find(p => p.id === activePrefab);
                const Icon = currentPrefab?.icon;
                return Icon ? <Icon className="w-5 h-5 text-[#8a80ac]" /> : null;
              })()}
              <div>
                <h2 className="text-white">
                  {prefabTypes.find(p => p.id === activePrefab)?.name} Configuration
                </h2>
                <p className="text-xs text-[#8a80ac]">
                  Configure properties and behaviors for this prefab type
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <PrefabCard
              title={`${prefabTypes.find(p => p.id === activePrefab)?.name} Settings`}
              className="w-full"
            >
              {renderFormFields(activePrefab)}
            </PrefabCard>
          </div>
        </div>
      </div>
    </div>
  );
}