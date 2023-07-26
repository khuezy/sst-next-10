export default function foto({ params }: any) {
  return <div>params.title: {params.title}
    <p style={{ color: 'red' }}>If you see this after clicking on the button, then it means modal interception isn't working.
      You should only see me on full page reload.
    </p></div>
}