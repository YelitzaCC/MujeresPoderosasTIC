import Link from 'next/link'

function Home() {
  return (
    <div>
      <h1>Mujeres Poderosas</h1>
      <p>Esta es una pagina para mujeres, si eres hombre vete</p>
      <Link href="/courses">
        <a>To cursos..</a>
      </Link>
    </div>
  )
}

export default Home
