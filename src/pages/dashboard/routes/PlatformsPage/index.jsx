import { PlatformCard } from './components/PlatformCard'
import { Heading, PageContainer } from '../../components'

export function PlatformsPage() {
  return (
    <PageContainer>
      <section>
        <Heading>Suas plataformas</Heading>
        <ul>
          <li>
            <PlatformCard backgroundColor="#db0000">Netflix</PlatformCard>
          </li>
          <li>
            <PlatformCard backgroundColor="#00a8e1">
              Amazon Prime Video
            </PlatformCard>
          </li>
          <li>
            <PlatformCard backgroundColor="#941de8">HBO MAX</PlatformCard>
          </li>
        </ul>
      </section>
    </PageContainer>
  )
}
