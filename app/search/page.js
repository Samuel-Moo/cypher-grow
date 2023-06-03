import SearchBarResultCard from "../components/SearchBarResultCard"

export default function Search() {
    return (
      <>
        <div class="min-h-screen bg-gray-100 flex justify-top items-top">
    <div class="container mx-auto bg-gray-900 p-14">
      <form>
        <h1 class="text-center font-bold text-white text-4xl">Search for content creators</h1>
          <p class="mx-auto font-normal text-sm my-6 max-w-lg">Look for people and support them by just sending cryptos! Get incredible rewards! Learn and laugh with your favorites creators!</p>
          <div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input class="text-base text-black bg-white flex-grow outline-none px-2 " type="text" placeholder="Search here..." />
            <div class="ms:flex items-center rounded-lg">
              <button class="bg-violet-950 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
            </div>
          </div>
      </form>
      <div className="mt-12 justify-center grid grid-cols-4"> 
      <div><SearchBarResultCard/></div>
      <div><SearchBarResultCard/></div>
      <div><SearchBarResultCard/></div>
      <div><SearchBarResultCard/></div>
      </div>
    
    </div>
    
  </div>

 
      </>
    )
  }
  