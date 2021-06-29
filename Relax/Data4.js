import Tra1 from '../audios/Flute2.mp3'
import Tra2 from '../audios/flute1.mp3'
import Tra3 from '../audios/Flute3.mp3'


const songs = [
    {
      title: 'Radhae Flute',
   
      artwork: require('./images/3.jpg'),
      url: Tra1,
      duration: 2 * 60 + 53,
      id: '1',
    },
    {
      title: 'Relaxing Flute',
   
      artwork: require('./images/1.jpg'),
      url: Tra2,
      duration: 2 * 60,
      id: '2',
    },
    {
      title: 'Relax brain',
 
      artwork: require('./images/5.jpg'),
      url: Tra3,
      duration: 2 * 60,
      id: '3',
    },
   
  ];
  
  export default songs;