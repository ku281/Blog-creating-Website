import Categories from './Categories';
import Banner from './Banner';
import Posts from  './Posts';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom'
const Home =()=>{
    return( 
    <><Banner/>
    <Grid container>
    <Grid item lg={2} xs={12} sm={2} >
    <Categories/></Grid>
    <Grid  container item lg={10} xs={12} sm={10}>
    <Posts/>
    </Grid>
    </Grid>
    </>)
}
export default Home;