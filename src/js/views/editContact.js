import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/contact.css";

export const EditContact = props => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const currentContact = store.contacts.find(contact => contact.id.toString() === params.contactId)

  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (currentContact) {
      setFullName(currentContact.full_name);
      setAddress(currentContact.address);
      setPhone(currentContact.phone);
      setEmail(currentContact.email);
    }
  }, [currentContact]);

  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const editData = {
      full_name: fullName,
      address: address,
      phone: phone,
      email: email
    };
    actions.editContact(params.contactId, editData);
  };

  return (
    <div className='contactForm'>
      <h1>Edit Contact</h1>
      <form onSubmit={handleEdit}>
        <div class="mb-3">
          <label for="fullName" class="form-label">Full Name</label>
          <input type="text" id="fullName" class="form-control" name="fullName" placeholder="Edit Name" value={fullName} onChange={handleChangeFullName} />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" class="form-control" name="email" placeholder="Edit Email" value={email} onChange={handleChangeEmail} />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <input type="text" id="address" class="form-control" name="address" placeholder="Edit Address" value={address} onChange={handleChangeAddress} />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone</label>
          <input type="text" id="phone" class="form-control" name="phone" placeholder="Edit Phone" value={phone} onChange={handleChangePhone} />
        </div><div className="button-container">
                <button type="submit" className="custom-edit-btn">Edit Contact</button>
                <Link to="/contacts">
                    <button className="returnButton btn btn-primary">Return to contacts</button>
                </Link>
            </div>
        </form>
    </div>
  );
};