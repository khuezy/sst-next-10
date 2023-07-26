export default function Photo({ params }: any) {
  return <div>params.photo: {params.photo}
    <p style={{ color: 'red' }}>If you see this page after click on the button, that means modal inteception did not work.
      You should see this on a full page refresh.
    </p>
  </div>
}