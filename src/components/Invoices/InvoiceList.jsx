import { Delete, Edit } from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const InvoiceList = ({ invoices, onDelete, onEdit }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ mt: 2, minHeight: "calc(100vh - 200px)" }}
      elevation={3}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>Invoice</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Customer</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Total</TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <Typography color="text.secondary">
                  No invoices found.
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            invoices.map((invoice) => (
              <TableRow
                key={invoice.id}
                sx={{ "&:hover": { bgcolor: "#BCDFF5" } }}
              >
                <TableCell component="th" scope="row">
                  {invoice.number}
                </TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.customer}</TableCell>
                <TableCell>{invoice.total}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => onEdit(invoice)} color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton
                    onClick={() => onDelete(invoice.id)}
                    color="error"
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoiceList;
