import { getData } from "./getData"

export default function Home() {
  const items = getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {
        items.map(x => (<div key={x.id}>{x.name}</div>))
      }
    </main>
  )
}
