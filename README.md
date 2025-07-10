# 🧾 React Invoicing System

This is a simple **Invoicing System** built using **React.js** for the Frontend Web Developer exam. The app allows users to register, log in, and manage invoices with full **CRUD** functionality, all using `localStorage` — no backend required.

---

## 🚀 Features

✅ Register / Login / Logout  
✅ Create, View, Update, and Delete Invoices  
✅ Add multiple products per invoice  
✅ Auto-calculated subtotals and total amount  
✅ Data stored in `localStorage`  
✅ Responsive UI built with **Material-UI (MUI)**  
✅ Password masking and basic UX security  
✅ Clean code with reusable components

---

## 🖥️ Tech Stack

- **React.js**
- **Material-UI (MUI v5)**
- **React Router**
- `localStorage` for persistence
- No backend / API

---

## 📝 Functionality Overview

### 🔐 Authentication

- Simulated using `localStorage`
- Basic token saved to check if user is logged in
- Pages are protected — redirect to login if unauthenticated

### 🧾 Invoice Features

Each invoice includes:

- Invoice Number
- Invoice Date
- Customer Name
- Multiple product entries (name, quantity, price)
- Auto-calculated subtotal per product
- Total invoice amount at bottom
- Edit/Delete actions
- Empty state display when no data exists

---

## 🗂️ Project Structure
