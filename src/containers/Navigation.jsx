import React from "react";
import NavigationItem from "../components/NavigationItem";

const NavData = [
    {
        id: 1,
        name: "All"
    },
    {
        id: 2,
        name: "Documentary"
    },
    {
        id: 3,
        name: "Comedy"
    },
    {
        id: 4,
        name: "horror"
    },
    {
        id: 5,
        name: "crime"
    }
];

class Navigation extends React.Component {
    render() {
        return (
            <nav className="nav">
                {NavData.map((el) => (
                    <NavigationItem key={el.id} id={el.id} name={el.name} />
                ))}
            </nav>
        );
    }
}

export default Navigation;