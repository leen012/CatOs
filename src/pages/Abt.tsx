import Draggable from 'react-draggable'
import Image from '../assets/me.png'
import { useRef } from 'react';
import { SiTypescript,SiJavascript,SiReact,SiTailwindcss,SiC ,SiPython } from 'react-icons/si';

const About = ({ onClose }: { onClose: () => void }) => {
    const nodeRef = useRef(null);
    
    return (
        <Draggable nodeRef={nodeRef} handle=".window-header">

            <div ref={nodeRef} className="bg-[#1a1a1a] absolute top-20 left-20 w-[600px] h-[400px] overflow-hidden z-50 border border-white flex flex-col">
                
         
                <div className="window-header bg-[#333] p-2 flex justify-between items-center cursor-move">
                    <span className="text-white ml-2">About Me</span> 
                    <button onClick={onClose} className="text-red-600 font-bold hover:text-red-700 px-2">X</button>
                </div>

          
                <div className="p-4 text-white overflow-y-auto">
                     <h1 className='font-roboto ml-55 mt-2 text-2xl'>Hey , It's Mango </h1>
                     <p className='font-roboto ml-50 mt-5 '>I am 15y/o teenage boy . I like to watch movies ,anime and code sometimes.My major interest are ML/AI and ig web devlopment.</p>
                     <img className='-ml-8 -mt-30' src={Image}></img>
                    <div className='flex flex-row ml-50 -mt-10 gap-6 text-3xl'>
                        <SiTypescript className='text-blue-600'></SiTypescript>
                         <SiReact className="text-cyan-400" />
                     <SiTailwindcss className="text-sky-400" />
                      <SiJavascript className="text-yellow-400" />
                      <SiPython className='text-yellow-400'></SiPython>
                      <SiC className='text-blue-600'></SiC>
                    </div>


                </div>

            </div>
        </Draggable>
    );
}

export default About;
