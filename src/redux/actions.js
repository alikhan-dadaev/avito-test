export const loadImages = () => {
    return dispatch => {
        dispatch({
            type: 'images/load/start'
        });

        fetch('https://boiling-refuge-66454.herokuapp.com/images')
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: 'images/load/success',
                payload: json
            })
        })
    }
}

export const loadModalImage = (id) => {
    return dispatch => {
        dispatch({
            type: 'modalImage/load/start'
        });

        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}` )
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'modalImage/load/success',
                    payload: json
                })
            })
    }
}