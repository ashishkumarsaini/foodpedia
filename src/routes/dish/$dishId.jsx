import { Link, createFileRoute } from '@tanstack/react-router'
import { dishes, getDishById } from '../../data/dishes'

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  const { dishId } = Route.useParams()
  const dish = getDishById(dishId) || dishes[0]
  const relatedDishes = dishes.filter((item) => item.id !== dish.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-[#fff8ee]">
      <section className="mx-auto grid min-h-screen w-full max-w-7xl gap-8 px-5 py-6 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-8">
        <div className={`${dish.accent} relative isolate overflow-hidden rounded-[2rem] p-5 shadow-2xl shadow-orange-950/15 sm:p-7 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)]`}>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.28),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.18),transparent_24%)]" />
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="grid size-12 place-items-center rounded-2xl bg-white/90 text-2xl font-light text-[#181411] shadow-lg shadow-black/10"
              aria-label="Back to dishes"
            >
              ‹
            </Link>
            <button className="grid size-12 place-items-center rounded-2xl bg-white/90 text-xl font-black text-[#181411] shadow-lg shadow-black/10">
              +
            </button>
          </div>

          <div className="flex h-[420px] items-center justify-center sm:h-[520px] lg:h-[calc(100%-7rem)]">
            <img
              src={dish.image}
              alt={dish.name}
              className="aspect-square w-full max-w-[560px] rounded-full object-cover shadow-2xl shadow-black/30"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[2rem] bg-white p-5 shadow-xl shadow-orange-900/5 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-neutral-500">
            <span>Food review rating</span>
            <span className="rounded-full bg-[#fff1e8] px-3 py-1 text-[#f15a38]">{dish.rating}</span>
            <span>{dish.category}</span>
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">{dish.name}</h1>
              <p className="mt-3 text-base font-medium text-neutral-500">Jl. soekarno hatta 17a, Jakarta, Indonesia</p>
            </div>
            <p className="text-4xl font-black tracking-tight">${dish.price}.00</p>
          </div>

          <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-3xl bg-neutral-50 text-center">
            <div className="border-r border-neutral-200 p-4 sm:p-5">
              <p className="text-lg font-black">{dish.time}</p>
              <p className="mt-1 text-xs font-bold text-neutral-500 sm:text-sm">Delivery</p>
            </div>
            <div className="border-r border-neutral-200 p-4 sm:p-5">
              <p className="text-lg font-black">{dish.reviews}</p>
              <p className="mt-1 text-xs font-bold text-neutral-500 sm:text-sm">Review</p>
            </div>
            <div className="p-4 sm:p-5">
              <p className="text-lg font-black">{dish.calories}</p>
              <p className="mt-1 text-xs font-bold text-neutral-500 sm:text-sm">Kcal</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-black tracking-tight">Description</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-600">{dish.description}</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-[160px_1fr]">
            <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-neutral-200 bg-white text-center text-lg font-black">
              <button className="p-4">-</button>
              <span className="p-4">1</span>
              <button className="p-4">+</button>
            </div>
            <button className="rounded-2xl bg-[#f15a38] px-6 py-4 text-base font-black text-white shadow-xl shadow-orange-500/25">
              Add to cart
            </button>
          </div>

          <div className="mt-10">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-black tracking-tight">More to try</h2>
              <Link to="/" className="text-sm font-black text-[#f15a38]">
                View menu
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {relatedDishes.map((item) => (
                <Link
                  key={item.id}
                  to="/dish/$dishId"
                  params={{ dishId: item.id }}
                  className="rounded-3xl bg-neutral-50 p-3 transition hover:bg-[#fff1e8]"
                >
                  <img src={item.image} alt={item.name} className="h-28 w-full rounded-2xl object-cover" />
                  <p className="mt-3 text-sm font-black leading-tight">{item.name}</p>
                  <p className="mt-1 text-sm font-bold text-neutral-500">${item.price}.00</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const Route = createFileRoute('/dish/$dishId')({
  component: RouteComponent,
})
