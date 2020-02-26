import React, { Fragment } from 'react';


let Characters = props => {
    return (
        <Fragment>
            <div styles={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {props.characters.map((character, key) => (
                    <div className='card' id={key} style={{ width: '250px', display: 'flex', margin: '50px' }}>
                        <div className='card-body'>
                            <div className='card-title'>
                                <h4>{character.name}</h4>
                                <hr/>
                            </div>
                            <div className='card-text'>
                                <h5>{character.gender} </h5>
                            </div>
                            <div className='card-text'>
                                <h5>Age: {character.age}</h5>
                            </div>
                            <div><a href={character.films}>Films</a></div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}


export default Characters