import BaseDialog from "@/components/Dialog/BaseDialog";
import { ReactElement } from "react";
import RootLayout from "@/app/layout";
import FormLabel from "@/components/Form/FormLabel";
import FormTextInput from "@/components/Form/FormTextInput";
import { PrimaryButton } from "@/components/Button/PrimaryButton";
import ActionButton from "@/components/Button/ActionButton";
import { FaGoogle } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="flex flex-col bg-dark-1 w-full h-screen items-center justify-center">
      <div className="bg-dark-2 rounded-lg p-4 min-w-fit w-fit h-fit shadow-lg">
        <h2 className="font-bold text-slate-300 mb-4">Login</h2>
        <div className="mb-4">
          <ActionButton
            icon={<FaGoogle className="mx-2" />}
            className="w-full bg-primary justify-center dark:text-light-2 "
            dataTestId="login-with-google"
          >
            Login with Google
          </ActionButton>
        </div>
        <hr className="mb-4" />
        <form className="space-y-2">
          <FormLabel htmlFor="emailOrUsername">Email</FormLabel>
          <input
            className="appearance-none"
            type="email"
            id="emailOrUsername"
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <input
            className="appearance-none mb-4"
            id="password"
            type="password"
          />
          <ActionButton
            icon={<FaSignInAlt className="mx-2" />}
            className="w-full bg-primary justify-center "
            dataTestId="login-with-credentials"
          >
            Sign In
          </ActionButton>
        </form>
      </div>
    </div>
  );
}

// LoginPage.getLayout = function getLayout() {
//   return (
//     <RootLayout>
//       <LoginPage />
//     </RootLayout>
//   );
// };
