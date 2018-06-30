const tweetsContentPath = `${process.env.PUBLIC_URL}/img/tweets`;
const userContentPath = `${process.env.PUBLIC_URL}/img/users`;

const pinned = `${tweetsContentPath}/pinned.svg`;
const avatar = `${userContentPath}/EveryInteract/avatar.png`;
const tweet1 = `${tweetsContentPath}/tweet1.png`;
const tweet3 = `${tweetsContentPath}/tweet3.png`;

export default [
  {
    context: 'Pinned Tweet',
    contextImg: pinned,
    userFullName: 'Every Interaction',
    userId: 'EveryInteract',
    userAvatar: avatar,
    time: '2 Mar 2015',
    text:
      'We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI',
    img: tweet1,
    replies: 0,
    retweets: 17,
    likes: 47,
  },
  {
    userFullName: 'Every Interaction',
    userId: 'EveryInteract',
    userAvatar: avatar,
    time: '23h',
    text:
      'Our new website concept; Taking you =… @ Every Interaction instagram.com/p/BNFGrfhBP3M/',
    replies: 1,
    retweets: 4,
    likes: 2,
  },
  {
    userFullName: 'Every Interaction',
    userId: 'EveryInteract',
    userAvatar: avatar,
    time: 'Nov 18',
    text:
      'Variable web fonts are coming, and will open a world of opportunities for weight use online',
    img: tweet3,
    replies: 0,
    retweets: 0,
    likes: 0,
  },
];
