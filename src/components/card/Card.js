import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ movie }) => {
    return (
        <div className="col-md-4">
            <div className="card mb-3">
                <img src={movie.Poster} className="card-img-top" width="100" alt={movie.Title} />
                <div className="card-body">
                    <h4 className="card-title">{movie.Title}</h4>
                    <h5 className="card-subtitle">{movie.Year}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{movie.Type}</li>
                </ul>
            </div>
        </div>
    )
}

Card.propTypes={
    movie: PropTypes.shape({
        Title:PropTypes.string,
        Year:PropTypes.string,
        Poster:PropTypes.string,
        Type:PropTypes.string,
    }).isRequired
};
export default Card