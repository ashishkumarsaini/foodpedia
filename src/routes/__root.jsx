import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Header } from '../components/header'
import { DishesProvider } from '../providers/dishes-provider'
import { Footer } from '../components/footer'

// eslint-disable-next-line react-refresh/only-export-components
const RootLayout = () => (
  <DishesProvider>
    <div className="min-h-screen bg-[#fff8ee] text-[#181411] max-w-7xl m-auto md:px-8">
      <Header />
      <main className='mt-40'>
        <Outlet />
      </main>
      <Footer />
    </div>
  </DishesProvider>
)

export const Route = createRootRoute({ component: RootLayout })
