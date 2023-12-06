/* eslint-disable react/prop-types */
import { useLoaderData } from 'react-router-dom'

export function ArticlePage() {
  const article = useLoaderData()

  return (
    <div className="flex flex-col overflow-auto">
      <header className="relative mb-4">
        <img
          src={article.cover}
          alt=""
          className="h-96 w-full object-cover object-top"
        />
        <h1 className="absolute bottom-0 min-h-fit w-full bg-gradient-to-t from-black px-6 pb-2 text-3xl !leading-relaxed text-dark-text max-md:text-2xl">
          {article.essay.title}
        </h1>
      </header>

      <p className="whitespace-pre-line px-12 pb-8 align-bottom text-lg text-light-text dark:text-dark-text">
        {article.essay.body}
      </p>

      <button className="bg-light-primary p-8 text-dark-text">
        Assista {article.type === 'movie' ? 'ao filme' : 'a série'}
      </button>
    </div>
  )
}
