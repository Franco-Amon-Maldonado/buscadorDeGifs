import React, {useEffect, useState} from "react";
import getGift from "../services/getGift";
import Gift from "./Gift";

export default function ListGift({params}) {
const {keyword} = params
const [gift, setGift] = useState([])

useEffect(function(){
    
    getGift({keyword}).then(gift => setGift(gift));

    },[keyword])

    return gift.map(({id, title, url})=> 
        
        <Gift 
          key={id}
          id={id}
          title={title}
          url={url}
        />
    ) 
}