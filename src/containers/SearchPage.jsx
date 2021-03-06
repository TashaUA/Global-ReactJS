import React, {useState} from "react";
import MainLayout from "./MainLayout";
import {Link, useParams} from "react-router-dom";

export default function SearchPage() {
    const { queryParam } = useParams();

    const [query, setQuery] = useState(queryParam || '');

    const handleInput = (event) => {
        const { value } = event.target;
        setQuery(value);
    };

    return (
        <MainLayout>
        <div className="search-box">
            <h3 className="search-box__title">Find your movie</h3>
            <form>
                <input type="text" name="query" onChange={handleInput} placeholder="What do you want to watch?"/>
                <Link to={"/search/"+query}>Search</Link>
            </form>
        </div>
        </MainLayout>
    );
}
