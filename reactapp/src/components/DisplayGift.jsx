import React, { useState, useEffect } from 'react';

const DisplayGift = () => {
 const [gifts, setGifts] = useState([]);

 useEffect(() => {
  fetchGifts();
 }, []);

 const fetchGifts = async () => {
  try {
   const response = await fetch('https://8080-cacdadacdbaaedcfdbdeeffdabbeff.premiumproject.examly.io/getAllGifts', {
    method: 'GET',
    headers: {
     'Content-Type': 'application/json',
    },
   });

   if (response.ok) {
    const data = await response.json();
    setGifts(data);
   } else {
    console.error('Error fetching gifts');
   }
  } catch (error) {
   console.error('Error:', error);
  }
 };

 return (
  <main>
   <h2>Submitted Gift Applications</h2>
   <table data-testid="gifts-table">
    <thead>
     <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Gift Categories</th>
      <th>Experience</th>
      <th>Specialization</th>
      <th>Phone Number</th>
     </tr>
    </thead>
    <tbody>
     {gifts.map((gift) => (
      <tr key={gift.id}>
       <td>{gift.id}</td>
       <td>{gift.name}</td>
       <td>{gift.giftCategories}</td>
       <td>{gift.experience}</td>
       <td>{gift.specialization}</td>
       <td>{gift.phoneNumber}</td>
      </tr>
     ))}
    </tbody>
   </table>
  </main>
 );
};

export default DisplayGift;

