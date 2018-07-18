const userContentPath = `${process.env.PUBLIC_URL}/img/users`;

const sfchronicleAvatar = `${userContentPath}/sfchronicle/avatar.jpg`;
const GFXAlertAvatar = `${userContentPath}/GFX_Alert/avatar.png`;
const mohanbelaniAvatar = `${userContentPath}/mohanbelani/avatar.jpg`;

export default [
  {
    avatar: sfchronicleAvatar,
    name: 'San Francisco Chronicle',
    id: 'sfchronicle',
  },

  {
    avatar: GFXAlertAvatar,
    name: 'GFX Alert',
    official: true,
    id: 'GFX_Alert',
  },
  {
    avatar: mohanbelaniAvatar,
    name: 'Mohan Belani',
    id: 'mohanbelani',
  },
];
