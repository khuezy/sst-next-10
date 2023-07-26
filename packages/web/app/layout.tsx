

export default async function RootLayout({ children }: {
  children: React.ReactNode
}) {
  // const pref = await getServerSession()
  const theme: any = ''// pref?.preference.ui?.theme || ''
  return (
    <html dir='ltr' lang='en' >
      <body data-theme={''} className='overflow-hidden'>
        {children}
      </body>
    </html>
  )
}