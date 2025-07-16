import React, { useState } from 'react';
import { HappyFaceIcon, MinusIcon, ClocksIcon, HomeIcon, ProfileIcon, SkullIcon, FolderIcon } from './icons/PrefabIcons';
import { DropdownField, ToggleField } from './FormField';

const prefabDefinitions = {
  player: {
    title: 'Player',
    icon: HappyFaceIcon,
    properties: [
      {
        id: 'sprite',
        label: 'Sprite',
        type: 'dropdown' as const,
        options: ['player_sprite', 'hero_sprite', 'character_sprite'],
        defaultValue: 'player_sprite',
        description: 'The visual representation of the player character'
      },
      {
        id: 'movement',
        label: 'Movement Type',
        type: 'dropdown' as const,
        options: ['Platformer', 'Top-down', 'Side-scrolling', 'Physics-based'],
        defaultValue: 'Platformer',
        description: 'How the player moves through the game world'
      },
      {
        id: 'speed',
        label: 'Movement Speed',
        type: 'dropdown' as const,
        options: ['50', '100', '150', '200'],
        defaultValue: '100',
        description: 'How fast the player moves (pixels per second)'
      },
      {
        id: 'actions',
        label: 'Available Actions',
        type: 'dropdown' as const,
        options: ['jump, attack', 'jump, attack, dash', 'move only'],
        defaultValue: 'jump, attack',
        description: 'What actions the player can perform'
      }
    ]
  },
  platform: {
    title: 'Platform',
    icon: MinusIcon,
    properties: [
      {
        id: 'sprite',
        label: 'Sprite',
        type: 'dropdown' as const,
        options: ['platform_sprite', 'ground_sprite', 'stone_platform'],
        defaultValue: 'platform_sprite',
        description: 'The visual appearance of the platform'
      },
      {
        id: 'collision_behavior',
        label: 'Collision behavior',
        type: 'dropdown' as const,
        options: ['Block', 'Pass-through', 'Bounce', 'Damage', 'Teleport'],
        defaultValue: 'Block',
        description: 'What happens when the player touches this platform'
      },
      {
        id: 'platform_behavior',
        label: 'Platform behavior',
        type: 'dropdown' as const,
        options: ['Solid', 'Decorative', 'One-way', 'Breakable'],
        defaultValue: 'Solid',
        description: 'The structural properties of the platform'
      }
    ]
  },
  item: {
    title: 'Item',
    icon: ClocksIcon,
    properties: [
      {
        id: 'sprite',
        label: 'Sprite',
        type: 'dropdown' as const,
        options: ['item_sprite', 'coin_sprite', 'gem_sprite'],
        defaultValue: 'item_sprite',
        description: 'The visual appearance of the collectible item'
      },
      {
        id: 'collision_behavior',
        label: 'Collision Behavior',
        type: 'dropdown' as const,
        options: ['Collect', 'Activate', 'Damage', 'Heal', 'Power-up'],
        defaultValue: 'Collect',
        description: 'What happens when the player touches this item'
      },
      {
        id: 'timer_existence',
        label: 'Timer of Existence (seconds)',
        type: 'dropdown' as const,
        options: ['0', '5', '10', '30', '60'],
        defaultValue: '0',
        description: 'How long the item exists before disappearing (0 = permanent)'
      },
      {
        id: 'respawn',
        label: 'Respawn After Collection',
        type: 'toggle' as const,
        defaultValue: false,
        description: 'Whether the item reappears after being collected'
      }
    ]
  },
  room: {
    title: 'Room',
    icon: HomeIcon,
    properties: [
      {
        id: 'camera_angle',
        label: 'Camera angle',
        type: 'dropdown' as const,
        options: ['Horizontal 2D', 'Aerial 2D', 'Isometric', 'Side-scrolling'],
        defaultValue: 'Horizontal 2D',
        description: 'The perspective from which the player views the game'
      },
      {
        id: 'room_movement',
        label: 'Room movement',
        type: 'dropdown' as const,
        options: ['Static', 'Scrolling', 'Auto-scroll', 'Player-follow'],
        defaultValue: 'Player-follow',
        description: 'How the camera behaves in relation to the player'
      },
      {
        id: 'dimensions',
        label: 'Dimensions (width x height)',
        type: 'dropdown' as const,
        options: ['800x600', '1024x768', '1920x1080'],
        defaultValue: '800x600',
        description: 'The size of the game room in pixels'
      },
      {
        id: 'gravity_strength',
        label: 'Gravity strength',
        type: 'dropdown' as const,
        options: ['100', '300', '500', '700'],
        defaultValue: '500',
        description: 'How strong the downward force is (higher = faster falling)'
      },
      {
        id: 'movement_speed',
        label: 'Movement speed',
        type: 'dropdown' as const,
        options: ['25', '50', '75', '100'],
        defaultValue: '50',
        description: 'Speed for moving platforms or camera movement'
      },
      {
        id: 'screen_shake',
        label: 'Enable screen shake',
        type: 'toggle' as const,
        defaultValue: false,
        description: 'Adds screen shake effects for impacts and explosions'
      }
    ]
  },
  npc: {
    title: 'NPC',
    icon: ProfileIcon,
    properties: [
      {
        id: 'sprite',
        label: 'Sprite',
        type: 'dropdown' as const,
        options: ['npc_sprite', 'villager_sprite', 'guard_sprite'],
        defaultValue: 'npc_sprite',
        description: 'The visual appearance of the non-player character'
      },
      {
        id: 'behavior',
        label: 'Behavior Type',
        type: 'dropdown' as const,
        options: ['Static', 'Patrol', 'Chase', 'Flee', 'Random Walk', 'Guard'],
        defaultValue: 'Static',
        description: 'How the NPC moves and reacts to the player'
      },
      {
        id: 'dialogue',
        label: 'Dialogue Text',
        type: 'dropdown' as const,
        options: ['Hello there!', 'Need help?', 'Welcome!'],
        defaultValue: 'Hello there!',
        description: 'What the NPC says when interacted with'
      },
      {
        id: 'speed',
        label: 'Movement Speed',
        type: 'dropdown' as const,
        options: ['25', '50', '75', '100'],
        defaultValue: '50',
        description: 'How fast the NPC moves (pixels per second)'
      },
      {
        id: 'interaction',
        label: 'Interaction Type',
        type: 'dropdown' as const,
        options: ['Talk', 'Quest', 'Shop', 'Battle', 'None'],
        defaultValue: 'Talk',
        description: 'What happens when the player interacts with this NPC'
      }
    ]
  },
  door: {
    title: 'Door',
    icon: SkullIcon,
    properties: [
      {
        id: 'direction',
        label: 'Direction/Destination',
        type: 'dropdown' as const,
        options: ['next_room', 'previous_room', 'exit'],
        defaultValue: 'next_room',
        description: 'Where the door leads when used'
      },
      {
        id: 'behavior',
        label: 'Door Behavior',
        type: 'dropdown' as const,
        options: ['Always Open', 'Locked', 'Key Required', 'Switch Required', 'Timed'],
        defaultValue: 'Always Open',
        description: 'What conditions must be met to use this door'
      },
      {
        id: 'trigger_event',
        label: 'Trigger Event',
        type: 'dropdown' as const,
        options: ['Player Touch', 'Key Press', 'Item Collected', 'Enemy Defeated', 'Timer'],
        defaultValue: 'Player Touch',
        description: 'What action causes the door to activate'
      },
      {
        id: 'required_item',
        label: 'Required Item (if locked)',
        type: 'dropdown' as const,
        options: ['key', 'gold_key', 'special_item'],
        defaultValue: 'key',
        description: 'What item the player needs to unlock this door'
      }
    ]
  },
  menu: {
    title: 'Menu',
    icon: FolderIcon,
    properties: [
      {
        id: 'restart',
        label: 'Show Restart Option',
        type: 'toggle' as const,
        defaultValue: true,
        description: 'Allows players to restart the current level'
      },
      {
        id: 'play_pause',
        label: 'Show Play/Pause Option',
        type: 'toggle' as const,
        defaultValue: true,
        description: 'Lets players pause and resume the game'
      },
      {
        id: 'sound_toggle',
        label: 'Show Sound On/Off Option',
        type: 'toggle' as const,
        defaultValue: true,
        description: 'Allows players to mute/unmute game audio'
      },
      {
        id: 'save_load',
        label: 'Show Save/Load Options',
        type: 'toggle' as const,
        defaultValue: false,
        description: 'Enables saving and loading game progress'
      },
      {
        id: 'settings',
        label: 'Show Settings Menu',
        type: 'toggle' as const,
        defaultValue: false,
        description: 'Provides access to additional game settings'
      }
    ]
  },
  controls: {
    title: 'Controls',
    icon: FolderIcon,
    properties: [
      {
        id: 'single_press',
        label: 'Single Press Actions',
        type: 'dropdown' as const,
        options: ['SPACE:jump, E:interact', 'ENTER:start, ESC:pause'],
        defaultValue: 'SPACE:jump, E:interact',
        description: 'Actions that happen with a single key press'
      },
      {
        id: 'hold_press',
        label: 'Hold Press Actions',
        type: 'dropdown' as const,
        options: ['ARROW_LEFT:move_left, ARROW_RIGHT:move_right', 'WASD:movement'],
        defaultValue: 'ARROW_LEFT:move_left, ARROW_RIGHT:move_right',
        description: 'Actions that happen while holding down a key'
      },
      {
        id: 'projectile_controls',
        label: 'Projectile Controls',
        type: 'dropdown' as const,
        options: ['CTRL:fire_projectile', 'SPACE:shoot'],
        defaultValue: 'CTRL:fire_projectile',
        description: 'Key bindings for shooting projectiles'
      }
    ]
  },
  score: {
    title: 'Score',
    icon: FolderIcon,
    properties: [
      {
        id: 'point_sources',
        label: 'What Gives Points?',
        type: 'dropdown' as const,
        options: ['enemy_defeat:10, item_collect:5', 'completion:100'],
        defaultValue: 'enemy_defeat:10, item_collect:5',
        description: 'Which game actions award points and how many'
      },
      {
        id: 'win_condition',
        label: 'How to Win Game',
        type: 'dropdown' as const,
        options: ['Reach Score', 'Collect All Items', 'Defeat All Enemies', 'Reach End', 'Survive Time'],
        defaultValue: 'Reach Score',
        description: 'What the player must accomplish to win'
      },
      {
        id: 'win_value',
        label: 'Win Condition Value',
        type: 'dropdown' as const,
        options: ['100', '500', '1000', '5000'],
        defaultValue: '1000',
        description: 'The target number needed to achieve the win condition'
      },
      {
        id: 'display_position',
        label: 'Score Display Position',
        type: 'dropdown' as const,
        options: ['Top Left', 'Top Right', 'Bottom Left', 'Bottom Right', 'Center Top'],
        defaultValue: 'Top Right',
        description: 'Where the score is shown on the screen'
      }
    ]
  }
};

export function PrefabDesigner() {
  const [activeTab, setActiveTab] = useState('platform');
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleValueChange = (propertyId: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [propertyId]: value
    }));
  };

  const activePrefab = prefabDefinitions[activeTab as keyof typeof prefabDefinitions];

  return (
    <div className="bg-[#121019] min-h-screen p-[50px]">
      <div className="w-[1089px] mx-auto">
        {/* Tab Navigation */}
        <div className="mb-[42px]">
          <div className="bg-[#09080c] rounded border border-[#484063] p-[2px] flex gap-0.5">
            {Object.entries(prefabDefinitions).map(([key, definition]) => {
              const IconComponent = definition.icon;
              const isActive = activeTab === key;
              
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 flex items-center justify-center gap-2 px-2 py-[8px] rounded-sm ${
                    isActive ? 'bg-[#484063]' : ''
                  }`}
                >
                  <IconComponent />
                  <span className="text-[#e2e0eb] text-[14px] font-medium">
                    {definition.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col">
          <h2 className="text-[#e2e0eb] text-[14px] font-semibold leading-[18px] mb-4">
            {activePrefab.title}
          </h2>
          
          <div className="bg-[#1b1825] rounded px-2 py-3">
            <div className="grid grid-cols-2 gap-x-4">
              {activePrefab.properties.map((property, index) => {
                const key = `${property.id}-${index}`;
                
                if (property.type === 'dropdown') {
                  return (
                    <DropdownField
                      key={key}
                      label={property.label}
                      value={formData[property.id] || property.defaultValue}
                      onValueChange={(value) => handleValueChange(property.id, value)}
                      options={property.options}
                      description={property.description}
                    />
                  );
                } else if (property.type === 'toggle') {
                  return (
                    <ToggleField
                      key={key}
                      label={property.label}
                      checked={formData[property.id] ?? property.defaultValue}
                      onCheckedChange={(checked) => handleValueChange(property.id, checked)}
                      description={property.description}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}