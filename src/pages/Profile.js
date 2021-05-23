import React, { useState } from 'react';
import Man from '../assets/Man.jpg';
import { ListingCard } from '../components';
import { storage } from '../firebase';

export const Profile = () => {
  const allInputs = { imgUrl: '' };
  const [imageAsFile, setImageAsFile] = useState('');
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  console.error(imageAsFile);

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  const handleFireBaseUpload = (e) => {
    e.preventDefault();

    if (imageAsFile === '') {
      console.log(`not an image, the image file is a ${typeof imageAsFile}`);
      return;
    }

    const uploadTask = storage
      .ref(`/hostProfile/${imageAsFile.name}`)
      .put(imageAsFile);
    uploadTask.on(
      'state_changed',
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref('images')
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            console.log(fireBaseUrl);
            setImageAsUrl((prevObject) => ({
              ...prevObject,
              imgUrl: fireBaseUrl,
            }));
          });
      }
    );
  };

  return (
    <>
      <div className="row profileContainer">
        <div className="col d-flex justify-content-center align-items-center">
          <img src={Man} className="img-fluid userImage" />
        </div>
        <div className="col">
          <h1>Host Profile</h1>
          <h2>First Name: Foo</h2>
          <h2>Last Name: Bar</h2>
          <h2>Email Address: FooBar@email.com</h2>
          <h2>Phone Number: 123-456-7890</h2>
          <h2>Address: 123 Random Guy Ln, Houston, Tx 77777</h2>
          <h2>Number of Listings: 2</h2>
        </div>
        <div className="row mb-1 mt-2">
          <div className="col">
            <form onSubmit={handleFireBaseUpload}>
              <input type="file" onChange={handleImageAsFile} />
              <button>Upload to Firebase</button>
            </form>
          </div>
        </div>
        <img src={imageAsUrl.imgUrl} alt="uploaded image" />

        <div className="row mb-8 mt-2">
          <div className="col">
            <h3 className="text-center mt-5 mb-3">My Listings</h3>
            <ListingCard />
          </div>
        </div>
      </div>
    </>
  );
};
