import axios from 'axios';
//import {useParams} from 'react-router-dom';
const url = 'http://localhost:8000';
//let {id}=useParams();
export const createPost = async (post) => {
    try {
        return await axios.post(`${url}/create`, post);
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    }
}

export const getAllPosts= async(param)=>{
    try{
      let response=await axios.get(`${url}/posts${param}`);
      return response.data;
    }
    catch(error)
    {
        console.log("jhjjcjkjkkkmmkd",error);
    }
}

export const getPost = async (param)=>{
    try{
        let response= await axios.get(`${url}/post/${param}`);
        return response.data;
    }catch(error)
    {
        console.log("error while jjj",error);
    }
}
export const updatePost =async(id,post)=>{
    try{
       return await axios.post(`${url}/update/${id}`,post)
    }
    catch(error) {
        console.log('Error while calling updatePost API ', error)
    }
}

    export const deletePost = async (id) => {
        try {
            return await axios.delete(`${url}/delete/${id}`);
        } catch(error) {
            console.log('Error while calling deletePost API ', error)
        }
    }
    //export const uploadFile = async (data) => {
       // console.log(data);
      // try {
        //    return await axios.post(`${url}/file/upload`, data);
        //} catch (error) {
          // console.log('Error while calling uploadFile API ', error);
        //}//
    //}
    export const newComment = async (data) => {
        try {
            return await axios.post(`${url}/comment/new/`, data);
        } catch(error) {
            console.log('Error while calling newComment API ', error)
        } 
    }
    export const getComments = async (id) => {
        try {
            let response=await axios.get(`${url}/comments/${id}`);
            return response.data;
           // response.status(200).json(comments);
        } catch (error) {
            //response.status(500).json(error)
            console.log("jjjjj",error);
        }
    }
    
export const deleteComment = async (id) => {
    try {
        return await axios.delete(`${url}/comment/delete/${id}`);
    } catch(error) {
        console.log('Error while calling deleteComments API ', error)
    } 
}