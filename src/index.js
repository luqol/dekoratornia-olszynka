import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider 
      reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} 
      scriptProps={{ async: true, defer: true }}
    >
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);
