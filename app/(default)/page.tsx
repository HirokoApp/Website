export const metadata = {
  title: 'Hiroko',
  description: 'The only app you need to keep your server safe, entertained and engaged!',
}

import Hero from '@/components/hero'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
    </>
  )
}
