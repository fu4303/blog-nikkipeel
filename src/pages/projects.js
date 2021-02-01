import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import cannabiz from '../images/slider.png'
import sanityBlog from '../images/blog.png'
import bootstrap from '../images/portfolio-works.png'
import twBlog from '../images/tailwindblog.png'
import nnBlog from '../images/nnblog2.png'

const ProjectsPage = () => (
        <Layout>
            <SEO title="Projects" />
        <main className="bg-brown text-white min-h-screen p-8 md:p-12">
            <section className="container mx-auto">
                    <h1 className="text-4xl mono pl-4">Recent Projects</h1>
                    <h2 className="text-lg mb-12 pl-4">Welcome to my projects page</h2>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <article className="relative bg-white text-brown rounded-lg shadow-xl py-8 px-8">
                            <img src={cannabiz}  alt="" className="relative items-center lg:float-left w-full lg:w-48 lg:h-56 xl:w-64 rounded mr-4" />

                            <div className="flex flex-row items-center justify-between h-12 mt-4 lg:mt-0 lg:mb-4">
                                
                                    <a className="text-left text-3xl font-bold hover:text-pink" href="https://nikkipeel.github.io/cannabiz/" alt="" target="_blank" rel="noopener noreferrer">Cannabiz </a>
                               
                                <span className="bg-green text-black font-semibold text-sm py-2 px-4 rounded justify-center items-center h-9">Tailwind</span>
                            </div>
                            <div className="flex flex-col lg:block text-base text-brown">
     
                                <span className="py-2">
                                    <strong className="font-bold">Finished on</strong>: November 15, 2020
                                </span>

                                <p className="my-4 text-lg leading-relaxed">Lorem ipsum consequuntur quam deleniti aspernatur debitis inventore</p>
                                <a href="https://nikkipeel.github.io/cannabiz/" alt="project link" rel="noopener noreferrer" target="_blank" className="text-mauve text-lg font-bold hover:underline hover:text-pink">
                                    Visit Site

                                </a>
                            </div>
                        </article>

                        <article className="relative bg-white text-brown rounded-lg shadow-xl py-8 px-8">
                            <img src={sanityBlog}  alt="" className="relative items-center lg:float-left w-full lg:w-48 lg:h-56 xl:w-64 rounded mr-4" />

                            <div className="flex flex-row items-center justify-between h-12 my-4 lg:mt-0">
                                
                                    <a className="text-left text-3xl font-bold hover:text-pink" href="https://www.github.com/nikkipeel/react-sanity-portfolio" alt="" target="_blank" rel="noopener noreferrer">Sanity Blog w/React</a>
                               
                                <span className="bg-blue text-black font-semibold text-sm py-2 px-4 rounded justify-center items-center h-9">React</span>
                            </div>
                            <div className="flex flex-col lg:block text-base text-brown">
     
                                <span className="py-2">
                                    <strong className="font-bold">Finished on</strong>: January 10, 2021
                                </span>

                                <p className="my-4 text-lg leading-relaxed">Lorem ipsum consequuntur quam deleniti aspernatur debitis inventore</p>
                                <a href="https://www.github.com/nikkipeel/react-sanity-portfolio" alt="project link" rel="noopener noreferrer" target="_blank" className="text-mauve text-lg font-bold hover:underline hover:text-pink">
                                    View on Github

                                </a>
                            </div>
                        </article>

                        <article className="relative bg-white text-brown rounded-lg shadow-xl py-8 px-8">
                            <img src={nnBlog}  alt="" className="relative items-center lg:float-left w-full lg:w-48 lg:h-56 xl:w-64 rounded mr-4" />

                            <div className="flex flex-row items-center justify-between h-12 my-4 lg:mt-0">
                                
                                    <a className="text-left text-3xl font-bold hover:text-pink" href="https://nomadicnobodies.com" alt="" target="_blank" rel="noopener noreferrer">Nomadic Nobodies </a>
                               
                                <span className="bg-darkBlue text-white font-semibold text-sm py-2 px-4 rounded justify-center items-center h-9">Wordpress</span>
                            </div>
                            <div className="flex flex-col lg:block text-base text-brown">
     
                                <span className="py-2">
                                    <strong className="font-bold">Finished on</strong>: December 12, 2020
                                </span>

                                <p className="my-4 text-lg leading-relaxed">Lorem ipsum consequuntur quam deleniti aspernatur debitis inventore</p>
                                <a href="https://nomadicnobodies.com" alt="project link" rel="noopener noreferrer" target="_blank" className="text-mauve text-lg font-bold hover:underline hover:text-pink">
                                    Visit Site

                                </a>
                            </div>
                        </article>

                        <article className="relative bg-white text-brown rounded-lg shadow-xl py-8 px-8">
                            <img src={bootstrap} alt="" className="relative items-center lg:float-left w-full lg:w-48 lg:h-56 xl:w-64 rounded mr-4" />

                            <div className="flex flex-row items-center justify-between h-12 my-4 lg:mt-0">
                                
                                    <a className="text-left text-3xl font-bold hover:text-pink" href="https://nikkipeel.com" alt="" target="_blank" rel="noopener noreferrer">Bootstrap Portfolio </a>
                               
                                <span className="bg-purple text-white font-semibold text-sm py-2 px-4 rounded justify-center items-center h-9">Bootstrap</span>
                            </div>
                            <div className="flex flex-col lg:block text-base text-brown">
     
                                <span className="py-2">
                                    <strong className="font-bold">Finished on</strong>: November 15, 2020
                                </span>

                                <p className="my-4 text-lg leading-relaxed">Lorem ipsum consequuntur quam deleniti aspernatur debitis inventore</p>
                                <a href="https://nikkipeel.com" alt="project link" rel="noopener noreferrer" target="_blank" className="text-mauve text-lg font-bold hover:underline hover:text-pink">
                                    Visit Site

                                </a>
                            </div>
                        </article>

                        <article className="relative bg-white text-brown rounded-lg shadow-xl py-8 px-8">
                            <img src={twBlog}  alt="" className="relative items-center lg:float-left w-full lg:w-48 lg:h-56 xl:w-64 rounded mr-4" />

                            <div className="flex flex-row items-center justify-between h-12 my-4 lg:mt-0">
                                
                                    <a className="text-left text-3xl font-bold hover:text-pink" href="https://nikkipeel.github.io/tailwind-blog/" alt="" target="_blank" rel="noopener noreferrer">Tailwind Blog </a>
                               
                                <span className="bg-green text-black font-semibold text-sm py-2 px-4 rounded justify-center items-center h-9">Tailwind</span>
                            </div>
                            <div className="flex flex-col md:block text-base text-brown">
     
                                <span className="py-2">
                                    <strong className="font-bold">Finished on</strong>: November 15, 2020
                                </span>

                                <p className="my-4 text-lg leading-relaxed">Lorem ipsum consequuntur quam deleniti aspernatur debitis inventore</p>
                                <a href="https://nikkipeel.github.io/tailwind-blog/" alt="project link" rel="noopener noreferrer" target="_blank" className="text-mauve text-lg font-bold hover:underline hover:text-pink">
                                    Visit Site

                                </a>
                            </div>
                        </article>
 
                </section>
            </section>
        </main>
        </Layout>
    )

export default ProjectsPage;