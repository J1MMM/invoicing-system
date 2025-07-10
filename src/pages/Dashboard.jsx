import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { isAuthenticated, removeToken } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import InvoiceList from "../components/Invoices/InvoiceList";
import { Logout } from "@mui/icons-material";
import { useEffect, useState } from "react";
import InvoiceForm from "../components/Invoices/InvoiceForm";
import { v4 } from "uuid";

function Dashboard() {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    } else {
      const storedInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
      setInvoices(storedInvoices);
    }
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      removeToken();
      navigate("/login");
    }
  };

  const onSave = (invoice) => {
    let updated;

    if (selectedInvoice) {
      updated = invoices.map((inv) => (inv.id == invoice.id ? invoice : inv));
    } else {
      updated = [...invoices, { ...invoice, id: v4() }];
    }
    console.log(updated);

    setInvoices(updated);
    localStorage.setItem("invoices", JSON.stringify(updated));
    setSelectedInvoice(null);
    setShowForm(false);
  };

  const onEdit = (invoice) => {
    setSelectedInvoice(invoice);
    setShowForm(true);
  };

  const onDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this invoice?"
    );
    if (confirm) {
      const updated = invoices.filter((inv) => inv.id != id);
      setInvoices(updated);
      localStorage.setItem("invoices", JSON.stringify(updated));
    }
  };

  return (
    <Box height={"100vh"}>
      <Stack
        bgcolor="primary.main"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding={3}
      >
        <Typography variant="h5" fontWeight="600" color="#FFF">
          Invoice Dashboard
        </Typography>
        <IconButton onClick={handleLogout}>
          <Logout sx={{ color: "#FFF" }} />
        </IconButton>
      </Stack>

      <Stack padding={3} justifyContent="center" flexDirection="column">
        <Button
          onClick={() => setShowForm(true)}
          variant="contained"
          sx={{
            textTransform: "none",
            alignSelf: "end",
          }}
        >
          Add New Invoice
        </Button>

        <InvoiceForm
          open={showForm}
          onClose={() => {
            setShowForm(false);
            setSelectedInvoice(null);
          }}
          onSave={onSave}
          initialData={selectedInvoice}
        />

        <InvoiceList invoices={invoices} onEdit={onEdit} onDelete={onDelete} />
      </Stack>
    </Box>
  );
}

export default Dashboard;
