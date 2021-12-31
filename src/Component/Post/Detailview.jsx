
import {Box,makeStyles} from '@material-ui/core';
import {Delete,Edit} from '@material-ui/icons';
const useStyle=makeStyles({
    image:{
        width:'100%',
       // https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80
       height:'50vh',
       objectFit:'cover'
    },
    container:{
        textDecoration:'none',
        color:'inherit',
        padding:'0 100px'
        
    },
    icons:{
        float:'right'
    }
}
)
 function Detailview (){
     const classes=useStyle();
     const url=" https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80detailView.jsx"
     return(
         <Box className={classes.conatiner}>
         <img src={url} alt="banner" className={classes.image}/>
         <Box className={classes.icons}>
             <Edit/>
             <Delete/>
         </Box>
         </Box>
     )
     }
 export default Detailview;