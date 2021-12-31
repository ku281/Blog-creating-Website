import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core';
import {Link } from 'react-router-dom';
const useStyles = makeStyles({
    component:{
        background:'#ffffff',
        color:'black'
    },
    container:{
        justifyContent:'center'
    },
    ant:{
        padding:20
    },
    link:{
      textDecoration:'none',
      color:'inherit'
    }

})
const Header=()=>{
    const classes =useStyles();
    return(
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
             <Link className={classes.link}  to ='/'> <Typography className={classes.ant}>HOME</Typography> </Link>
               <Typography className={classes.ant} >ABOUT</Typography>
               <Typography className={classes.ant} >CONTACT</Typography>
               <Typography className={classes.ant} >ABOUT</Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header;