import '@styles/global.scss';
import WebApp from '@twa-dev/sdk';

function App() {
  return (
    <div className={'w-screen h-screen flex flex-col items-center justify-center mx-auto relative'}>
      <button
        className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}
        onClick={() => {
          WebApp.showAlert('Hello, I am an alert!');
        }}>
        Show Alert
      </button>
    </div>
  );
}

export default App;
