import React, { useRef } from "react";
import { db } from "../firebase" //imported from firebase.js
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { message } from "antd/lib";


const Home = () => {
    
    const messageRef = useRef();
    const numberRef = useRef();
    const docRef = collection(db, "messages");

    // write function
    const Write = async (e) => {
        e.preventDefault();

        let data = {
            message: messageRef.current.value,
            number: Number(numberRef.current.value)

        }

        try{
            addDoc(docRef, data)
        } catch(e){
            console.log(e);
        }
    }

    // read function
    const Read = async (e) => {
        e.preventDefault();
        const querySnapshot = await getDocs(collection(db, "messages"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data().message, Number(doc.data().number));
            return (doc.data().message, Number(doc.data().number));
        });
    }

    


    return(
        <div style={{margin: "50px"}}>
            <form onSubmit={Write}>
                <label>Type Here: </label>
                <input type="text" ref={messageRef}/>
                <input type="number" ref={numberRef}/>
                <button type="submit">ENTER!</button>
            </form>

            <form onSubmit={Read}>
                <button type="submit">read!</button>
            </form>

            <div>
              
            </div>

        </div>

        
    )
}

export default Home;