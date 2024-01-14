import { getData } from "./getData"

export default function Home() {
  const items = getData()
  return (
    <main className="flex min-h-screen h-[200vh] p-24">
      <ol className="list-disc">
        {
          items.map(x => (<li key={x.id}>{x.name}</li>))
        }
      </ol>
    </main>
  )
}
