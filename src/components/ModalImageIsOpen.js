import React, {useState} from 'react';
import {useSelector} from "react-redux";

function ModalImageIsOpen(props) {
    const comments = useSelector(state => state.inModalImage.items.comments);
    const [addedComments, setAddedComments] = useState([]);

    const [nameField, setNameField] = useState("");
    const [commentField, setCommentField] = useState("");

    const handleChangeName = (e) => {
        setNameField(e.target.value);
    }
    const handleChangeComment = (e) => {
        setCommentField(e.target.value);
    }

    const handleAddComment = () => {
        const newComment = {
            name: nameField,
            comment: commentField
        }
        setAddedComments([...addedComments, newComment]);
        setNameField('');
        setCommentField('');
    }

    console.log (comments)


    return (
        <div className={`modal_wrapper ${props.isOpened ? 'open' : 'close'}`}>
            <div className="modal_body">
                <div className="modal_header">
                    <div className="modal_title"><h2>Напишите комментарий</h2></div>
                    <div className="modal_close" onClick={props.onModalClose}>×</div>
                </div>
                <div className="content_body">
                    <div className="modal_content">
                        <div className="modal_image">
                            <img src={props.modalImage.url} />
                        </div>


                    <div className="modal_input_one">
                        <input
                            placeholder="Ваш никнейм"
                            type="text"
                            value={nameField}
                            onChange={handleChangeName}
                        />
                    </div>
                        <div className="modal_input_two">
                            <input
                                placeholder="Ваш комментарий"
                                type="text"
                                value={commentField}
                                onChange={handleChangeComment}
                            />
                         </div>
                    <div className="add_comment_button">
                        <button
                            className="comment_button"
                            onClick={handleAddComment}
                        >
                            Добавить комментарий
                        </button>
                    </div>
                </div>
                    <div className="modal_sidebar">
                        <span>Комментарии</span>
                        {addedComments.map(comment => {
                            return (
                                <div className="comment_bar">
                                    <div className="comment_name">
                                        {comment.name}
                                    </div>
                                    <div className="comment">
                                      - "{comment.comment}"
                                    </div>
                                </div>
                            )
                        })}
                </div>
                </div>
            </div>
        </div>
    );
}

export default ModalImageIsOpen;