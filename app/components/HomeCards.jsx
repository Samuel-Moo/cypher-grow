/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [


    {
      name: 'nombre',
      description: 'Descripcion de la imagen',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'alt de la foto',
      href: '#',
    }
]
    
  
  export default function HomeCard() {
    return (
       <>
       
     
       
          <div className="mt-6 mx-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="bg-gray-200 p-4 mt-2 rounded-xl justify-center">
                <h3 className="mx-[45%] text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className=" inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base mx-[26%] font-semibold text-gray-900">{callout.description}</p>
                </div>
              </div>
            ))}
          </div>
        
                
    
       </>
    )
  }
  