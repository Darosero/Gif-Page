import { useEffect, useState } from "react";
import Sticker from "./Sticker";
import getStickers from "../services/getStickers";

export default function ListOfStickers({ keyWord }) {
  const [sticker, setSticker] = useState([]);

  useEffect(() => {
    getStickers({ keyWord }).then((sticker) => setSticker(sticker));
  }, [keyWord]);

  return sticker.map(({ id, title, url }) => (
  
      <Sticker id={id} title={title} url={url} key={id} />
    
  ));
}
