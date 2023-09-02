import { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGif({ keyWord }) {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifs({ keyWord }).then((gifs) => setGifs(gifs));
  }, [keyWord]);

  return gifs.map(({ id, title, url }) => (
    <Gif id={id} title={title} url={url} key={id} />
  ));
}
