import { Schemes } from './schemes'

export const Pages = {
  pages: [
    {
      title: 'Home',
      href: '/',
      scheme: Schemes.base,
      bg: 'home'
    },
    {
      title: 'Design',
      href: '/design',
      scheme: '',
      bg: 'graphics'
    },
    {
      title: 'Filmography',
      href: '/film',
      scheme: '',
      bg: 'film'
    },
    {
      title: 'About',
      href: '/about',
      scheme: Schemes.pink,
      bg: 'about'
    }
  ]
}
