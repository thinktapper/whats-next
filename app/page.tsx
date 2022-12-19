import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        <h1>Hi, my name is Andrew Tapper!</h1>
      </div>
      <div>
        <Link href="/blog">blog</Link>
      </div>
      <div>contacting</div>
    </div>
  )
}
