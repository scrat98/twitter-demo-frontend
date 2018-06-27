import EveryInteractAvatar from './img/users/EveryInteract/avatar.png';
import EveryInteractBackground from './img/users/EveryInteract/background.jpg';
import sfchronicleAvatar from './img/users/sfchronicle/avatar.jpg';
import sfchronicleBackground from './img/users/sfchronicle/background.jpg';
import GFXAlertAvatar from './img/users/GFX_Alert/avatar.png';
import GFXAlertBackground from './img/users/GFX_Alert/background.png';
import mohanbelaniAvatar from './img/users/mohanbelani/avatar.jpg';
import mohanbelaniBackground from './img/users/mohanbelani/background.jpg';

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
