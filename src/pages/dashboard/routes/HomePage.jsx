/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

import { articles } from '../articles.json'
import { Heading, PageContainer } from '../components'
import { ArrowRightCircle, Tv, Wallet } from 'lucide-react'

export function HomePage() {
  return (
    <PageContainer>
      <section className="mb-8 overflow-auto pb-2">
        <Heading>Novidades</Heading>

        <ul className="flex flex-col gap-4 text-dark-text">
          <li className="flex items-center justify-start gap-4 rounded-xl bg-light-primary p-8">
            <Tv size={28} />
            <h2 className="text-lg">
              Em breve, parceira com outras plataformas de streaming, fique
              ligado!
            </h2>
          </li>
          <li className="flex items-center justify-between gap-4 rounded-xl bg-light-secondary p-8">
            <div className="flex gap-4">
              <Wallet size={28} />
              <h2 className="text-lg">Conheça mais sobre o ID Jovem</h2>
            </div>

            <a
              href="https://www.gov.br/mdh/pt-br/idjovem"
              className="flex items-center gap-2"
              target="_blank"
              rel="noreferrer noopener"
            >
              <ArrowRightCircle size={28} />
              <span>Saiba mais</span>
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-8 overflow-auto pb-2">
        <Heading>Artigos recentes</Heading>

        <ul className="flex w-max gap-6">
          {articles.map(({ slugName, cover, essay }) => {
            essay.title = essay.title.replaceAll('&quot;', '"')
            essay.body = essay.body.replaceAll('&quot;', '"')

            return (
              <li
                key={slugName}
                className="relative cursor-pointer select-none overflow-hidden rounded-md hover:scale-[1.02] hover:transition-transform"
              >
                <Link to={`/dashboard/${slugName}`}>
                  <img
                    src={cover}
                    alt=""
                    className="h-96 w-64 object-cover object-top max-md:h-[19rem]"
                  />
                  <h2 className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent px-2 pb-2 text-xl text-dark-text max-md:text-lg">
                    {essay.title}
                  </h2>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </PageContainer>
  )
}
