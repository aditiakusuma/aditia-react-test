export const getData = () => {
  return [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
};

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
