import theme from '../global/styles/theme'

export default [
  {
    name: "Flame\nGold Gnome",
    description: 'Victim flames',
    wins: 93,
    stars: 9.5,
    avatar: require('../assets/flame.png'),
    color: theme.colors.flame_gold,
    tintBlack: true,
    offsetX: -10,
    offsetY: 8
  },
  {
    name: "Ice Dimond\nGnome",
    description: 'Cold kingdom',
    wins: 69,
    stars: 9.1,
    avatar: require('../assets/ice.png'),
    color: theme.colors.ice_diamond,
     height: 370,
    offsetX: -85,
  },
  {
    name: "Fire Ruby\nGnome",
    description: 'Fire lightning',
    wins: 88,
    stars: 7.9,
    avatar: require('../assets/fire.png'),
    color: theme.colors.fire_ruby,
    height: 450,
    offsetX:  10,
    offsetY: 8,
  },
  {
    name: "Poisonous\nSteel Gnome",
    description: 'Emerald kingdom',
    wins: 95,
    stars: 9.1,
    avatar: require('../assets/steel.png'),
    color: theme.colors.poisonous_steel,
    height: 518,
    offsetX: -25,
    offsetY: -8,
  },
]