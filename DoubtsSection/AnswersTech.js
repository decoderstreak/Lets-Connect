import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { Svg, Rect, Defs, Pattern, Use } from 'react-native-svg'
import img1 from './dis.png';
import img2 from './like1.png';
import img3 from './image3.png';
import img4 from './image4.png';
// import UselessTextInput from './UselessTextInput';
class AnswersTech extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query:"",
            collection:[],
            // question:[
            //      {
            //          quest:'Q: Hey cleo! Can you clarity my doubt related to react native..? I was confused what to choose in developing components whether Functional or class components...?'
            //      }
            // ]
            // ,
            // data: [
            //     {
            //         index: 0,
            //         num: 19,
            //         name: 'Cleo Anderson',
            //         info: 'public class SimpleMinds extends JFrame implements ActionListener{JButton b1, b2;JTextField t1;SimpleMinds(){setBounds(400, 200, 1200, 500);getContentPane().setBackground(Color.WHITE);setLayout(null);ImageIcon i1 = new ImageIcon(ClassLoader.getSystemResource("simple/minds/icons/login.jpeg"));JLabel l1 = new JLabel(i1);l1.setBounds(0, 0, 600, 500);add(l1);public class SimpleMinds extends JFrame implements ActionListener{JButton b1, b2;JTextField t1;SimpleMinds(){setBounds(400, 200, 1200, 500);getContentPane().setBackground(Color.WHITE);setLayout(null);ImageIcon i1 = new ImageIcon(ClassLoader.getSystemResource("simple/minds/icons/login.jpeg"));JLabel l1 = new JLabel(i1);l1.setBounds(0, 0, 600, 500);add(l1);  '
            //     },
            //     {
            //         index: 1,
            //         num: 9,
            //         name: 'Cleofuydtdct',
            //         info: 'public class SimpleMinds extends JFrame implements ActionListener{JButton b1, b2;JTextField t1;SimpleMinds(){setBounds(400, 200, 1200, 500);getContentPane().setBackground(Color.WHITE);setLayout(null);ImageIcon i1 = new ImageIcon(ClassLoader.getSystemResource("simple/minds/icons/login.jpeg"));JLabel l1 = new JLabel(i1);l1.setBounds(0, 0, 600, 500);add(l1);public class SimpleMinds extends JFrame implements ActionListener{JButton b1, b2;JTextField t1;SimpleMinds(){setBounds(400, 200, 1200, 500);getContentPane().setBackground(Color.WHITE);setLayout(null);ImageIcon i1 = new ImageIcon(ClassLoader.getSystemResource("simple/minds/icons/login.jpeg"));JLabel l1 = new JLabel(i1);l1.setBounds(0, 0, 600, 500);add(l1);  '
            //     }
            // ],
            // List: []
        }
    }
    componentDidMount=()=>{
        this.state.query=this.props.route.params.params.question.question
        this.state.collection=this.props.route.params.params.answers
        this.setState({
            query:this.state.query
        })
    }
    render() {
console.log('props in class',this.state.collection);
        return (
            <ScrollView>
                <View style={{  backgroundColor: 'white' }}>
                    <View style={{margin:20}}>
                    <View 
                    // style={{ 
                    //     margin:20,
                    //     // marginTop: 113, marginLeft: 10 
                    // }}
                    >
                        {/* {
                            this.state.question.map((j)=>{
                                return( */}
                                    <Text style={{ fontSize: 14, color: '#9A8B8B' }}>Q:{this.state.query}</Text>
                                {/* )
                            })
                        } */}
                       
                    </View>
                    <View 
                    // style={{ marginTop: 8, marginLeft: 10, height: 195, width: 280, height: 195 }}
                    >
                        <Image source={img1}></Image>
                    </View>

                    <View 
                    // style={{ width: 383, height: 490 }}
                    >
                        {
                            this.state.collection.map((i,u) => {
                                console.log('i is././././',i);
                                return (
                                    <View key={u}>
                                        <View>
                                            <Text style={{ color: '#3F414E'
                                            // , marginTop: 18, marginLeft: 10 
                                            }}>Answer:-</Text>
                                        </View>
                                        <View 
                                        style={{ marginTop: 1, marginLeft: 233 }}
                                        >
                                            <Text style={{ color: '#116FAF', fontSize: 11 }}>{i.comments.length}</Text>
                                            <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: 'white' }}>
                                                <Image source={img2} style={{ marginTop: -22, marginLeft: 15 }}></Image>
                                            </TouchableOpacity>
                                            <View style={{ marginLeft: 11, marginTop: -33, marginLeft: 49 }}>
                                                <Text style={{ color: '#116FAF', fontSize: 11 }}>{i.name}</Text>
                                                <View style={{ marginLeft: 70, marginTop: -20 }}>
                                                    <Image source={img3} style={{ width: 25, height: 25, borderRadius: 21 }}></Image>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: 383, height: 72, marginLeft: 20, marginTop: 10 }}>
                                            <Text>{i.answer}</Text>
                                        </View>
                                        <View style={{ width: 370, height: 287, backgroundColor: '#E5F2FC', borderRadius: 10, marginLeft: 12 }}>

                                            <View>
                                                <Text style={{marginTop:20,margin:10,justifyContent:'center'}}>{i.info}</Text>
                                            </View>
                                        </View>

                                        <View>
                                            <TextInput style={{ color: 'black', borderBottomWidth: 1, borderBottomColor: '#116FAF', width: 366, marginLeft: 10, marginTop: 10 }} placeholder="Type your comment :"
                                                placeholderTextColor="#116FAF"
                                            >
                                            </TextInput>
                                            <TouchableOpacity>
                                                <Image source={img4} style={{ marginTop: -45, marginLeft: 335 }}></Image>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                )
                            })
                        }
                    </View>
                    </View>
                </View>
            </ScrollView>

        )
    }
}

export default AnswersTech