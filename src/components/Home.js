import React from 'react'
import Choice from './Choice'

function Home() {
    return (
        <div>
            <div className="splittext h-32 lg:h-64 w-full bg-indigo-800 flex justify-center items-center">
                <h1 className="hero lg:text-6xl"><span>E</span><span>N</span><span>T</span><span>E</span><span>R</span><span>T</span><span>A</span><span>I</span><span>N</span><span>M</span><span>A</span><span>N</span><span>I</span><span>A</span></h1>
            </div>
            <Choice />
        </div>
    )
}

export default Home
