import Subscription from '../components/Subscription';
const solanaWeb3 = require("@solana/web3.js");
const { Keypair } = require("@solana/web3.js");
//import toast, {Toaster} from "react-hot-toast"
//import { useEffect } from 'react';

/*export default function generar(){
  console.log(solanaWeb3);
  let keypair = Keypair.generate();

}*/


export default function Profile () {
    
  
    /*const signIn = async () => {
        console.log("Wenas noches!!");
        useEffect(() => {
          const provider = window?.phantom?.solana;
          const { solana } = window;
          
        });  
        if(!provider?.isPhantom || !solana.isPhantom){
          toast.error("Phantom no esta instalado");
          setTimeout(() => {
              window.open("https://phantom.app/", "_blank");
          }, 2000 );
          return;
        }

        let phantom;
        if (provider?.isPhantom) phantom = provider;

        const { publicKey } = await phantom.connect(); //Conecta phantom
        console.log("publicKey", publicKey.toString());
     };*/
  
    return (
      <>
        <section className='flex pt-6 pb-10 px-24'>
            
            
            <img src='#'className='h-64 w-64 rounded-full bg-white'></img>
            <div className='flex-col grow p-10 space-y-4'>
                <h1 className='text-6xl'>Zanero</h1>
                <p className='text-xl'>Code master... coffee is never enough</p>
                <button 
                  type='submit'
                  //onClick={generar()} 
                  className='bg-violet-800 grow hover:bg-violet-900 text-white font-bold py-2 px-4 rounded'
                  >
                Conect Wallet 
                </button>
            </div>
          
        </section>
        <hr className='mx-16 '></hr>
        <Subscription />
    
        </>
      )
  }
 