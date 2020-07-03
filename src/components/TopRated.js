import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getTopRated } from '../actions/movieActions'

function TopRated(props) {
    const [link, setLink] = useState('')

    useEffect(() => {
        const baseURL = 'https://api.themoviedb.org/3/configuration'
        const API_KEY = "28bedf0a3895de76d057107becfb1c9b"
        const url = "".concat(baseURL, '?api_key=', API_KEY)
        props.getTopRated()

        axios.get(url)
            .then(res =>
                setLink(`${res.data.images.secure_base_url}${res.data.images.backdrop_sizes[0]}`)
            )
    }, [])

    console.log(link)
    let { topRated } = props.topRated
    return (
        <div>
            <div className="contain">
                <h1>Top Rated</h1>
                <div className="row">
                    <div className="row__inner">
                        {topRated.map((playing, i) => (
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
    topRated: state.topRated
})

export default connect(mapStateToProps, { getTopRated })(TopRated)