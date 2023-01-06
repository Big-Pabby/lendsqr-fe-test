import React from "react";

const Pagination = ({
    totalPosts,
    paginate,
    postsPerPage,
    } : {
        totalPosts : number;
        paginate: Function;
        postsPerPage: number;
    }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <nav>
        <ul className="pagination">
            {
                pageNumbers.map(number => (
                    <li key={number} onClick={() => {paginate(number)}}>
                        <p> {number}</p>
                    </li>
                ))
            }
        </ul>
    </nav>
  );
};

export default Pagination;
