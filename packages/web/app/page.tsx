import Link from 'next/link'
export default function Home() {
  return <div>
    <p>The /photos has 1 level of dynamic route: /photos/[photo]
      When you navigate to `/photos/hello`, the modal interception does not work
    </p>
    <div>
      <Link href="/photos">/Photos</Link>
    </div>
    <hr />

    <p>The /fotos has 2 levels of dynamic routes: /fotos/[author]/[title]
      When you navigate to `/fotos/author/hello`, the modal interception works
    </p>
    <div><Link href="/fotos">/Fotos</Link></div>

    <hr />
    <p>Server Actions </p>
    <div><Link href="/sa">/sa</Link></div>
  </div>
}