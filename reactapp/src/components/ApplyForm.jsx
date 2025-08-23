import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplyForm = () => {
 const [formData, setFormData] = useState({
  name: '',
  giftCategories: '',
  experience: '',
  specialization: '',
  phoneNumber: ''
 });
 const [errors, setErrors] = useState({});
 const [successMessage, setSuccessMessage] = useState('');
 const navigate = useNavigate();

 const validateForm = () => {
  const newErrors = {};

  if (!formData.name.trim()) {
   newErrors.name = 'Name is required';
  }

  if (!formData.giftCategories.trim()) {
   newErrors.giftCategories = 'Gift categories are required';
  }

  if (!formData.experience.trim()) {
   newErrors.experience = 'Experience is required';
  } else if (parseInt(formData.experience) < 0) {
   newErrors.experience = 'Experience must be a positive number';
  }

  if (!formData.specialization.trim()) {
   newErrors.specialization = 'Specialization is required';
  }

  if (!formData.phoneNumber.trim()) {
   newErrors.phoneNumber = 'Phone Number is required';
  } else if (!formData.phoneNumber.startsWith('+91')) {
   newErrors.phoneNumber = 'Phone Number must start with +91';
  } else if (formData.phoneNumber.length !== 13) {
   newErrors.phoneNumber = 'Phone Number must be 13 digits long, including the country code';
  } else if (!/^\+91\d{10}$/.test(formData.phoneNumber)) {
   newErrors.phoneNumber = 'Invalid phone number format. It should start with +91 and have exactly 10 digits after it.';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
   return;
  }

  try {
   console.log('Submitting data:', formData);
   const response = await fetch('https://8080-cacdadacdbaaedcfdbdeeffdabbeff.premiumproject.examly.io/addGift', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   });

   console.log('Response status:', response.status);
   const responseText = await response.text();
   console.log('Response text:', responseText);

   if (response.ok) {
    setSuccessMessage('Application submitted successfully!');
    setFormData({
     name: '',
     giftCategories: '',
     experience: '',
     specialization: '',
     phoneNumber: ''
    });
    setErrors({});
    setTimeout(() => {
     navigate('/getAllGifts');
    }, 2000);
   } else {
    console.error('Error submitting application:', responseText);
   }
  } catch (error) {
   console.error('Error:', error);
  }
 };

 const handleChange = (e) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value
  });
 };

 return (
  <main>
   <h2>Apply to Become a Gift Provider</h2>
   {successMessage && <div style={{color: 'green'}} data-testid="success-message">{successMessage}</div>}
   <form onSubmit={handleSubmit} data-testid="application-form">
    <div>
     <label htmlFor="name">Name:</label>
     <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
     />
     {errors.name && <div style={{color: 'red'}}>{errors.name}</div>}
    </div>

    <div>
     <label htmlFor="giftCategories">Gift Categories:</label>
     <input
      type="text"
      id="giftCategories"
      name="giftCategories"
      value={formData.giftCategories}
      onChange={handleChange}
     />
     {errors.giftCategories && <div style={{color: 'red'}}>{errors.giftCategories}</div>}
    </div>

    <div>
     <label htmlFor="experience">Experience (Years):</label>
     <input
      type="number"
      id="experience"
      name="experience"
      value={formData.experience}
      onChange={handleChange}
     />
     {errors.experience && <div style={{color: 'red'}}>{errors.experience}</div>}
    </div>

    <div>
     <label htmlFor="specialization">Specialization:</label>
     <input
      type="text"
      id="specialization"
      name="specialization"
      value={formData.specialization}
      onChange={handleChange}
     />
     {errors.specialization && <div style={{color: 'red'}}>{errors.specialization}</div>}
    </div>

    <div>
     <label htmlFor="phoneNumber">Phone Number:</label>
     <input
      type="text"
      id="phoneNumber"
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={handleChange}
     />
     {errors.phoneNumber && <div style={{color: 'red'}}>{errors.phoneNumber}</div>}
    </div>

    <button type="submit" data-testid="submit-button">Submit Application</button>
   </form>
  </main>
 );
};

export default ApplyForm;