import "./orderList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Box, withStyles } from "@material-ui/core";
import { demoOrder, productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { publicUrl } from "../../config";
import { useEffect } from "react";
import { Button } from "@mui/material";

export default function OrderList() {
    const [data, setData] = useState(demoOrder);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const StyledDataGrid = withStyles({
        root: {
            "& .MuiDataGrid-renderingZone": {
                maxHeight: "none !important",
            },
            "& .MuiDataGrid-cell": {
                lineHeight: "unset !important",
                maxHeight: "none !important",
                whiteSpace: "normal",
            },
            "& .MuiDataGrid-row": {
                maxHeight: "none !important",
            },
        },
    })(DataGrid);

    // {
    //     field: "userId",
    //     headerName: "Name",
    //     width: 300,
    //     rowHeight: 200,
    //     renderCell: (params) => {
    //         return (
    //             <div className='orderListItem'>
    //                 {params.row.userId}
    //             </div>
    //         );
    //     },
    // },
    const columns = [
        {
            field: "products",
            headerName: "Products",
            width: 350,
            renderCell: (params) => {
                return (
                    <ul>
                        {params.row.products.map((item) => {
                            return (
                                <li>
                                    Product id: {item._id}
                                    <br />
                                    Product Quantity: {item.quantity}
                                </li>
                            );
                        })}
                    </ul>
                );
            },
        },
        {
            field: "address",
            headerName: "Address",
            width: 250,
            renderCell: (params) => {
                return (
                    <ul>
                        <li>Phone no:{params.row.address.phoneNo}</li>
                        <li>Village:{params.row.address.village}</li>
                    </ul>
                );
            },
        },
        {
            field: "status",
            headerName: "Payment Status",
            width: 150,
            renderCell: (params) => {
                return (
                    <Button
                        color={
                            params.row.status === "Not Paid"
                                ? "warning"
                                : "success"
                        }>
                        {params.row.status}
                    </Button>
                );
            },
        },
        { field: "amount", headerName: "Total Amount(Rs)", width: 150 },
    ];

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const getorders = async () => {
            const res = await publicUrl.get("/orders", {
                headers: {
                    authorization: "Barear " + user.accessToken,
                },
            });
            console.log(res);
            let tempData = [];
            res.data.map((item) => {
                tempData.push({
                    id: item._id,
                    userId: item.userId,
                    address: item.address,
                    products: item.products,
                    status: item.status,
                    amount: item.amount,
                });
            });
            setData(tempData);
        };
        getorders();
    }, []);
    console.log(data);
    return (
        <div className='orderList'>
            <div className='orderTitleContainer'>
                <h1 className='orderTitle'>Order</h1>
            </div>
            <StyledDataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}
