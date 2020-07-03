import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getNowPlaying } from '../actions/movieActions'

function NowPlaying(props) {
    const [link, setLink] = useState('')

    useEffect(() => {
        const baseURL = 'https://api.themoviedb.org/3/configuration'
        const API_KEY = "28bedf0a3895de76d057107becfb1c9b"
        const url = "".concat(baseURL, '?api_key=', API_KEY)
        props.getNowPlaying()

        axios.get(url)
            .then(res =>
                setLink(`${res.data.images.secure_base_url}${res.data.images.backdrop_sizes[0]}`)
            )
    }, [])

    let { current } = props.current
    return (
        <div>
            <div className="contain">
                <h1>Now playing</h1>
                <div className="row">
                    <div className="row__inner">
                        {current.map((playing, i) => (
                            <div className="tile" key={i} >
                                <div className="tile__media">
                                    <img className="tile__img" src={`${link}${playing.poster_path}`} alt="poster" />
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    current: state.current
})

export default connect(mapStateToProps, { getNowPlaying })(NowPlaying)