import Draggable from 'react-draggable'
import { SiInstagram,SiGithub,SiYoutube } from 'react-icons/si';
import { useRef } from 'react';

const Contact = ({ onClose }: { onClose: () => void }) => {
    const nodeRef = useRef(null);
    
    return (
        <Draggable nodeRef={nodeRef} handle=".window-header">

            <div ref={nodeRef} className="bg-[#1a1a1a] absolute top-20 left-20 w-[600px] h-[400px] overflow-hidden z-50 border border-white flex flex-col">
                
         
                <div className="window-header bg-[#333] p-2 flex justify-between items-center cursor-move">
                    <span className="text-white ml-2">Contact</span> 
                    <button onClick={onClose} className="text-red-600 font-bold hover:text-red-700 px-2">X</button>
                </div>

          
                <div className="p-4 text-white overflow-y-auto">
                     <h1 className='font-roboto ml-55 mt-2 text-3xl'>Contact me</h1>
                     <div className='flex mt-2 -ml-23 flex-col'>
                     <p className='font-roboto ml-50 mt-5 '> email : exapmle@gmail.com  </p>
                     <p className='font-roboto ml-50 mt-5 '> Phone Number : +92-xxxx-xxxx </p>
                    
                </div>
                <h2 className='items-center mt-6 text-3xl text-center'>Socials</h2>
                        <div className='flex flex-row gap-7 text-2xl text-center justify-center items-center mt-8'>

  <a 
    href="https://www.instagram.com/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <SiInstagram className="hover:scale-110 transition" />
  </a>

  <a 
    href="https://github.com" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <SiGithub className="hover:scale-110 transition" />
  </a>

  <a 
    href="https://www.youtube.com" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <SiYoutube className="hover:scale-110 transition" />
  </a>

</div>
        <p className='text-white/40 ml-30 mt-5'>I am chronically active in all of them btw</p>



                </div>

            </div>
        </Draggable>
    );
}

export default Contact;
