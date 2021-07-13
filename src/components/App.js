import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { loadImages } from '../redux/actions';
import { Route } from 'react-router-dom';
import Images from './Images';
import Header from "./Header";
import ModalImage from "./ModalImage";

function App() {
  const dispatch = useDispatch();


  useEffect (() => {
    dispatch(loadImages())
  }, []);

  return (
      <Route path="/:id?">
        <div className="App">
          <Header />
            <Images />
            <ModalImage />
        </div>
      </Route>
  );
}

export default App;
