import React from "react";

export default function ErrorBoundary(props) {

    const ErrorMessage = () => (
        <h3>Oops something went wrong. We are working on this...</h3>
    );

    return (
        <>{ props.children ? props.children : <ErrorMessage />}</>
    );
}