import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadModalImage} from "../redux/actions";
import ModalImageIsOpen from "./ModalImageIsOpen";

function ModalImage(props) {
    const params = useParams();
    const dispatch = useDispatch();

    const modalImage = useSelector(state => state.inModalImage.items)


    useEffect(() => {
        dispatch(loadModalImage(params.id))
    }, [dispatch, params])

    return (
        <div>
            <ModalImageIsOpen
                isOpened={props.isOpened}
                onModalClose={props.onModalClose}
                modalImage={modalImage}
            />
        </div>
    );
}

export default ModalImage;