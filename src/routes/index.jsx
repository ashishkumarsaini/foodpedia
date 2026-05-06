import { Link, createFileRoute } from '@tanstack/react-router'

import { useDishes } from '../providers/dishes-provider';

// eslint-disable-next-line react-refresh/only-export-components
function Index() {
  const { dishes } = useDishes();
  const [firstDish, ...remainingDishes] = dishes;

  return (
    <div className="min-h-screen overflow-hidden px-4 md:px-0">
      <section className="relative flex w-full flex-col gap-8" id="special">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl pt-6 lg:pt-12">
            <p className="mb-4 w-fit rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-[#f15a38] shadow-sm">
              Today's Special Dish
            </p>
            <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-[#181411] sm:text-6xl lg:text-7xl">
              {firstDish.name}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
              {firstDish.instructions.slice(0, 150)}...
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/dish/$dishId"
                params={{ dishId: firstDish.id }}
                className="rounded-full bg-[#f15a38] px-6 py-4 text-center text-sm font-black text-white shadow-xl shadow-orange-500/25"
              >
                View today's pick
              </Link>
            </div>
          </div>

          <Link
            to="/dish/$dishId"
            params={{ dishId: firstDish.id }}
            className="group relative isolate mx-auto block w-full max-w-[520px] pt-10"
          >
            <div className="absolute inset-x-8 top-20 -z-10 h-72 rounded-full bg-[#f15a38]/25 blur-3xl" />
            <div className="overflow-hidden rounded-4xl bg-[#f15a38] shadow-2xl shadow-orange-500/25">
              <div className="relative h-80 sm:h-96">
                <img
                  src={firstDish.thumbnail}
                  alt={firstDish.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-black">
                  Rating 4.7
                </div>
              </div>
            </div>
          </Link>
        </div>

        <section id="popular" className="mt-25 mb-20">
          <div className="mb-10">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f15a38]">Popular dishes</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Dishes people come back for</h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {remainingDishes.map((dish) => (
              <Link
                key={dish.id}
                to="/dish/$dishId"
                params={{ dishId: dish.id }}
                className={`${dish.accentColor} group overflow-hidden rounded-[1.75rem] p-5 text-white shadow-xl shadow-neutral-950/10 transition duration-300 hover:-translate-y-1`}
              >
                <div className="flex min-h-48 flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-black text-white/80">{dish.category}</p>
                      <h3 className="mt-2 max-w-48 text-2xl font-black leading-tight tracking-tight">{dish.name}</h3>
                      <p className="mt-2 text-sm font-semibold text-white/75">Free delivery</p>
                    </div>
                    <img
                      src={dish.thumbnail}
                      alt={dish.name}
                      className="size-28 rounded-full object-cover shadow-2xl shadow-black/25 transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-xl font-black">{dish.cusine}</p>
                    <span className="rounded-full bg-[#181411] px-4 py-2 text-xs font-black text-white">View dish</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
})
