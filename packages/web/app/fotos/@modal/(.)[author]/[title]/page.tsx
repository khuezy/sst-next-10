export default function ModalPhoto({ params }: any) {
  return <div>
    This is a modal of photo {params.author} {params.title}
    <p style={{ color: 'green' }}>You should see me on modal interception.</p>
  </div>
}