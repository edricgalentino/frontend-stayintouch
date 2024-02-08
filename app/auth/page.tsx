import AuthForm from "@/components/Auth/AuthForm";

export const metadata = {
  title: "Auth",
};

const Auth = () => {
  return (
    <div className="bg-blue-200/60 w-full h-screen flex justify-center items-center">
      <AuthForm />
    </div>
  );
};

export default Auth;
