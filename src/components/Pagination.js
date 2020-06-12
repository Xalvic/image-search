import React, { useState } from "react";

const Pagination = ({ pages }) => {
  const [page, setPage] = useState(pages);

  return (
    <div>
      <button onClick={() => setPage(page + 1)}>Plus</button>
      <button onClick={() => setPage(page - 1)}>Minus</button>
    </div>
  );
};

export default Pagination;
