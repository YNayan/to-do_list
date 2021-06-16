import React from 'react'
// import "./Footer.css" this is the way to include a styling sheet to a react

export const Footer = () => {
    //this is the way to apply styling ...THis will be gamechanger!!!
    let footerStyle ={
        position: "relative",
        top: "17.2vh",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
