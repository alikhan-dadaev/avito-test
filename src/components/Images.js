import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

function Images (props) {
    const images = useSelector(state => state.images.items);

    return (
            <div className="container">

            {images.map(image => {
                return (
                    <div className="image" onClick={() => props.setModal(true)}>
                        <Link to={`/${image.id}`}>
                            <img src={image.url}/>
                        </Link>
                    </div>
                )
            })}
            </div>
    )
}

export default Images;