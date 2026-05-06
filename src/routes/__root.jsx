import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Header } from '../components/header'

// eslint-disable-next-line react-refresh/only-export-components
const RootLayout = () => (
  <main className="min-h-screen bg-[#fff8ee] text-[#181411] max-w-7xl m-auto px-4 md:px-8">
    <Header />
    <Outlet />
  </main>
)

export const Route = createRootRoute({ component: RootLayout })
