import React,{useState,useEffect} from 'react';
import { makeStyles,FormControl,InputBase,Button,TextareaAutosize} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
//import {AddIcon} from '@material-ui/icons';
import {Box} from "@material-ui/core";
import {createPost} from '../../service/api';
import { useHistory} from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
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
    categories: '',
    createdDate: new Date()
}
const CreateView=()=>{
    const classes=useStyle();
    const history = useHistory();
     const [post,setPost]=useState(initialValues);
    //const [file,setFile]=useState('');
    //const [imageUrl,setImage]=useState=('');
    const url=/*post.picture ? post.picture :*/"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80detailView.jsx";   
     /* useEffect(()=>{ 
          const getImage=async()=>{
              console.log(file);
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
   
    
    
   const savePost=async()=>{
       await createPost(post);
       history.push(`/`);
   }
       const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
   }

    return(
            <Box className={classes.container}>

        <img  src={url} className={classes.image} alt="post" />
            
            <FormControl  className={classes.form}>
           

             
            <InputBase onChange={(e) => handleChange(e)}  placeholder="Title" className={classes.textField} name="title"/>
            <Button onClick={() => savePost()}  onclick variant="contained" color="primary" style={{marginLeft:780}}> Publish</Button>
            </FormControl>
            <TextareaAutosize 
            rowsMin={3} placeholder="jjfkdkkd......." className={classes.Textarea}onChange={(e) => handleChange(e)} 
            name="description"/>
            </Box>
    )   
    
}
export default CreateView;
