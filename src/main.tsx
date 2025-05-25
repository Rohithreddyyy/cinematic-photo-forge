
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.tsx'
import './index.css'

// IMPORTANT: Replace this with your actual publishable key (starts with pk_test_ or pk_live_)
const PUBLISHABLE_KEY = "pk_test_YOUR_KEY_HERE"; // User needs to replace this

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App />
  </ClerkProvider>
);
