import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900/70">
      <button
        onClick={() => loginWithRedirect()}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 text-white cursor-pointer"
      >
        <span className="relative px-5 py-2.5">Login To View Weather App</span>
      </button>
    </div>
  );
};

export default Login;
