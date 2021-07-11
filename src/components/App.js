import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { loadImages } from '../redux/actions';
import { Route } from 'react-router-dom';
import Images from './Images';
import Header from "./Header";
import ModalImage from "./ModalImage";

function App() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);


  useEffect (() => {
    dispatch(loadImages())
  }, []);

  return (
      <Route path="/:id?">
        <div className="App">
          <Header />
            <Images
                modal={modal}
                setModal={setModal}
            />
            <ModalImage
                isOpened={modal}
                onModalClose={()=> setModal(false)}
            />
        </div>
      </Route>
  );
}

export default App;
