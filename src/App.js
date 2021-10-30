import './App.css';
import styled from 'styled-components';

const Tile = styled.div`
  width: 200px;
  height: 200px;
  float: left;
  margin: 0 10px 10px 0;
  cursor: pointer;

  &:before {
    position: absolute;
    content: '${(props) => props.index}';
    width: 200px;
    height: 200px;
    background: white;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    pointer-events: none;
  }

  &:hover:before {
    background: #ffc600;
    -webkit-transform: translate3d(0, 0, 50px);
    transform: translate3d(0, 0, 5px);
    box-shadow: 30px 30px 10px rgba(0, 0, 0, 0.5);
  }
`;

function App() {
  return (
    <div className='App'>
      <p>Hover over</p>
      <div id='Tiles'>
        {[...Array(4)].map((e, i) => {
          return [...Array(4)].map((se, j) => {
            return <Tile index={`${i}_${j}`} />;
          });
        })}
      </div>

      <div
        draggable
        style={{ width: '20px', height: '20px', backgroundColor: 'red' }}
      />
    </div>
  );
}

export default App;
