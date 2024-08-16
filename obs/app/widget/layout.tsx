export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex flex-col h-full mx-auto">

        <main className="grid place-items-center my-auto">

          {children}

        </main>

      </div>
    )
  }