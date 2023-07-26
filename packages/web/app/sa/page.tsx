'use client'

import { test } from './actions'
export default function ServerAction() {
  return <div>
    <button onClick={async () => {
      const r = await test()
      alert(JSON.stringify(r))
    }}>Fire Server Action</button>
  </div>
}