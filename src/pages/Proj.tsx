import Draggable from 'react-draggable';
import { SiGithub } from 'react-icons/si';
import { useRef } from 'react';

const Projects = ({ onClose }: { onClose: () => void }) => {
    const nodeRef = useRef(null);
    
    const projectData = [
        {
            title: "Pomodoro Timer",
            tags: ["React", "Tailwind", "Typescript"],
            repo: "https://github.com"
        },
        {
            title: "Web OS",
            tags: ["TailwindCss", "TypeScript", "React"],
            repo: "https://github.com/"
        },
        {
            title: "Hyprland Config",
            tags: ["Lua", "Bash", "Wayland"],
            repo: "https://github.com/
        }
    ];

    return (
        <Draggable nodeRef={nodeRef} handle=".window-header">
            <div ref={nodeRef} className="bg-[#1a1a1a] absolute top-20 left-20 w-[600px] h-[400px] overflow-hidden z-50 border border-white flex flex-col">
                
                {/* Header */}
                <div className="window-header bg-[#333] p-2 flex justify-between items-center cursor-move">
                    <span className="text-white ml-2">Projects</span> 
                    <button onClick={onClose} className="text-red-600 font-bold hover:text-red-700 px-2">X</button>
                </div>

                {/* Content Section */}
                <div className="p-6 text-white overflow-y-auto flex flex-col gap-6">
                    {projectData.map((project, index) => (
                        <div key={index} className="border-b border-gray-700 pb-4 flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                <div className="flex gap-2 mt-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs bg-gray-800 px-2 py-1 rounded border border-gray-600">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <a 
                                href={project.repo} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-3xl hover:text-gray-400 transition-colors"
                            >
                                <SiGithub />
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </Draggable>
    );
}

export default Projects;
