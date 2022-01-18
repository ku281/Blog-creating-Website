import {Button,makeStyles,Table,TableRow,TableHead,TableBody,TableCell} from '@material-ui/core';
import {categories} from '../../constants/data';
import {Link,useLocation} from 'react-router-dom';
const useStyles=makeStyles({
    create:{
        margimn:20,
        background:"blue",
        color:"white",
        width:"86%"
    },
    table:{
        border:"1px solid rgba(224,224,224,1)"
    }

    
})

const Categories=()=>{
    const classes=useStyles();
    const location=useLocation();
    return(<><Link to={`/create/${location.search}`}><Button variant="contained" className={classes.create}>create blog</Button></Link>
    <Table className={classes.table}>
        <TableHead><TableCell>
            <Link to={'/'}>
            All Categories</Link></TableCell></TableHead>
            <TableBody>
                
                    {categories.map(category=>(
                        <TableRow>
                            <TableCell>
                                <Link to={`/?category=${category}`} className={classes.link}>{category}</Link></TableCell>
                        </TableRow>
                    ))
}
</TableBody>
</Table>
    </>
)
}
export default Categories;

