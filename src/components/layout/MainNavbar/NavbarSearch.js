import React from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from "shards-react";

export default () => (
  <div>
    <Form className="main-navbar__search  d-none d-md-flex d-lg-flex">
      <InputGroup seamless className="ml-3" style={{ width: "30rem", padding: "12px" }}>
        <InputGroupAddon type="prepend">
          <InputGroupText>
            <i className="material-icons mx-2 " style={{ fontSize: "1.2rem"}}>search</i>
          </InputGroupText>
        </InputGroupAddon>
        <FormInput
          className="navbar-search"
          placeholder="Search ..."
          style={{ background: "#f2f2f2" }}
        />
      </InputGroup>
    </Form>
  </div>
);
