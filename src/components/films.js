import React, { Fragment } from 'react';


let Films = props => {
    return (
        <Fragment>
            <div styles={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {props.movies.map((movie, key) => (
                    <div className='card' id={key} style={{ width: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '50px' }}>
                        <div className='card-body'>
                            <div className='card-title'>
                                <h4>{movie.title}</h4>
                                <hr/>
                            </div>
                            <div className='card-text'>
                                <h5>{movie.description} </h5>
                            </div>
                            <div className='card-text'>
                                <hr />
                                <h6>Release Date: {movie.release_date}</h6>
                                <hr />
                                <h6>Directed by: {movie.director}</h6>
                                <hr />
                                <a href={movie.url}>More Information</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default Films


