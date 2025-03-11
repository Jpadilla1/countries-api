export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Countries API</h1>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Available Endpoints:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <code className="bg-gray-100 p-1 rounded">/api/all</code> -
              Returns all countries
            </li>
            <li>
              <code className="bg-gray-100 p-1 rounded">
                /api/name/{"{name}"}
              </code>{" "}
              - Filters countries by name
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
