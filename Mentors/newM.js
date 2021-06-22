// // import Firebase from "./lib/firebase";
// import   React, { useEffect, useState } from "react";
// import {Text,View,ScrollView} from 'react-native'
// import firestore from '@react-native-firebase/firestore';
// import {Card} from 'react-native-elements'






// function App() {
//   const [blogs,setBlogs]=useState([])
//   const fetchBlogs=async()=>{
//     const response=firestore().collection('Mentors');
//     const data=await response.get();
//     data.docs.forEach(item=>{
//      setBlogs([...blogs,item.data()])
//     })
//   }
//   useEffect(() => {
//     fetchBlogs();
//   }, [])
//   return (
//       <ScrollView>
//     <View>
//       {
//         blogs && blogs.map(blog=>{
//           return(
//             <Card>
//               <Text>{blog.Email}</Text>
//               <Text>{blog.Edu}</Text>
//               <Text>{blog.Name}</Text>
//               <Text>{blog.Name}</Text>
//             </Card>
//           )
//         })
//       }
//     </View>
//     </ScrollView>
//   );
// }

// export default App;
// import React, { useEffect } from 'react';
// import firestore from '@react-native-firebase/firestore';

import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { exportDefaultDeclaration } from '@babel/types';

function Users() {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users


  useEffect(() => {
    const subscriber = firestore()
      .collection('Mentors')
      .onSnapshot(querySnapshot => {
        const users = [];
  
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setUsers(users);
        setLoading(false);
      });
  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => (
        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>User ID: {item.id}</Text>
          <Text>User Name: {item.Name}</Text>
        </View>
      )}
    />
  );
}
export default Users;