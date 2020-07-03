import React, { useEffect, useState, useReducer } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getUpcoming } from '../actions/movieActions'
import MovieDetails from './MovieDetails'
import NowPlaying from './NowPlaying'
import TopRated from './TopRated'

function Movies(props) {
    const [link, setLink] = useState('')

    useEffect(() => {
        const baseURL = 'https://api.themoviedb.org/3/configuration'
        const API_KEY = "28bedf0a3895de76d057107becfb1c9b"
        const url = "".concat(baseURL, '?api_key=', API_KEY)
        props.getUpcoming()

        axios.get(url)
            .then(res =>
                setLink(`${res.data.images.secure_base_url}${res.data.images.backdrop_sizes[0]}`)
            )
    }, [])

    const initialState = {
        slideIndex: 0
    };

    const slidesReducer = (state, event) => {
        if (event.type === "NEXT") {
            return {
                ...state,
                slideIndex: (state.slideIndex + 1) % movies.length
            };
        }
        if (event.type === "PREV") {
            return {
                ...state,
                slideIndex:
                    state.slideIndex === 0 ? movies.length - 1 : state.slideIndex - 1
            };
        }
    };
    const { movies } = props.movie
    const [state, dispatch] = useReducer(slidesReducer, initialState);

    return (
        <div>
            <div className="container">
                <div className="slides">
                    <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

                    {[...movies, ...movies, ...movies].map((slide, i) => {
                        let offset = movies.length + (state.slideIndex - i);
                        let image = `${link}${slide.poster_path}`;
                        return <Slide slide={image} offset={offset} key={i} id={slide.id} />;
                    })}
                    <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
                </div>
            </div>
            <h1 className="upcoming">UPCOMING</h1>
            <NowPlaying />
            <TopRated />
        </div>
    );
}


function useTilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if (!el) {
                return;
            }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}


function Slide({ slide, offset, id }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);


    return (
        <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
            onClick={() => window.location = "/movieDetails"}
        >
            <div
                className="slideBackground"
                style={{
                    backgroundImage: `url('${slide}')`
                }}
            />
            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${slide}')`
                }}
            >
            </div>
        </div>

    );
}

const mapStateToProps = state => ({
    movie: state.movie
})

export default connect(mapStateToProps, { getUpcoming })(Movies)