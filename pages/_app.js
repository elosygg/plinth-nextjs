import { SessionProvider, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
// COMPONENTS IMPORTATION
import Loader from "../component/loader";
// CONTEXTS IMPORTATION
import LocationProvider from "../context/LocationContext";
import UserProvider from "../context/UserContext";
// CSS IMPORTATION
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {

  return (
    <SessionProvider session={pageProps.session}>
      <UserProvider>
        <LocationProvider>
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </LocationProvider>
      </UserProvider>
    </SessionProvider>
  );
};

function Auth({ children }) {
  const router = useRouter()
  const { data: session, status, token } = useSession()
  const isUser = !!session?.user
  useEffect(() => {
    if (status === "loading") return // Do nothing while loading
    if (!isUser) router.push("/login") //Redirect to login
  }, [isUser, status])

  if (isUser) {
    return children
  };
  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    <Loader />
  )
};
