import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import getGif from "../services/getGif";
import Gif from "./Gif";

export default function ShowGif() {

  // obtiene el keyword basado en el parametro
  let keyword = useParams(); 
  // busca los gifs
  const gifs = GifFetcher(keyword);

  return gifs.map(({ id, title, url }) => (
    <Gif key={id} id={id} title={title} url={url} />
  )); 
 
}

/**
 * Recupera los gif basados en la palabra clave
 * @param {String} keyword 
 * @returns un mapa de gifs
 */
function GifFetcher({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGif({ keyword }).then(gifs => setGifs(gifs));
  }, [keyword]);

  return gifs;
}