import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { publicUrl } from "../../config";

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const getProducts = async () => {
            const res = await publicUrl.get("/users", {
                headers: {
                    authorization: "Barear " + user.accessToken,
                },
            });
            let tempData = [];
            console.log(user);
            res.data.map((user) => {
                tempData.push({
                    id: user._id,
                    username: user.username,
                    email: user.email,
                });
            });
            setData(tempData);
        };
        getProducts();
    }, []);

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='userListUser'>
                        {/* <img
                            className='userListImg'
                            src={params.row.avatar}
                            alt=''
                        /> */}
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline
                            className='userListDelete'
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className='userList'>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}
