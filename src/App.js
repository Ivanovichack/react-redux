import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import Contador from './Contador/Contador.jsx';
import incrementCounter from './action';
import store from './store';

import './App.css';

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  incrementCounter
}

const Contadorr = connect(mapStateToProps, mapDispatchToProps)(Contador);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Contadorr />
      </Provider>      
    </div>
  );
}

export default App;
