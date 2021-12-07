import { Login } from "./pages/login/Login";
import { LoginForm as LoginForm2 } from "./pages/login/LoginForm";
import { CenteredSpinner, ButtonSpinner } from "./Spinner";
import { IsPhoneProvider, useIsPhoneContext } from "./isPhoneContext/isPhoneContext";
import { ModalOverlay } from "./Overlays/ModalOverlay";
import { NativeOverlay } from "./Overlays/NativeOverlay";
import { AlertWrapped } from "./Alerts/AlertWrapped";
import { NumberBoolToText, StringToShortDate, StringOrDefault, NumberOrDefault } from "./utilities/TextExtensions";
import { useOnce } from "./utilities/UseOnce";
import { notEmpty, isNotNull, GetToday, groupBy, extract, OrderBy, checkValuesData, nameOf, getUniqueBy } from "./utilities/utilities";
import { LoadingButton } from "./Buttons/LoadingButton";
import { SimpleCard } from "./Cards/SimpleCard";
import { PasswordInput } from "./Inputs/PasswordInput";
import { BackButton } from "./Buttons/BackButton";
import { ButtonLoadingSpinner } from "./Buttons/ButtonSpinner";
import { ModalNoHeaderOverlay } from "./Overlays/ModalNoHeaderOverlay";
import { ModalSuccess } from "./Overlays/ModalSuccess";
import { ForgotUsernameModal } from "./Overlays/ForgotUsernameModal";
import { ForgotPasswordModal } from "./Overlays/ForgotPasswordModal";
import { Dropdowns } from "./DropDowns/DropDowns";
import { Tabs } from "./Tabs/Tabs";
import { getDate } from "./utilities/date";
import { getPropertyName } from "./utilities/object.properties";
import useLocalStorage from "./utilities/useLocalStorage";
import { AuthenticationProvider } from "./authentication/AuthenticationProvider";
import { IUnauthorizedRoutes } from "./authentication/unauthorized/unauthorizedRoutes.interfaces";
import { AuthorizationRoles } from "./authentication/AuthorizationRoles";
import { IUnauthorizedRoute } from "./authentication/unauthorized/unauthorizedRoutes.interfaces";
import { Unauthorized } from "./authentication/unauthorized/Unauthorized";
import { LoginForm } from "./authentication/login/LoginForm";
import { ILogin } from "./authentication/login/Login";
import { AuthError } from "./authentication/Authentication";
export { CenteredSpinner, IsPhoneProvider, useIsPhoneContext, ButtonSpinner, AlertWrapped, ModalOverlay, NativeOverlay, ModalSuccess, ModalNoHeaderOverlay, NumberBoolToText, StringToShortDate, StringOrDefault, NumberOrDefault, notEmpty, isNotNull, GetToday, groupBy, extract, OrderBy, checkValuesData, nameOf, getUniqueBy, useOnce, useLocalStorage, Login, LoadingButton, SimpleCard, PasswordInput, BackButton, ButtonLoadingSpinner, ForgotUsernameModal, ForgotPasswordModal, Dropdowns, Tabs, getDate, getPropertyName, AuthenticationProvider, IUnauthorizedRoutes, IUnauthorizedRoute, AuthorizationRoles, Unauthorized, LoginForm, ILogin, AuthError, LoginForm2, };
