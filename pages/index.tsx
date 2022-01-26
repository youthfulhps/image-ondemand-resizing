import type { GetServerSidePropsContext, NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useMemo, useState } from 'react'
import Image from 'next/image'

const imageSources = ['sample-spider-1.jpg', 'sample-spider-2.jpg']

interface MainPageProps {
  w: string
  h: string
  q: string
  webp: string
}

export const getServerSideProps = ({ query }: GetServerSidePropsContext) => {
  const { w, h, q, webp } = query

  return {
    props: {
      w: w ?? '500',
      h: h ?? '350',
      q: q ?? 'fill',
      webp: webp ?? 'true',
    },
  }
}

const Home: NextPage<MainPageProps> = ({ w, h, q, webp }) => {
  const [imageIndex, setImageIndex] = useState<number>(0)

  const imageUrl = useMemo(() => {
    let baseUrl = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
    baseUrl += `/${imageSources[imageIndex]}`
    baseUrl += `?w=${w}&`
    baseUrl += `h=${h}&`
    baseUrl += `webp=${webp}&`
    baseUrl += `q=${q}`

    return baseUrl
  }, [w, h, q, webp])

  return (
    <div className={styles.container}>
      <Image
        src={imageUrl}
        width={w}
        height={h}
        loading="lazy"
        placeholder={'blur'}
        blurDataURL={imageUrl}
      />
    </div>
  )
}

export default Home
