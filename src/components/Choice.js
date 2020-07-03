import React, { useEffect } from "react"
import { Link } from 'react-router-dom'

function Choice() {
    useEffect(() => {
        let txt = "TV TV TV TV TV TV TV TV"
        let txt2 = "MOVIE MOVIE MOVIE MOVIE"
        let radius = 120
        let classIndex = 0
        let classIndex2 = 0

        txt = txt.split("")
        txt2 = txt2.split("")
        classIndex = document.getElementsByClassName("circTxt")[classIndex];
        classIndex2 = document.getElementsByClassName("circTxt2")[classIndex2];

        var deg = 360 / txt.length
        var deg2 = 360 / txt2.length
        origin = 0;

        txt.forEach((ea) => {
            ea = `<p style='height:${radius}px;position:absolute;z-index:2;font-weight:700;color:#667eea;bottom:30.5%;right:24.5%;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
            classIndex.innerHTML += ea;
            origin += deg;
        });



        txt2.forEach((ea) => {
            ea = `<p style='height:${radius}px;position:absolute;z-index:2;font-weight:700;color:#667eea;bottom:30.5%;left:25%;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
            classIndex2.innerHTML += ea;
            origin += deg2;
        });
    })


    return (
        <div>
            <h1 className="lg:text-4xl text-center font-bold mt-10">WHAT ARE YOU IN THE MOOD FOR TODAY?</h1>
            <div className="p-8 mb-10 sm:p-12 md:p-16 lg:flex justify-around items-center">
                <Link to="/movies">
                    <div className="icon p-32 bg-indigo-300 cursor-pointer border-8 border-dashed border-indigo-400 rounded-lg mt-10 sm:flex sm:justify-center sm:items-center lg:mt-20">
                        <img className="film" src={require("../images/film.svg")} alt="films" />
                        <div className="circTxt2" id="test"></div>
                    </div>
                </Link>
                <div className="icon1 p-32 bg-indigo-300 cursor-pointer border-8 border-dashed border-indigo-400 rounded-lg mt-10 sm:flex sm:justify-center sm:items-center lg:mt-20">
                    <img className="tv" src={require("../images/tv.svg")} alt="tv icon" />
                    <div className="circTxt" id="test"></div>
                </div>
            </div>
        </div>
    )
}

export default Choice
