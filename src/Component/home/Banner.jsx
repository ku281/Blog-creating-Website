//import { mergeClasses } from '@material-ui/styles';
import {makeStyles,Box,Typography} from '@material-ui/core';
const useStyles= makeStyles({
    image:{
        background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'})center/55% repeat-x`,
        width:"100%",
        height:"50vh",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'},
        kun:{
            fontSize: 60,
            color:'#ffffff',
            lineheight:1
        },
        
        chu:{
            fontSize:20,
            background:'#ffffff'
        }
        

    
});


const Banner=()=>{

    const classes=useStyles();
    return(
        <Box className={classes.image}>
            <Typography className={classes.kun}>BLOG</Typography>
            <Typography className={classes.chu}>CODE FOR INTERIVEW</Typography>
        </Box>
    )
}
export default Banner;