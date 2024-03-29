import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    // <section>
    //   <div classNameName="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    //     <header classNameName="text-center">
    //       <h2 classNameName="text-xl font-bold text-gray-900 sm:text-3xl">
    //         New Collection
    //       </h2>

    //       <p classNameName="max-w-md mx-auto mt-4 text-gray-500">
    //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
    //         praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
    //         natus?
    //       </p>
    //     </header>

    //     <ul classNameName="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
    //       <li>
    //         <a href="#" classNameName="relative block group">
    //           <img
    //             src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    //             alt=""
    //             classNameName="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
    //           />

    //           <div
    //             classNameName="absolute inset-0 flex flex-col items-start justify-end p-6"
    //           >
    //             <h3 classNameName="text-xl font-medium text-white">Casual Trainers</h3>

    //             <span
    //               classNameName="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    //             >
    //               Shop Now
    //             </span>
    //           </div>
    //         </a>
    //       </li>

    //       <li>
    //         <a href="#" classNameName="relative block group">
    //           <img
    //             src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    //             alt=""
    //             classNameName="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
    //           />

    //           <div
    //             classNameName="absolute inset-0 flex flex-col items-start justify-end p-6"
    //           >
    //             <h3 classNameName="text-xl font-medium text-white">Winter Jumpers</h3>

    //             <span
    //               classNameName="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    //             >
    //               Shop Now
    //             </span>
    //           </div>
    //         </a>
    //       </li>

    //       <li classNameName="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
    //         <a href="#" classNameName="relative block group">
    //           <img
    //             src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
    //             alt=""
    //             classNameName="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
    //           />

    //           <div
    //             classNameName="absolute inset-0 flex flex-col items-start justify-end p-6"
    //           >
    //             <h3 classNameName="text-xl font-medium text-white">Skinny Jeans Blue</h3>

    //             <span
    //               classNameName="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    //             >
    //               Shop Now
    //             </span>
    //           </div>
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </section>
    <section style={{maxWidth: '1480px', margin: '80px auto'}}>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Товари зі знижкою
          </h2>

          <p className="max-w-md mx-auto mt-4 text-gray-500">
            В магазині Nemezis діє система знижок та купонів. Ви завжди можете дізнатись про актуальні товари зі знижкою у цій категорії.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
          
            <a href="/store?tags=ptag_01GP95XSNQQVYD2R3MQ9RAMWAV" className="relative block group">
              <span className="home-discount-tag">
                20%
              </span>
              <img
                src="/1.jpg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div
                className="absolute inset-0 flex flex-col items-start justify-end p-6"
              >
                <h3 className="text-xl font-medium text-white">За промокодом WINTER20%</h3>

                <span
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Деталі
                </span>
              </div>
            </a>
          </li>

          <li>
            <a href="/store?tags=ptag_01GP95XSNQQVYD2R3MQ9RAMWAV" className="relative block group">
              <span className="home-discount-tag">
                13%
              </span>
              <img
                src="/2.jpg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div
                className="absolute inset-0 flex flex-col items-start justify-end p-6"
              >
                <h3 className="text-xl font-medium text-white">За промокодом "SUMMER13"</h3>

                <span
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Деталі
                </span>
              </div>
            </a>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="/store?tags=ptag_01GP95XSNQQVYD2R3MQ9RAMWAV" className="relative block group">
            <span className="home-discount-tag">
                25%
              </span>
              <img
                src="/3.jpg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div
                className="absolute inset-0 flex flex-col items-start justify-end p-6"
              >
                <h3 className="text-xl font-medium text-white">За промокодом "BLAM25"</h3>

                <span
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Деталі
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default FeaturedProducts
