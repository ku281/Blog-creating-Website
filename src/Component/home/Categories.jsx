
import {Button,makeStyles,Table,TableRow,TableHead,TableBody,TableCell} from '@material-ui/core';
import {categories} from '../../constants/data';
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
    return(<><button variant="contained" className={classes.create}>create blog</button>
    <Table className={classes.table}>
        <TableHead><TableRow><TableCell>
            All Categories</TableCell></TableRow></TableHead>
            <TableBody>
                {
                    categories.map(category=>(
                        <TableRow>
                            <TableCell>{category}</TableCell>
                        </TableRow>
                    ))
}
</TableBody>
</Table>
    </>
)
}
export default Categories;
