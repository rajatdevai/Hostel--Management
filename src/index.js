import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <QueryClientProvider client={queryClient}> */}
    {/* <Router> */}
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <App />
          {/* <ToastContainer autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            position="top-center"
            theme="dark"
          /> Add ToastContainer here */}
        {/* </PersistGate> */}
      </Provider>
    {/* </Router> */}
  {/* </QueryClientProvider> */}
</React.StrictMode>
)
