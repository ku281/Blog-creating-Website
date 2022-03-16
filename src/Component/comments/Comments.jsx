import {useState,useEffect} from'react';
import {Box,TextareaAutosize,Button,makeStyles} from '@material-ui/core'
import { newComment,getComments } from '../../service/api';
import Comment from './Comment';
const useStyles=makeStyles({
component:{
marginTop:100,
display:'flex'
},
textarea:{
width:'100%',
margin:'0 20px'
},
image:{
    width:50,
    height:50,
    borderRadius:'50%'
},button:{
    height:40,
    marginLeft:10
}
})
const initialValue={
    name:'',
    postid:'',
    date:new Date(),
    comments:''

}
export const Comments=({post})=>{
    const classes=useStyles();
    const url=/*post.picture ?post.picture*/"https://static.thenounproject.com/png/12017-200.png";
    const [comment,setComment]=useState(initialValue);
    const [comments,setComments]=useState([]);
    const [toggle,setToggle]=useState(false);
    //console.log(post);
    useEffect(() => {
        const getData = async () => {
            let response = await getComments(post._id);
            setComments(response);
        }
        getData();
    }, [post,toggle]);
    const handleChange = (e) => {
        setComment({
            ...comment,
            name: post.username,
            postId: post._id,
            comments: e.target.value
        })
       // setData(e.target.value);
    }
    const postComment = async() => {
        await newComment(comment);
       // setData('')
        setToggle(prev => !prev);
    }
    


    return(
    <Box><Box className={classes.component}>
        <img src={url} alt ="dp" className={classes.image}/>
    
        <TextareaAutosize className={classes.textarea}
            rowsMin={5}
            onChange={(e)=>handleChange(e)}
            />

        <Button variant ="contained"
        color="primary"
        size="medium"
        className={classes.button}
        onClick={()=>postComment()}>Post</Button>
        </Box>
        {
            comments && comments.map(comment=>(
                <Comment comment={comment} toggle={toggle}/>
            ))
        }
        </Box>
    )

}
export default Comments;