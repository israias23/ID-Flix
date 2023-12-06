import { Heading, PageContainer } from '../components'

export function ForumPage() {
  return (
    <PageContainer>
      <Heading>Fórum</Heading>

      <div className="flex flex-col items-center gap-4">
        <textarea
          className="h-40 w-full bg-dark-background p-2 text-dark-text dark:bg-light-background dark:text-light-text"
          placeholder="Escreva seu comentário"
        ></textarea>
        <button
          type="button"
          className="self-end rounded-xl bg-light-primary px-4 py-2 text-dark-text"
        >
          Enviar
        </button>

        <h2 className="text-xl">Últimos tópicos</h2>
        <p>Ainda não temos nada</p>
      </div>
    </PageContainer>
  )
}
