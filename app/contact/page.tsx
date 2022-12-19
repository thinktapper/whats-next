'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const handleSubmit = () => {}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <Link href="/">Home</Link>
    </div>
  )
}
