import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [namaPengirim, setNamaPengirim] = useState('')
  const [pesanPengirim, setPesanPengirim] = useState('')
  const [pesanList,setPesanList] = useState ([])

  
  
  const addToList = () => {
    axios.post("https://mern-lagi.herokuapp.com/insert",{
      namaPengirim: namaPengirim,
      pesanPengirim: pesanPengirim,
    });
  }
  useEffect(() => {
    axios.get("https://mern-lagi.herokuapp.com/read").then((response) => {
      setPesanList(response.data)
    })
    }, []);

  return (
    <div className="App">
     
     <div className="container">
       <form>
          <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
              <input className="form-control" type="text" placeholder="Masukkan Pesan"
             onChange={(event) => {
               setPesanPengirim(event.target.value)
              }}
              />
          </div>

          <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
              <input className="form-control" type="text" placeholder="Masukkan Nama"
              onChange={(event) => {
                setNamaPengirim(event.target.value)
               }}
              />
          </div>
        
       </form>

      </div>
     <button className="btn btn-warning" 
     onClick={addToList}
     > Submit </button>
     <div className="container">
               <h1> Pesan </h1>
          {pesanList.map ((val, key) => {
            return(
              <div key={key}>
                  
                  <div className="container darker"> 
                  {val.namaPengirim}
                    <div className ="pesanpengirim"> 
                    <p>{val.pesanPengirim}</p>  
                    </div>
                    
                  </div>
              </div>
            )
          }
          )}
     </div>
    </div>
  );
}

export default App;
