import './App.css';

function App() {
  return (
    <div className='App'>
      <p>Hover over</p>
      <div id='Tiles'>
        {[...Array(900)].map(() => {
          return <div class='tile' />;
        })}
      </div>
    </div>
  );
}

export default App;
