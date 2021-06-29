import Tra1 from '../audios/Violin2.mp3'
import Tra2 from '../audios/Violin4.mp3'
import Tra3 from '../audios/Violin3.mp3'

const songs = [
    {
      title: 'Violin Theme',
   
      artwork: require('./images/6.jpg'),
      url: Tra1,
      duration: 2 * 60 ,
      id: '1',
    },
    {
      title: 'Violin Rockz',
     
      artwork: require('./images/7.jpg'),
      url: Tra2,
      duration: 2 * 60,
      id: '2',
    },
    {
      title: 'Deep Relaxation',
 
      artwork: require('./images/9.jpg'),
      url: Tra3,
      duration: 2 * 60,
      id: '3',
    },
    
  ];
  
  export default songs;