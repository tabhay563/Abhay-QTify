import axios from "axios";
import { useEffect } from "react";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async() =>  {
    try{
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`)
        return res.data
    }catch(err){
        console.log(err.message)
    }
}

export  const fetchNewAlbums = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`)
        return res.data
    }catch (err) {
        console.log(err.message)
    }
}

export const fetchSongs = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/songs`)
        return res.data
    }catch (err) {
        console.log(err.message)
    }
}