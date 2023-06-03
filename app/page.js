

export default function App() {
    const features = [
        { name: 'Become a creator', description: 'Get started, and become a content creator', },
        { name: 'Customize Your profile', description: 'Each person should have a unique indentity' },
        { name: 'Wallet Connection', description: 'Add your wallet to start earning money from your supports!' },
        { name: 'Money Money', description: 'Define your own membership subscription with your rules!' }
      ]
  return (
    <>
<section className="bg-base-200">
   
<div className="bg-white">
    
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-5">Join CypherGrow <span className="bg-gray-900 text-white p-3 rounded-[50px]">now!</span></h1>
          <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">The best Web3 application</h2>
          <p className="my-4  text-gray-500">
            Look for people to invest in want you desire
          </p>
          <a className="btn btn-ghost bg-black normal-case text-xl" href="../">
            Get Started!
          </a>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://img.currency.com/imgs/articles/834xx/sol-coin-in-hand.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_1280.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://cdn.pixabay.com/photo/2014/07/06/09/46/microscope-385364_1280.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
</section>
  </>

  )

}
