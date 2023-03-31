import database from './firebase';
import {useState, useEffect} from "react";

function People() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const unsubscribe = database
        .collection("people")
        .onSnapshot((snapshot) => 
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );
    
        return () => {
            unsubscribe(); //cleanup
        }
    }, []);
    
    return people
}


// async function people() {
//     const peopleRef = database.collection('people');
//     const snapshot = await peopleRef.get();
//     const array = [];
//     snapshot.forEach(doc => {
//         array.push(doc.data())
//     });
//     console.log(array[0].name);

//     return array
// }


export default People;