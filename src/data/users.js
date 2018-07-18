const userContentPath = `${process.env.PUBLIC_URL}/img/users`;

const EveryInteractAvatar = `${userContentPath}/EveryInteract/avatar.png`;
const EveryInteractBackground = `${userContentPath}/EveryInteract/background.jpg`;
const sfchronicleAvatar = `${userContentPath}/sfchronicle/avatar.jpg`;
const sfchronicleBackground = `${userContentPath}/sfchronicle/background.jpg`;
const GFXAlertAvatar = `${userContentPath}/GFX_Alert/avatar.png`;
const GFXAlertBackground = `${userContentPath}/GFX_Alert/background.png`;
const mohanbelaniAvatar = `${userContentPath}/mohanbelani/avatar.jpg`;
const mohanbelaniBackground = `${userContentPath}/mohanbelani/background.jpg`;

export default [
  {
    id: 'EveryInteract',
    name: 'Every Interaction',
    avatar: EveryInteractAvatar,
    background: EveryInteractBackground,
    official: true,
    followed: true,
    about:
      'UX Design studio focussed problem solving creativity. Design to us is how can we make things *work* amazing.',
    location: 'London, UK',
    ownUrl: 'https://everyinteraction.com',
    joined: 'May 2008',
  },
  {
    id: 'sfchronicle',
    name: 'San Francisco Chronicle',
    avatar: sfchronicleAvatar,
    background: sfchronicleBackground,
    official: true,
    followed: false,
    about:
      'The Voice of the West. The Voice of San Francisco and the Bay Area.',
    location: 'San Francisco, CA',
    joined: 'March 2010',
  },
  {
    id: 'GFX_Alert',
    name: 'GFX Alert',
    avatar: GFXAlertAvatar,
    background: GFXAlertBackground,
    official: false,
    followed: false,
    about:
      'GFX Alert is dedicated to inform, educate & help graphic designers to find greater success in what they do. How can we help you?',
    location: 'London, England',
    joined: 'October 2014',
  },
  {
    id: 'mohanbelani',
    name: 'Mohan Belani',
    avatar: mohanbelaniAvatar,
    background: mohanbelaniBackground,
    official: false,
    followed: false,
    about:
      "Co-Founder & CEO, e27 - Asia's leading platform for tech and innovation businesses. Organizer of Echelon, leading tech/startup event in Asia.",
    location: 'Singapore',
    ownUrl: 'https://e27.co',
    joined: 'April 2007',
  },
];
