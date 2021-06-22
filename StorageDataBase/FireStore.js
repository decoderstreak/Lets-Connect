import React,{Component} from 'react'
import { View, Text,ScrollView } from 'react-native'
import firestore from '@react-native-firebase/firestore';
export default class FireStore extends Component {
    constructor(props) {
        super(props)
        this.state = {
           Lists:[] 
        }
    } 
    componentDidMount=()=>{
        firestore()
        .collection('Mentors')
        .get()
        .then(querySnapshot => {
          console.log('Total users: ', querySnapshot.size);
          querySnapshot.forEach(documentSnapshot => {
            this.state.Lists=this.state.Lists.concat(documentSnapshot.data())
            {
                this.setState({
                    List:this.state.Lists
                })
            }
            console.log('list: ', this.state.Lists);
          });
        });
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                {/* <View style={{height: 256 }}> */}
                <ScrollView  style={{height:100}}
                  showsHorizontalScrollIndicator={false}>
                    
                {
                    Object.values(this.state.Lists).map((i)=>{
                        console.log('i boss',Object.values(i));
                        Object.values(i).map((j)=>{
                            return(
                                <View>
                                <Text>{j}</Text>

                                </View>
                            )
                        })
                            
                    })
                }
                </ScrollView>
                {/* </View> */}
            </View>
        )
    }
}
