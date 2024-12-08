import { SignIn } from "@clerk/nextjs";
import type { NextPage } from 'next';

const SignInPage: NextPage = () => {
  return (
    <div>
      <div className="flex justify-center py-24">
        <SignIn routing="path" path="/sign-in" />
      </div>
    </div>
  );
};

export default SignInPage;