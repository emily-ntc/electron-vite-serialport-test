import { useState } from 'react'
import UpdateElectron from '@/components/update'
import logoVite from './assets/logo-vite.svg'
import logoElectron from './assets/logo-electron.svg'
import { ipcRenderer } from 'electron';
import './App.css'

function App() {
  // // Define the structure of a serial port
  // interface SerialPortInfo {
  //   path: string;
  //   manufacturer: string;
  //   serialNumber: string;
  //   vendorId: string;
  //   productId: string;
  // }
  const [count, setCount] = useState(0)
  // const [ports, setPorts] = useState<SerialPortInfo[]>([]);
  // const [error, setError] = useState<string | null>(null);

  // const fetchSerialPorts = async () => {
  //   try {
  //     setError(null); // Reset any previous error
  //     const availablePorts: SerialPortInfo[] = await ipcRenderer.invoke('list-serial-ports');
  //     setPorts(availablePorts);
  //   } catch (err) {
  //     setError((err as Error).message); // Handle errors
  //   }
  // };
  return (
    <div className='App'>
      <div className='logo-box'>
        <a href='https://github.com/electron-vite/electron-vite-react' target='_blank'>
          <img src={logoVite} className='logo vite' alt='Electron + Vite logo' />
          <img src={logoElectron} className='logo electron' alt='Electron + Vite logo' />
        </a>
      </div>
      <h1>Electron + Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <h1>Available Serial Ports</h1>
        <button onClick={fetchSerialPorts}>Fetch Serial Ports</button> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Electron + Vite logo to learn more
      </p>
      <div className='flex-center'>
        Place static files into the<code>/public</code> folder <img style={{ width: '5em' }} src='./node.svg' alt='Node logo' />
      </div>

      <UpdateElectron />
    </div>
  )
}

export default App