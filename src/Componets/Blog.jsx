import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <article>
            <div className="bg-slate-200 mt-5 px-3">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Aug 22, 2022</span>
                        <div className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">React Router</div>
                    </div>
                    <div className="mt-3">
                        <Link className="text-2xl font-bold hover:underline">What of purpose of react-router</Link>
                        <p className="mt-2">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <button className="hover:underline dark:text-violet-400">Read more</button>
                        <div>
                            <Link className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Omar Faruk</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-200 mt-5 px-3">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Jun 23, 2022</span>
                        <div className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">React Hook</div>
                    </div>
                    <div className="mt-3">
                        <Link className="text-2xl font-bold hover:underline">How does useRef React work?</Link>
                        <p className="mt-2">useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <button className="hover:underline dark:text-violet-400">Read more</button>
                        <div>
                            <Link className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Omar Faruk</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-200 mt-5 px-3">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Jun 05, 2021</span>
                        <div className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">React Context</div>
                    </div>
                    <div className="mt-3">
                        <Link className="text-2xl font-bold hover:underline">Why is the context API useful?</Link>
                        <p className="mt-2">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <button className="hover:underline dark:text-violet-400">Read more</button>
                        <div>
                            <Link className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Omar Faruk</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Blog;