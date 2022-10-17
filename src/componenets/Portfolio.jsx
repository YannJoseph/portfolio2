import React from 'react'


// import {Link} from 'react-router-dom'
import blog from '../assets/portfolio/blog.png';
import quiz from '../assets/portfolio/quiz.png';
import todoList from '../assets/portfolio/todoList.png';
import weather from "../assets/portfolio/Weather.png";



function Portfolio() {

  
    const portfolios = [
        {
            id:1,
            src: blog,
            codeSource: <a target="_blank" rel="noreferrer" href="https://github.com/YannJoseph/blog">Code</a>,
            netlifySource: <a target="_blank" rel="noreferrer" href="https://blog-yj.netlify.app">Demo</a>
           
        },
        {
            id:2,
            src: quiz,
            codeSource: <a target="_blank" rel="noreferrer" href="https://github.com/YannJoseph/quiz">Code</a>,
            netlifySource: <a target="_blank" rel="noreferrer" href="https://quiz-yj.netlify.app">Demo</a>
            
        },
        {
            id:3,
            src: todoList,
            codeSource: <a target="_blank" rel="noreferrer" href="https://github.com/YannJoseph/todo-list-1">Code</a>,
            netlifySource: <a target="_blank" rel="noreferrer" href="https://todo-list-1-murex.vercel.app/">Demo</a>
        },
        {
            id:4,
            src: weather,
            codeSource: <a target="_blank" rel="noreferrer" href="https://github.com/YannJoseph/weather">Code</a>,
            netlifySource: <a target="_blank" rel="noreferrer" href="https://weather-app-yannjoseph.vercel.app/">Demo</a>
        }
       
    ]


    
  return (
    <div 
    name="portfolio"
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6'>
                    Check out some of my work right here
                </p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {portfolios.map(({id,src,codeSource,netlifySource}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>

                        
                            <img src={src} 
                            alt="" 
                            className='rounded-md duration-200 hover:scale-105'
                            />
    
                            <div className='flex items-center justify-center'>

                           
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    
                                
                                 {codeSource}   
                                    
                                </button>
                                
                                <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    {netlifySource}
                                </button>
                                
                            </div>
    
                        </div>
                    
                
                    
                    
                    
                
                    ))}    
        
                    </div>
        </div>
        
    </div>
  );
};

export default Portfolio