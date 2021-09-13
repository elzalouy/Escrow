import Picker from 'react-native-document-picker';
import _try from '../middleware/try';

// upload file/s
module.exports=  async function(type, order){
  switch (order) {
    case 'file': {
      const res =
        type === 'pdf'
          ? await Picker.pick({type: [Picker.types.pdf]})
          : await Picker.pick({type: [Picker.types.images]});
      return res;
    }
    case 'files': {
      const res =
        type === 'pdf'
          ? await Picker.pick({type: [Picker.types.pdf]})
          : await Picker.pick({type: [Picker.types.images]});
      return res;
    }
    default:
      break;
  }
}
