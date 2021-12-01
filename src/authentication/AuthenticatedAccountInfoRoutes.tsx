// import React, { useCallback, useEffect, useState } from "react";
// // import { AccountContext, IAccountContext } from "../contexts/AccountContext";
// // import { buildAccountInfo } from "../contexts/account/user";
// // import { buildAccountInfo as buildAccountInfoo } from "../contextss/account/userr";
// import { CenteredSpinner } from "../Spinner/index";
// // import GlobalError from "../globalError/globalError";
// // import { ApolloProvider } from "@apollo/client";
// // import { getApolloClient } from "../utilities/apollo.client";
// import { IAuthUser, IUserInfo } from "./types";
// // import {
// //   AccountContext as AccountContextt,
// //   IAccountContext as IAccountContextt,
// // } from "../contextss/AccountContextt";
// interface IAuthenticatedAccountInfoRoutesProps {
//   userInformation: IAuthUser;
//   logout: () => void;
//   AuthenticatedRoutesList: React.FC;
//   AccountContext: any;
//   buildAccountInfo: any;
// }

// export const AuthenticatedAccountInfoRoutes: React.FC<IAuthenticatedAccountInfoRoutesProps> =
//   ({
//     userInformation,
//     logout,
//     AuthenticatedRoutesList,
//     AccountContext,
//     buildAccountInfo,
//   }) => {
//     const [error, setError] = useState<Error | undefined>(undefined);
//     const [user, setUser] = useState<IUserInfo | undefined>(undefined);

//     const logoutUser = useCallback(() => {
//       setUser(undefined);
//       logout();
//     }, [logout]);

//     const updateUser = useCallback(() => {
//       buildAccountInfo(userInformation, logoutUser).then((x: any) => {
//         if (x instanceof Error) {
//           setError(x);
//         } else {
//           setUser(x);
//         }
//       });
//     }, [userInformation, logoutUser]);

//     useEffect(() => {
//       buildAccountInfo(userInformation, logoutUser).then((x: any) => {
//         if (x instanceof Error) {
//           setError(x);
//         } else {
//           setUser(x);
//         }
//       });
//     }, [userInformation, logoutUser]);

//     const getAuthenticatedApp = () => {
//       return (
//         <AccountContext.Provider
//           value={{ user: user as IUserInfo, updateUser } as any}
//         >
//           <AuthenticatedRoutesList />
//         </AccountContext.Provider>
//       );
//     };

//     // const getAuthenticatedAppp = () => {
//     //   return (
//     //     <AccountContextt.Provider
//     //       value={{ user: user as IUserInfoo, updateUser } as IAccountContextt}
//     //     >
//     //       {/* <ApolloProvider client={getApolloClient(url)}> */}
//     //       <AuthenticatedRoutesList />
//     //       {/* </ApolloProvider> */}
//     //     </AccountContextt.Provider>
//     //   );
//     // };
//     return (
//       <>
//         <React.StrictMode>
//           <CenteredSpinner
//             size="lg"
//             loading={user === undefined ? true : false}
//           >
//             {error || (user && Object.keys(user).length === 0) ? (
//               // <GlobalError
//               //   errorMessage="An Error has occurred"
//               //   errorBody="Please contact support to use this website"
//               // />
//               <h1>Error</h1>
//             ) : (
//               getAuthenticatedApp()
//             )}
//           </CenteredSpinner>
//         </React.StrictMode>
//       </>
//     );
//   };

export {};
