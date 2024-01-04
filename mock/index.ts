export const images = ['/img/c1.avif', '/img/c2.avif', '/img/c3.avif'];

export interface HomeItem {
  title: string;
  type: string;
  text: string;
  author: string;
  authorAvatar: string;
  image: string;
}

export const homeItems: HomeItem[] = [
  {
    title: 'Exploring Maui',
    type: 'Blog',
    text: 'We just got back from a trip to Maui, and we had a great time...',
    author: 'Sunny Yoon',
    authorAvatar: '/img/sunny.jpg',
    image: images[0],
  },
  {
    title: 'Arctic Adventures',
    type: 'Blog',
    text: 'Last month we took a trek to the Arctic Circle. The isolation was just what we needed after...',
    author: 'Sunny Yoon',
    authorAvatar: '/img/sunny.jpg',
    image: images[1],
  },
  {
    title: 'Frolicking in the Faroe Islands',
    type: 'Blog',
    text: 'The Faroe Islands are a North Atlantic archipelago located 320 kilometres (200 mi) north-northwest of Scotland...',
    author: 'Sunny Yoon',
    authorAvatar: '/img/sunny.jpg',
    image: images[2],
  },
];

export const notifications = [
  { title: 'New friend request', when: '6 hr' },
  { title: 'Please change your password', when: '1 day' },
  { title: 'You have a new message', when: '2 weeks' },
  { title: 'Welcome to the app!', when: '1 month' },
];

// Some fake lists
export const lists = [
  {
    name: 'Groceries',
    id: 'groceries',
    items: [
      { name: 'Apples', done: true },
      { name: 'Bananas', done: false },
      { name: 'Milk', done: false },
      { name: 'Ice Cream', done: true },
    ],
  },
  {
    name: 'Hardware Store',
    id: 'hardware',
    items: [
      { name: 'Circular Saw', done: true },
      { name: 'Tack Cloth', done: true },
      { name: 'Drywall', done: true },
      { name: 'Router', done: true },
    ],
  },
  {
    name: 'Work',
    id: 'work',
    items: [
      { name: 'TPS Report', done: false },
      { name: 'Set up email', done: true },
    ],
  },
  { name: 'Reminders', id: 'reminders' },
];
