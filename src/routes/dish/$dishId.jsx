import { Link, createFileRoute, useParams } from '@tanstack/react-router'
import { useDishes } from '../../providers/dishes-provider';

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  const { dishId } = useParams({ from: '/dish/$dishId' });

  const { getDish, getRecommendations } = useDishes();
  const formattedDish = getDish(dishId);
  const recommendations = getRecommendations();

  return (
    <div className="min-h-screen bg-[#fff8ee]">
      <section className="mx-auto grid min-h-screen w-full max-w-7xl gap-8 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
        <div className={`${formattedDish.accentColor} mx-4 isolate overflow-hidden rounded-4xl p-5 shadow-2xl shadow-orange-950/15 sm:p-7 sticky top-25 lg:top-35 lg:h-[calc(100vh-4rem)]`}>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.28),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.18),transparent_24%)]" />
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="grid size-12 place-items-center rounded-2xl bg-white/90 text-2xl font-light text-[#181411] shadow-lg shadow-black/10"
              aria-label="Back to dishes"
            >
              ‹
            </Link>
          </div>

          <div className="flex h-[420px] items-center justify-center sm:h-[520px] lg:h-[calc(100%-7rem)]">
            <img
              src={formattedDish.thumbnail}
              alt={formattedDish.name}
              className="aspect-square w-full max-w-[560px] rounded-full object-cover shadow-2xl shadow-black/30"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-4xl bg-white p-5 shadow-xl shadow-orange-900/5 sm:p-8 lg:p-10 z-9">
          <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-neutral-500">
            <span>{formattedDish.category}</span>
          </div>

          <div className="mt-5">
            <div>
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">{formattedDish.name}</h1>
              <div className="mt-10 flex items-center justify-between">
                <p className="text-base font-medium text-neutral-500">{formattedDish.cusine} Cusine</p>
                <div>
                  <Link
                    to="/dish/$dishId"
                    className="rounded-full bg-[#f15a38] px-6 py-4 text-center text-sm font-black text-white shadow-xl shadow-orange-500/25"
                  >
                    Watch Video
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-black tracking-tight">Ingredients</h2>
            {
              formattedDish.ingredientsWithMeasure.map((ing) => (
                <div key={ing.ingredient} className="mt-4 grid gap-3 sm:grid-cols-[160px_1fr]">
                  <div className="rounded-2xl text-[#f15a38] pr-2 text-base font-black">
                    {ing.ingredient}
                  </div>
                  <div className="rounded-2xl px-2 text-base text-black">
                    {ing.measure}
                  </div>
                </div>
              ))
            }
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-black tracking-tight">Description</h2>
            {
              formattedDish.instructions.map((instruction) => (
                <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-600">{instruction}</p>
              ))
            }
          </div>
          <div className="mt-10">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-black tracking-tight">More to try</h2>
              <Link to="/" className="text-sm font-black text-[#f15a38]">
                View menu
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {recommendations.map((dish) => (
                <Link
                  key={dish.id}
                  to="/dish/$dishId"
                  params={{ dishId: dish.id }}
                  className="rounded-3xl bg-neutral-50 p-3 transition hover:bg-[#fff1e8]"
                >
                  <img src={dish.thumbnail} alt={dish.name} className="md:h-28 w-full rounded-2xl object-cover" />
                  <p className="mt-3 text-sm font-black leading-tight">{dish.name}</p>
                  <p className="mt-1 text-sm font-bold text-neutral-500">{dish.category}</p>
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
