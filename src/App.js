import './App.css';

const data = [
   { id: 'seatle', name: 'seatle', location: null, event: 'ajdsksfdasfda' },
   { id: 'seatle2', name: 'seatle2', location: null, event: 'ajdsksfdasfda' },
   { id: 'seatle3', name: 'seatle3', location: null, event: 'ajdsksfdasfda' },
   { id: 'seatle4', name: 'seatle4', location: null, event: 'ajdsksfdasfda' },
   { id: 'seatle5', name: 'seatle5', location: null, event: 'ajdsksfdasfda' },
   { id: 'seatle6', name: 'seatle6', location: null, event: 'ajdsksfdasfda' },
   { id: 'seatle7', name: 'seatle7', location: null, event: 'ajdsksfdasfda' },
];

function App() {
   return (
      <div className="App">
         <header>
            <div className="header-left">Home</div>
            <div className="header-right">
               <div className="header-right-text">@okadev</div>
               <div className="header-right-text">GitHub</div>
            </div>
         </header>
         <section>
            <div className="container">
               <div className="top">
                  <div className="top-tille">My JUL Tour</div>
                  <button
                     style={{
                        padding: '5px 8px',
                        backgroundColor: 'green',
                        border: '1px solid green',
                        borderRadius: '5px',
                        color: 'white',
                        fontWeight: '700',
                     }}
                  >
                     Add Group
                  </button>
               </div>
            </div>
            <div className="table-content">
               <table>
                  <thead>
                     <tr style={{ borderBottom: '2px solid gray' }}>
                        <th style={{ width: '20%' }}>Name</th>
                        <th style={{ width: '20%' }}>Location</th>
                        <th style={{ width: '40%' }}>Events</th>
                        <th style={{ width: '20%' }}>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {data.map(item => (
                        <tr
                           style={{ borderBottom: '2px solid gray' }}
                           key={item.id}
                        >
                           <td>{item.name}</td>
                           <td>{item.location}</td>
                           <td>{item.event}</td>
                           <td>
                              <div className="action">
                                 <button
                                    style={{
                                       padding: '5px 8px',
                                       backgroundColor: 'blue',
                                       border: '1px solid blue',
                                       borderRadius: '5px',
                                       color: 'white',
                                       fontWeight: '700',
                                    }}
                                 >
                                    Edit
                                 </button>
                                 <button
                                    style={{
                                       padding: '5px 8px',
                                       backgroundColor: 'red',
                                       border: '1px solid red',
                                       borderRadius: '5px',
                                       color: 'white',
                                       fontWeight: '700',
                                    }}
                                 >
                                    Delete
                                 </button>
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </section>
      </div>
   );
}

export default App;
