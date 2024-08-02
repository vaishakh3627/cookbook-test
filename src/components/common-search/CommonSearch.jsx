import React from "react";
import { Form } from "react-bootstrap";

// import { FaSearch } from "react-icons/fa";

function CommonSearch() {
  return (
    <Form className="common-serach w-50">
      <Form.Control
        type="search"
        placeholder="search..."
        aria-label="Search"
        className="search-input"
      />
      {/* <FaSearch className="text-400 search-box-icon text-white" /> */}
    </Form>
  );
}

export default CommonSearch;
