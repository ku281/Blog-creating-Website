import React,{useState,useEffect} from 'react';
import { makeStyles,FormControl,InputBase,Button,TextareaAutosize} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import {getPost,updatePost} from '../../service/api';
import { useHistory } from 'react-router-dom';
//import {AddIcon} from '@material-ui/icons';
import {Box} from "@material-ui/core";
//import { getPost } from '../../service/api';
const useStyle = makeStyles(theme => ({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            padding: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    form:
    {
        dispaly:'flex',
        flexDirection:'row',
        marginTop:10
        
    }
    ,
    textField:{
        flex: 1,
        margin:"0 30px"
    },
    Textarea:{
      width:"100%",
      marginTop:50,
      border:"none",
      '&focus-visible':{

      outline:'none'
    }
}
}));
const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: 'cggggggg',
    categories: 'all',
    createdDate: new Date()
}
const UpdateView=({match})=>{
    const classes=useStyle();
    const history=useHistory();
   
       const [post,setPost]=useState(initialValues);
      // const [file,setFile]=useState('');
       //const [imageUrl,setImage]=useState=('');
       const url=/*post.picture ?post.picture*/"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80 detailView.jsx";
         /*useEffect(()=>{
        const getImage=async()=>{
            if(file)
            {
                const data= new FormData();
                data.append("name",file.name);
                data.append("file",file);
                const image= await uploadFile(data);
                post.picture=image.data;
                setImage(image.data);
            }
        }
        getImage();
    },[file]);*/
       useEffect(()=>{
           const fetchData =async ()=>{
            let data=await getPost(match.params.id);
            setPost(data);
           }
           fetchData();
       },[])
       const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
       }
        const updateBlog= async()=>{
         await updatePost(match.params.id,post);
         history.push(`/details/${match.params.id}`);
        }
    
    return(
            <Box className={classes.container}>

        <img className={classes.image} src={url} alt="banner" />
            
            <FormControl className={classes.form}>
            
            
             
            <InputBase  placeholder="Title" name="title" onChange={(e)=>handleChange(e)} value={post.title} className={classes.textField}/>
            <Button  onClick={()=>updateBlog()}variant="contained" color="primary" style={{marginLeft:780}}>Update</Button>
            </FormControl>
            <TextareaAutosize
            rowMin={3} placeholder="jjfkdkkd......." className={classes.Textarea}
            value={post.description} onChange={(e)=>handleChange(e)}
            name="description"
            />
            </Box>
    )
}

export  default UpdateView;
