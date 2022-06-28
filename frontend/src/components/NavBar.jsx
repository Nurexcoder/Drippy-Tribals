import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Avatar, Badge } from "@material-ui/core";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Container = styled.div`
    height: 60px;
    margin: 0px;
    width: 100%;
    ${mobile({
        height: "40px",
        margin: "0",
    })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({
        padding: "10px 5px",
    })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;

    align-items: center;
    ${mobile({
        justifyContent: "center",
        flex: "0.4",
    })}
`;
const Center = styled.div`
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({
        flex: "2",
        justifyContent: "space-evenly",
    })}
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-right: 20px;
    ${mobile({
        display: "none",
    })}
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
`;
const Input = styled.input`
    border: none;
    ${mobile({
        display: "none",
    })}
`;
const Logo = styled.h1`
    font-style: bold;
    text-align: center;
    margin: 0;
    ${mobile({
        fontSize: "20px",
    })}
`;
const ManuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin: 0 7px;
`;
const NavBar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    const user = useSelector((state) => state.user.currentUser);
    console.log(user);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // console.log(quantity);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon
                            style={{ color: "grey", fontSize: "16px" }}
                        />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Fruit Fresh</Logo>
                </Center>
                <Right>
                    {user ? (
                        <>
                            <Badge badgeContent={quantity} color='primary'>
                                <Link to='/Cart'>
                                    <ShoppingCartOutlinedIcon />
                                </Link>
                            </Badge>
                            <Tooltip title='Account settings'>
                                <IconButton
                                    onClick={handleClick}
                                    size='small'
                                    sx={{ ml: 2 }}
                                    aria-controls={
                                        open ? "account-menu" : undefined
                                    }
                                    aria-haspopup='true'
                                    aria-expanded={open ? "true" : undefined}>
                                    <Avatar sx={{ width: 32, height: 32 }}>
                                        {user.username[0].toUpperCase()}
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorEl={anchorEl}
                                id='account-menu'
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: "visible",
                                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                        mt: 1.5,
                                        "& .MuiAvatar-root": {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        "&:before": {
                                            content: '""',
                                            display: "block",
                                            position: "absolute",
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: "background.paper",
                                            transform:
                                                "translateY(-50%) rotate(45deg)",
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{
                                    horizontal: "right",
                                    vertical: "top",
                                }}
                                anchorOrigin={{
                                    horizontal: "right",
                                    vertical: "bottom",
                                }}>
                                {/* <MenuItem>
                                    <Avatar /> Profile
                                </MenuItem> */}
                                <MenuItem>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                {/* <MenuItem>
                                    <ListItemIcon>
                                        <PersonAdd fontSize='small' />
                                    </ListItemIcon>
                                    Add another account
                                </MenuItem> */}
                                {/* <MenuItem>
                                    <ListItemIcon>
                                        <Settings fontSize='small' />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem> */}
                                <MenuItem onClick={()=>{
                                            localStorage.clear()
                                            window.location.reload();
                                            }}>
                                    <ListItemIcon>
                                        <Logout fontSize='small' />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Link to='/register'>
                                <ManuItems>REGISTER</ManuItems>
                            </Link>
                            <Link to='/login'>
                                <ManuItems>SIGN IN</ManuItems>
                            </Link>
                        </>
                    )}
                </Right>
            </Wrapper>
        </Container>
    );
};

export default NavBar;
