import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/Phonebook/phonebook-operations";
import {
  getLoading,
  getVisibleContacts,
} from "../../redux/Phonebook/phonebook-selectors";
import styles from "./Contacts.module.css";
import { Button } from "@material-ui/core";

function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(getVisibleContacts);
  // console.log(contacts);
  const isLoadingContacts = useSelector(getLoading);
  console.log(isLoadingContacts);

  return (
    <>
      {isLoadingContacts && <h1>....Download</h1>}

      <ul className={styles.contacts}>
        {contacts.map((contact) => (
          <li className={styles.contacts_item} key={contact.id}>
            {contact.name + " : " + contact.number}
            {
              <div>
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  name="delete"
                  onClick={() => {
                    dispatch(deleteContact(contact.id));
                  }}
                >
                  delete
                </Button>
              </div>
            }
          </li>
        ))}
      </ul>
    </>
  );
}

export default Contacts;
