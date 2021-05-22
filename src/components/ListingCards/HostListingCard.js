import React, { useState } from 'react';

export const HostListingCard = (props) => {
  const [classes, setClasses] = useState(
    'row mb-3 d-flex justify-content-center d-none'
  );

  const ToggleDisplay = () => {
    if (classes === 'row mb-3 d-flex justify-content-center d-none') {
      setClasses('row mb-3 d-flex justify-content-center');
    } else {
      setClasses('row mb-3 d-flex justify-content-center d-none');
    }
  };

  return (
    <div className="row">
      <div className="row">
        <div className="col d-flex justify-content-center mb-3 mt-3">
          <button onClick={ToggleDisplay} className="btn-primary">
            Listing
          </button>
        </div>
      </div>
      <div className={classes}>
        <div className="col-6 cardContainer">
          <div className="row">
            <div className="col mt-3">
              <img
                className="listingImage w-100"
                src={
                  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                }
              />
            </div>
            <div className="col mt-3">
              <p>Entire Home in Houston</p>
              <p>Exotic Getaway in Houston</p>
              <p>6 guests - 4 bedrooms - 3 beds - 1 bath</p>
              <p>Wifi - Free parking - Pets - Smoking</p>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center my-3">
                <a className="btn-warning" href="#">
                  Edit Listing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
