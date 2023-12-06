import { Link } from 'react-router-dom'

import { Heading, PageContainer } from '../components'

export function UserPage() {
  return (
    <PageContainer>
      <Heading>Usuário</Heading>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center gap-2">
          <img
            className="h-32 w-32 rounded-full border-2 border-light-text object-cover dark:border-dark-text"
            src="https://www.promoview.com.br/uploads/images/unnamed(19).png"
            alt=""
          />

          <h2 className="text-xl">Seu nome</h2>
        </div>

        <div>
          <p className="text-lg">Quantos filmes assistiu? 0</p>
          <p className="text-lg">Quantas séries assistiu? 0</p>
        </div>

        <Link
          to={'/'}
          className="bg-light-primary px-6 py-4 text-center text-dark-text"
        >
          Deslogar
        </Link>
      </div>
    </PageContainer>
  )
}
