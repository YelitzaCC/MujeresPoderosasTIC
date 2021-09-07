import Link from 'next/link'

function Home() {
  return (
    <div>
      <h1>Mujeres Poderosas</h1>
      <p>Cambio por sandra</p>
      <Link href="/courses">
        <a>To cursos..</a>
      </Link>
    </div>
  )
}

export default Home
