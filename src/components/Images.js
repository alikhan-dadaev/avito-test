import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import {useParams} from "react-router";

function Images (props) {
    const images = useSelector(state => state.images.items);
    const id = useParams().id;

    return (
            <div className="container">

            {images.map(image => {
                return (
                    <div className="image" onClick={() => <Link  to=':id' />}>
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