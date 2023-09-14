import React from "react";import { useState } from "react";
import ContactList from "./ContactList";
import SelectedContact from "./selectedContact";

export default function ContactRow({ setSelectedContactId, contact }) {
    return (
      <tr
        onClick={() => {
            setSelectedContactId
            (contact.name,
            contact.email, 
            contact.phone,);
        }}>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
        <td>{contact.id}</td>
      </tr>
    );
  }