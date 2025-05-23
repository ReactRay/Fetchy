import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { AppProvider } from './stateManager/Context';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

    <AppProvider>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>

    </AppProvider>


);
