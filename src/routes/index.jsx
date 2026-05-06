import { Link, createFileRoute } from '@tanstack/react-router'
import { dishes } from '../data/dishes'

const categories = ['Burger', 'Pizza', 'Noodle', 'Steak', 'Sushi']

// eslint-disable-next-line react-refresh/only-export-components
function Index() {
  const featuredDish = dishes[0]

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative flex w-full flex-col gap-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl pt-6 lg:pt-12">
            <p className="mb-4 w-fit rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-[#f15a38] shadow-sm">
              Menu special dish
            </p>
            <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-[#181411] sm:text-6xl lg:text-7xl">
              Reserved only for your cravings.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
              Browse bold comfort food, fresh bowls, and chef-picked favorites with a clean menu built for quick decisions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#popular"
                className="rounded-full bg-[#f15a38] px-6 py-4 text-center text-sm font-black text-white shadow-xl shadow-orange-500/25"
              >
                Explore dishes
              </a>
              <Link
                to="/dish/$dishId"
                params={{ dishId: featuredDish.id }}
                className="rounded-full border border-neutral-200 bg-white px-6 py-4 text-center text-sm font-black text-[#181411]"
              >
                View today's pick
              </Link>
            </div>
          </div>

          <Link
            to="/dish/$dishId"
            params={{ dishId: featuredDish.id }}
            className="group relative isolate mx-auto block w-full max-w-[520px] pt-10"
          >
            <div className="absolute inset-x-8 top-20 -z-10 h-72 rounded-full bg-[#f15a38]/25 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] bg-[#f15a38] shadow-2xl shadow-orange-500/25">
              <div className="relative h-80 sm:h-96">
                <img
                  src={featuredDish.image}
                  alt={featuredDish.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-black">
                  Rating {featuredDish.rating}
                </div>
              </div>
              <div className="rounded-t-[2rem] bg-white p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-neutral-500">{featuredDish.category}</p>
                    <h2 className="mt-1 text-3xl font-black tracking-tight">{featuredDish.name}</h2>
                  </div>
                  <p className="text-3xl font-black">${featuredDish.price}</p>
                </div>
                <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-2xl bg-neutral-50 text-center text-sm">
                  <span className="border-r border-neutral-200 p-4 font-bold">{featuredDish.time}</span>
                  <span className="border-r border-neutral-200 p-4 font-bold">{featuredDish.reviews}</span>
                  <span className="p-4 font-bold">{featuredDish.calories} kcal</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <section id="menu" className="rounded-[2rem] bg-white p-4 shadow-xl shadow-orange-900/5 sm:p-6">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => {
              const dish = dishes.find((item) => item.category === category)

              return (
                <a
                  key={category}
                  href={`#${category.toLowerCase()}`}
                  className="flex min-w-28 flex-col items-center gap-3 rounded-3xl bg-neutral-50 px-5 py-4 text-sm font-bold text-neutral-600 transition hover:bg-[#fff1e8] hover:text-[#f15a38]"
                >
                  <img
                    src={dish.image}
                    alt=""
                    className="size-14 rounded-full object-cover shadow-md shadow-neutral-950/10"
                  />
                  {category}
                </a>
              )
            })}
          </div>
        </section>

        <section id="popular" className="pb-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f15a38]">Popular menu</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Dishes people come back for</h2>
            </div>
            <p className="hidden text-sm font-bold text-neutral-500 sm:block">01/{dishes.length.toString().padStart(2, '0')}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((dish) => (
              <Link
                id={dish.category.toLowerCase()}
                key={dish.id}
                to="/dish/$dishId"
                params={{ dishId: dish.id }}
                className={`${dish.accent} group overflow-hidden rounded-[1.75rem] p-5 text-white shadow-xl shadow-neutral-950/10 transition duration-300 hover:-translate-y-1`}
              >
                <div className="flex min-h-48 flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-black text-white/80">{dish.rating} rating</p>
                      <h3 className="mt-2 max-w-48 text-2xl font-black leading-tight tracking-tight">{dish.name}</h3>
                      <p className="mt-2 text-sm font-semibold text-white/75">Free delivery</p>
                    </div>
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="size-28 rounded-full object-cover shadow-2xl shadow-black/25 transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-xl font-black">${dish.price}.00</p>
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
