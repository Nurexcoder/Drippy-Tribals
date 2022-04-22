import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loading = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <CircularProgress  />
        </div>
    );
};

export default Loading;
