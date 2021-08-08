import React from "react";
import Container from "../components/Container";
import Form from "../components/Form";
import Filter from "../components/Filter";
import Contacts from "../components/Contacts";
import "./Views.css";

function ContactsView() {
  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <Form />

        <h2>Contacts</h2>
        <Filter />

        <Contacts />
      </div>
    </Container>
  );
}

export default ContactsView;
