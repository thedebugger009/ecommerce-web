import { createContext, useContext, useState } from 'react'
const Toast = createContext()
export const ToastProvider = ({children}) => { const [message,setMessage]=useState(''); const show = text => { setMessage(text); setTimeout(()=>setMessage(''),2800) }; return <Toast.Provider value={show}>{children}{message && <div className="toast" role="status">{message}</div>}</Toast.Provider> }
export const useToast = () => useContext(Toast)
