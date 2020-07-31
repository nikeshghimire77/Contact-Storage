import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const { filterContacts, clearFilter } = useContext(ContactContext);

  const onChange = (e) => {
    e.target.value !== '' ? filterContacts(e.target.value) : clearFilter();
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type='text' placeholder='Filter Contacts...' onChange={onChange} />
    </form>
  );
};

export default ContactFilter;
