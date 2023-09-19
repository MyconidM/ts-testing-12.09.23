import Image from 'next/image'
import Title from '@/components/Titles'

export default function Home() {
  return (
    <main>
      <Title title="First title" className='bg-red-200' />
      <Title title='Second title' />
      <Title title='Thord title' className='bg-green-200' />
    </main>
  )
}
