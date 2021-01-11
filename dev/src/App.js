import {DiagramClass} from './libs/index.js';
import data from './Data.js';

function App() {
  return (
      <div style={{width:1111,marginTop:33, marginLeft:'auto',marginRight:'auto'}}>

        <div style={{width: 222}}>
          <DiagramClass data={data}/>
        </div>

        <div>
        </div>

      </div>
  );
}

export default App;
