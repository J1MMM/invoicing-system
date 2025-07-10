import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomTextField from "../../utils/CustomTextField";
import { Close } from "@mui/icons-material";

const formInitialData = {
  number: `INV-${Date.now()}`,
  date: "",
  customer: "",
  products: [{ name: "", qty: 1, price: 0 }],
};

function InvoiceForm({ open, onClose, onSave, initialData }) {
  const [form, setForm] = useState(initialData || formInitialData);

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const invoice = {
      ...form,
      total,
    };

    onSave(invoice);
    setForm(formInitialData);
  };

  const addProduct = () => {
    setForm({
      ...form,
      products: [
        ...form.products,
        {
          name: "",
          qty: 1,
          price: 0,
        },
      ],
    });
  };

  const productChange = (index, name, value) => {
    const updated = [...form.products];
    updated[index][name] = name == "name" ? value : parseFloat(value);
    setForm({ ...form, products: updated });
  };

  const removeProduct = (index) => {
    const updated = form.products.filter((_, i) => i !== index);
    setForm({ ...form, products: updated });
  };

  const total = form.products.reduce((sum, p) => sum + p.qty * p.price, 0);

  return (
    <Dialog open={open} component="form" onSubmit={handleSubmit}>
      <DialogTitle
        sx={{ bgcolor: "primary.main", color: "#FFF", fontWeight: "600" }}
      >
        Invoice Form
      </DialogTitle>
      <DialogContent dividers>
        <Stack gap={1}>
          <CustomTextField
            label="Invoice #"
            name="number"
            value={form.number}
            onChange={handleFormChange}
          />
          <CustomTextField
            label="Date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleFormChange}
          />
          <CustomTextField
            label="Customer Name"
            name="customer"
            value={form.customer}
            onChange={handleFormChange}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontWeight={600}>Products:</Typography>
            <Button
              variant="contained"
              size=""
              sx={{ textTransform: "none" }}
              onClick={addProduct}
            >
              Add Product
            </Button>
          </Stack>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {form.products.map((product, index) => {
                const subTotal = product.price * product.qty;
                return (
                  <tr key={index}>
                    <td
                      style={{
                        display: "flex",
                        border: "none",
                      }}
                    >
                      <IconButton
                        size="small"
                        onClick={() => removeProduct(index)}
                      >
                        <Close />
                      </IconButton>
                      <TextField
                        required
                        placeholder="product"
                        value={product.name}
                        onChange={(e) =>
                          productChange(index, "name", e.target.value)
                        }
                        size="small"
                      />
                    </td>
                    <td>
                      <TextField
                        value={product.qty}
                        type="number"
                        onChange={(e) =>
                          productChange(index, "qty", e.target.value)
                        }
                        size="small"
                      />
                    </td>
                    <td>
                      <TextField
                        required
                        value={product.price}
                        type="number"
                        onChange={(e) =>
                          productChange(index, "price", e.target.value)
                        }
                        size="small"
                      />
                    </td>
                    <td>
                      <TextField
                        type="number"
                        slotProps={{ input: { readOnly: true } }}
                        value={subTotal}
                        size="small"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Typography variant="h6" alignSelf="flex-end" fontWeight={600}>
            Total: {total}
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setForm(formInitialData);
            onClose();
          }}
          variant="outlined"
          size="small"
        >
          close
        </Button>
        <Button variant="contained" size="small" type="submit">
          submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default InvoiceForm;
