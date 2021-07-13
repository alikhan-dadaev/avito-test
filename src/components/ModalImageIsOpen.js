import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useHistory, useParams} from "react-router";
import {Link} from "react-router-dom";

function ModalImageIsOpen(props) {
    const comments = useSelector(state => state.inModalImage.comments);
    const [addedComments, setAddedComments] = useState([]);

    const [nameField, setNameField] = useState("");
    const [commentField, setCommentField] = useState("");
    const history = useHistory();

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
    const handleClick = () => {
        history.push("/")
    }
    const id = useParams().id;



    return (
        <div className={`modal_wrapper ${id ? 'open' : 'close'}`}>
            <div className="modal_body">
                <div className="modal_header">
                    <div className="modal_title"><h2>Напишите комментарий</h2></div>
                    <Link className="modal_close" onClick={handleClick}>×</Link>
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
                        {addedComments.map(addComment => {
                            return (
                                <div className="comment_bar">
                                    <div className="comment_name">
                                        {addComment.name}
                                    </div>
                                    <div className="comment">
                                      - "{addComment.comment}"
                                    </div>
                                </div>
                            )
                        })}
                        {comments.map(comment => {
                            return (
                                <div className="existing_comment">
                                    <div className="comment_date">
                                        <i>Дата:</i> <br />{comment.date}
                                    </div>
                                    <div className="comment_text">
                                        {comment.text}
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