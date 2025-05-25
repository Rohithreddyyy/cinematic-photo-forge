
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';

const AuthButtons = () => {
  return (
    <>
      <SignedOut>
        <div className="flex space-x-4">
          <SignInButton fallbackRedirectUrl="/">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton fallbackRedirectUrl="/">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              Try Free
            </Button>
          </SignUpButton>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex items-center space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            Dashboard
          </Button>
          <UserButton 
            appearance={{
              elements: {
                avatarBox: "w-10 h-10"
              }
            }}
          />
        </div>
      </SignedIn>
    </>
  );
};

export default AuthButtons;
