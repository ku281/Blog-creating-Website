
import {Box,Typography,makeStyles} from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
const useStyles=makeStyles({
    container:{
        margin:10,
        borderRadius:10,
        border:"1px solid black",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        
        
    },
    image:{
        height:150,
        Weight:'100%',
        objectFit:'cover',
        borderRadius:'10px 10px 0 0'
    }
})
const Post =()=>{
    const classes=useStyles();
   // const url =" https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80create.jsx"
   //const url= "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80create.jsx";
   const url="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80create.jsx";
   //const url="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80create.jsx ";
    return(
        <Box className ={classes.container}>
       

       <img src={url} alt="wrapper" className={classes.image}/>
       <Typography>Music</Typography>
       <Typography>Code for interview</Typography>
       <Typography>author:code for interview</Typography>
       <Typography>hi from code interview</Typography>
        </Box>
        
    )
}
export default Post;
