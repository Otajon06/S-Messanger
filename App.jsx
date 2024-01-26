// import React, {useEffect, useState, useRef} from 'react';
// import './App.css';
// import {useAuthState} from 'react-firebase-hooks/auth';
// import {useCollection} from 'react-firebase-hooks/firestore';
// import {  provider } from './firebaseConfig';
// import {collection, orderBy, limit, query, addDoc, serverTimestamp} from 'firebase/firestore';
// import { signInWithPopup, signOut } from 'firebase/auth';
// import { auth, db,} from './firebaseConfig';
// // import firebase from 'firebase/firestore'
// import 'firebase';


// function App() {
//   const [user] = useAuthState('auth')

//   const messageRef = collection(db, 'message')
//   const queryRef = query(messageRef, orderBy('createdAt', 'desc'), limit(20));

// // console.log(messages.data())

//   const [formValue, setFormValue] = useState('');

//   const scrollTo = useRef(null);
  
//   const sendMassage = async (e) => {
//     e.preventDefault();
//     if(!user || !formValue) return

//     const poyload = {
//       text: formValue,
//       createdAt: serverTimestamp(),
//       uid: user.uid,
//       // photoUrl: user.photoUrl,
//     };
//     await addDoc(messageRef, poyload);
    
//     // console.log(poyload)
//     setFormValue('')
//   };

//   const [message, setMessage] = useState([])
  
//   useEffect( () => {
//     scrollTo.current.scrollIntoView({behavior: 'smooth'});
//   async function fetchDat(){
//     try {
//     const messagedata = await db.collection('message').get();
//     const messageG = messagedata.docs.map((doc) => ({ id: doc.id,...doc.data()}) )
//     setMessage(messageG);
//     } catch (error) {
//       console.log(error);
//     }
//   } 
//   fetchDat();
//   }, [])
  
//   const googleSignIn = () => {
//     return signInWithPopup(auth, provider)
//   };
  
//   const LogOut = () => {
//     signOut(auth)
//   }
//   console.log(message)
//   return (
//     <div className="App">
//       <h1>aaa</h1>
//     <h1 className=''>Messages</h1>      
//     <div className='messages'>
//       <div ref={scrollTo}></div>
//       {message && message.map((msg) => <ChatMessage key={msg.id} message={msg.data()} />)}  
//     </div>
//     <form >
//       <input type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
//       <button onClick={(e) => sendMassage(e)} >Send</button>
//     </form>
//       <div className='buttons'>
//         {!user ? <button className='Login' onClick={(e) => googleSignIn(e)}>Login With Google</button> :
//          <button className='Logout' onClick={(e) => LogOut(e)}>Log out</button>}
//       </div>
//     </div>
//   );
// }

// function ChatMessage(props) {
//   // if(!auth.currentUser) return
//   const {text,uid, photoUrl} = props.message

//   const className = uid === auth.currentUser.uid ? 'sent':'recived'

//   return( 
//     <div className={className}>
//       <img src={photoUrl} alt='UserPhoto'/>
//       <p>{text}</p>
//     </div>
//   )
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};



const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'product'));
        const productData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product}</strong>
          </li>
        ))}
      </ul>
       {/* {message && message.map((msg) => <ChatMessage key={msg.id} message={msg.data()} />)}   */}

    </div>
  );
};

export default App;