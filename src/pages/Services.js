import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, price1, price2) {
    return { name, price1, price2};
}

const rows = [
    createData('Манікюр класичний', 150, 180),
    createData('Манікюр апаратний', 170, 190 ),
    createData('Зняття гель лаку', 190, 200),
    createData('Масаж рук з кремом', 50, 70),
    createData('Дизайн нігтів', 100, 120),
];

const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    return (


        <TableContainer component={Paper} style={{ marginTop: 130 }}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Ціни на послуги (грн)</StyledTableCell>
                        <StyledTableCell align="right">Майстер</StyledTableCell>
                        <StyledTableCell align="right">Топ майстер</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.price1}</StyledTableCell>
                            <StyledTableCell align="right">{row.price2}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}