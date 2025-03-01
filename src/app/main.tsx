import { createRoot } from 'react-dom/client'
import "./styles/index.css"
import {Provider} from '@app/providers'

createRoot(document.getElementById('root')!).render(<Provider/>);
