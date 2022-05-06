//import post from '../schema/post-schema.js';
import Post from '../schema/post-schema.js';
//import {useHistory} from 'react-router-dom';
export const createPost = async (request, response) => {
    try {
        const post = await new Post(request.body);
        post.save();

        response.status(200).json('blog saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
    //console.log(request.body);
}
export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let category = request.query.category;
    let posts;
    try {
           if(username)
           posts = await Post.find({username:username});
           else if(category)
              await Post.find({categories: category});
           else
               posts= await Post.find({});
              
                response.status(200).json(posts);
           
           //let posts = await Post.find({});
        //response.status(200).json(posts);
    }catch(error) {
        response.status(500).json(error);
    }
}
export const getPost =async (request,response)=>{
    try{
      const post=await Post.findById(request.params.id);
      response.status(200).json(post);
    }catch(error)
    {
        response.status(500).json(error);
    }
}
export const updatePost = async (request, response) => {
    try {
       // c
      // const post = await Post.findById(request.params.id);
        
        await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}
export const deletePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        
        //await Post.findByIdAndUpdate( request.params.id, { $set: request.body })
         await post.delete();
        response.status(200).json('post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

