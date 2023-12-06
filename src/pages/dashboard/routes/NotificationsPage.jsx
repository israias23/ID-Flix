import { Heading, PageContainer } from '../components'

export function NotificationsPage() {
  return (
    <PageContainer>
      <Heading>Notificações</Heading>

      <ul className="flex flex-col items-center gap-4">
        <li className="italic">Você não tem nenhuma notificação</li>
      </ul>
    </PageContainer>
  )
}
