import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Icons from './components/icons';
import { useState } from 'react';


const App = () => {

  const [query, setQuery] = useState("")

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mt-3'>
            <button 
              type='button'
              data-bs-toggle="modal"
              data-bs-target="#modalIcons"
              className='btn btn-secondary'>
              Open modal
            </button>
          </div>
        </div>

      </div>

      <div className="modal fade" id="modalIcons" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Icons from <a className="text-dark" href='https://icons.getbootstrap.com/' target="_blank">Bootstrap</a></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input 
                className='mb-3 form-control'
                placeholder='Search'
                onChange={(e) => setQuery(e.target.value)}
              />
              <ul className='list-unstyled list row row-cols-8 '>
                {
                  Icons.filter(icon =>{
                    if (query ==='') {
                      return icon;
                    }
                    else if (icon.name.toLowerCase().includes(query.toLowerCase())) {
                      return icon;
                    }
                  }).map((icon) => (
                    
                    <li type="button" key={icon.id} className='me-3 mb-4 col' value={icon.name}>{icon.img}</li>
                    
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
