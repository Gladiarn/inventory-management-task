import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  AppBar,
  Toolbar,
} from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import CategoryIcon from "@mui/icons-material/Category";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [stock, setStock] = useState([]);

  useEffect(() => {
    // Fetch all data
    Promise.all([
      fetch("/api/products").then((res) => res.json()),
      fetch("/api/warehouses").then((res) => res.json()),
      fetch("/api/stock").then((res) => res.json()),
    ]).then(([productsData, warehousesData, stockData]) => {
      setProducts(productsData);
      setWarehouses(warehousesData);
      setStock(stockData);
    });
  }, []);

  // Calculate total inventory value
  const totalValue = stock.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    return sum + (product ? product.unitCost * item.quantity : 0);
  }, 0);

  // Get products with stock across all warehouses
  const inventoryOverview = products.map((product) => {
    const productStock = stock.filter((s) => s.productId === product.id);
    const totalQuantity = productStock.reduce((sum, s) => sum + s.quantity, 0);
    return {
      ...product,
      totalQuantity,
      isLowStock: totalQuantity < product.reorderPoint,
    };
  });

  return (
    <>
    

      <Container sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>

        {/* Summary Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* cards goes here */}
        </Grid>

        {/* Inventory Overview Table */}
        {/* <Typography variant="h5" gutterBottom>
          Inventory Overview
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>SKU</strong>
                </TableCell>
                <TableCell>
                  <strong>Product Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Category</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Total Stock</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Reorder Point</strong>
                </TableCell>
                <TableCell>
                  <strong>Status</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inventoryOverview.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{
                    backgroundColor: item.isLowStock ? "#fff3e0" : "inherit",
                  }}
                >
                  <TableCell>{item.sku}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell align="right">{item.totalQuantity}</TableCell>
                  <TableCell align="right">{item.reorderPoint}</TableCell>
                  <TableCell>
                    {item.isLowStock ? (
                      <Typography color="warning.main" fontWeight="bold">
                        Low Stock
                      </Typography>
                    ) : (
                      <Typography color="success.main">In Stock</Typography>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
      </Container>
    </>
  );
}
