import Subscription from '../components/Subscription';

export default function Profile() {
    return (
      <>
        <section className='flex pl-24'>
            
            <img src='#'className='h-64 w-64 rounded-full bg-white'></img>
            <div className='flex-col'>
                <h1 className='text-6xl'>Zanero</h1>
                <p>Code master... coffee is never enough</p>
            </div>
          
        </section>
        <Subscription />
    
        </>
      )
  }
  