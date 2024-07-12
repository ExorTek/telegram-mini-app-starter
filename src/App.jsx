import '@styles/global.scss';

function App() {
  const handleClick = () => {
    const element = document.createElement('div');
    element.textContent = '+2';
    element.style.position = 'absolute';
    element.style.top = '30%';
    element.style.left = '50%';
    element.style.transform = 'translate(-50%, -50%)';
    element.style.fontSize = '3rem';
    element.style.color = 'white';
    element.style.opacity = '1';
    element.style.transition = 'all 0.6s';
    element.style.cursor = 'default';
    element.style.userSelect = 'none';
    document.body.appendChild(element);
    setTimeout(() => {
      element.style.top = '0%';
      element.style.opacity = '0';
    }, 100);
    setTimeout(() => {
      element.remove();
    }, 600);
  };

  return (
    <div className={'w-screen h-screen flex flex-col items-center justify-center mx-auto relative'}>
      <img
        className={'object-cover w-full h-full'}
        src='/game-bg.jpg'
        alt='game-bg'
      />
      <button
        onClick={handleClick}
        className={'absolute left-1/2 transform -translate-x-1/2 bottom-32 text-2xl text-red-500 font-bold w-full max-w-16 h-full max-h-16 rounded-full hover:bg-blue-300 hover:bg-opacity-20'}>
        Click
      </button>
      <ul className={'absolute bottom-0 flex items-center justify-between w-full text-center'}>
        <li className={'border py-6 w-full'}>Menu</li>
        <li className={'border py-6 w-full'}>Menu</li>
        <li className={'border py-6 w-full'}>Menu</li>
        <li className={'border py-6 w-full'}>Menu</li>
      </ul>
    </div>
  );
}

export default App;
