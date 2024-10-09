import React, { useState } from 'react';

const data = [
   { name: 'Xôi gà', price: 10000 },
   { name: 'Bánh mì', price: 50000 },
];

const Meal = () => {
   const [form, setForm] = useState(data);
   const [searchForm, setSearchForm] = useState('');

   const search = e => {
      form.filter(item => item.name.includes(e.target.value));
   };

   const add = e => {};

   const handleFormChange = e => {};

   const handleSearchChange = e => {};

   return (
      <section>
         <div className="d-container">
            <div className="form">
               <form action="">
                  <div className="form-name">
                     <label htmlFor="name" className="form-name">
                        name
                     </label>
                     <input
                        onChange={e => handleFormChange(e)}
                        type="text"
                        className="name"
                        name="name"
                     />
                  </div>
                  <div className="form-price">
                     <label htmlFor="price" className="form-price">
                        price
                     </label>
                     <input
                        onChange={e => handleFormChange(e)}
                        type="text"
                        className="price"
                        name="price"
                     />
                  </div>
               </form>

               <button onClick={e => add(e)}>add</button>
            </div>
            <div className="search">
               <input
                  onChange={e => handleSearchChange(e)}
                  type="text"
                  name="search"
               />
               <button onClick={e => search(e)}>search</button>
            </div>

            <div className="display">
               {data &&
                  data.map((item, index) => (
                     <ul
                        key={index}
                        style={{
                           order: 'none',
                        }}
                     >
                        <li>name: </li>
                        <li>{item.name}</li>
                        <li>price: </li>
                        <li>{item.price}</li>
                     </ul>
                  ))}
            </div>
         </div>
      </section>
   );
};

export default Meal;
