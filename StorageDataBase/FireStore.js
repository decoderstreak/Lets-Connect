import React,{Component} from 'react'
import { View, Text,ScrollView,TouchableOpacity,Image } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import photo from '../Home/Sir.png'
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
          querySnapshot.forEach(documentSnapshot => {
            this.state.Lists=this.state.Lists.concat(documentSnapshot.data())
            {
                this.setState({
                    Lists:this.state.Lists
                })
            }
          });
        });
    }
    render() {
        console.log(this.state.Lists,'props broo');
        return (
            <View>
                <ScrollView  horizontal={true}
                style={{height:500}}
                  showsHorizontalScrollIndicator={false}>   
                {
                    Object.values(this.state.Lists).map((list)=>{
                        console.log('i boss',list);
                        return(
                            <View>     
                          <TouchableOpacity key={list.id} onPress={()=>this.props.navigation.navigate('Eachmentor',list)}>
                         <View style={{ height: 190, width: 152, borderWidth: 2, borderColor: '#BEBEC3', borderRadius: 9,margin:10}}>
                           <Image
                             source={photo}
                             style={{ width: 149, height: 126, borderRadius: 5, marginLeft: -0.5 }}>
                           </Image>
                           <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 14 }}>{list.Name}</Text>
                           <Text style={{ textAlign: 'center', fontSize: 12, justifyContent:'center',color:'#9B9B9B'}}>
                           {list.Status}
                           </Text>
                         </View>
                         </TouchableOpacity>
                            </View>
                        ) 
                    })
                }
                </ScrollView>
            </View>
        )
    }
}
