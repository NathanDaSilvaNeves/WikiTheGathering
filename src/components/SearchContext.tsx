import React from "react";

interface ISearchContext {
    search: any;
    setSearch: any;
}

export const SearchContext = React.createContext<ISearchContext>(
    {} as ISearchContext
);