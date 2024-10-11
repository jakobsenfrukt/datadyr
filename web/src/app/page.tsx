import InfoSection from '@/components/InfoSection';
import Intro from '@/components/Intro';
import PersonList from "@/components/PersonList"
import ProjectSection from '@/components/ProjectSection';

export default function Home() {
  return (
    <main>
      <Intro />
      <InfoSection />
      <PersonList />
      <ProjectSection />
    </main>
  );
}
