import React from "react";
import SignInForm from "./components/sign-in-form";

function SignInPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-50 px-4 py-12 sm:px-6 lg:px-8">
      <SignInForm />
    </div>
  );
}

export default SignInPage;
