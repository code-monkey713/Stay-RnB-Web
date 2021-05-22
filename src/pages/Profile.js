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
    // // Create the file metadata
    // const metadata = {
    //   contentType: 'image/jpeg',
    // };

    // // Upload file and metadata to the object 'images/mountains.jpg'
    // const uploadTask = storage
    //   .child('profile-images/' + file.name)
    //   .put(file, metadata);

    // // Listen for state changes, errors, and completion of the upload.
    // uploadTask.on(
    //   firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    //   (snapshot) => {
    //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //     let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     console.log('Upload is ' + progress + '% done');
    //     switch (snapshot.state) {
    //       case firebase.storage.TaskState.PAUSED: // or 'paused'
    //         console.log('Upload is paused');
    //         break;
    //       case firebase.storage.TaskState.RUNNING: // or 'running'
    //         console.log('Upload is running');
    //         break;
    //     }
    //   },
    //   (error) => {
    //     // A full list of error codes is available at
    //     // https://firebase.google.com/docs/storage/web/handle-errors
    //     switch (error.code) {
    //       case 'storage/unauthorized':
    //         // User doesn't have permission to access the object
    //         break;
    //       case 'storage/canceled':
    //         // User canceled the upload
    //         break;

    //       // ...

    //       case 'storage/unknown':
    //         // Unknown error occurred, inspect error.serverResponse
    //         break;
    //     }
    //   },
    //   () => {
    //     // Upload completed successfully, now we can get the download URL
    //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //       console.log('File location: ', downloadURL);
    //     });
    //   }
    // );

    console.log('start of upload');

    if (imageAsFile === '') {
      console.log(`not an image, the image file is a ${typeof imageAsFile}`);
      return;
    }
    console.log('we begin uploading to the firebase server');

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
