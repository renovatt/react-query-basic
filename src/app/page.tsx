import ListProjects from './components/ListProjects'
import ListSkills from './components/ListSkills'
import ListSoftskills from './components/ListSoftskills'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24 min-h-screen">
      <h2 className='text-white mb-4'>React Query - DataFetch</h2>
      <section className='flex items-start w-full justify-around'>
        <ListProjects />
        <ListSkills />
        <ListSoftskills />
      </section>
    </main>
  )
}
