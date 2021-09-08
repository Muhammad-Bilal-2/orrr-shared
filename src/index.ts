import { Login } from "./pages/login/Login";
import { CenteredSpinner, ButtonSpinner } from "./Spinner";
import {
  IsPhoneProvider,
  useIsPhoneContext,
} from "./isPhoneContext/isPhoneContext";
import { ModalOverlay } from "./Overlays/ModalOverlay";
import { NativeOverlay } from "./Overlays/NativeOverlay";
import { AlertWrapped } from "./Alerts/AlertWrapped";
import {
  NumberBoolToText,
  StringToShortDate,
  StringOrDefault,
  NumberOrDefault,
} from "./utilities/TextExtensions";
import { useOnce } from "./utilities/UseOnce";
import {
  notEmpty,
  isNotNull,
  GetToday,
  groupBy,
  extract,
  OrderBy,
  checkValuesData,
  nameOf,
  getUniqueBy,
} from "./utilities/utilities";
import { LoadingButton } from "./Buttons/LoadingButton";
import { SimpleCard } from "./Cards/SimpleCard";
import { PasswordInput } from "./Inputs/PasswordInput";
import { BackButton } from "./Buttons/BackButton";
import { ButtonLoadingSpinner } from "./Buttons/ButtonSpinner";
export {
  CenteredSpinner,
  IsPhoneProvider,
  useIsPhoneContext,
  ButtonSpinner,
  AlertWrapped,
  ModalOverlay,
  NativeOverlay,
  NumberBoolToText,
  StringToShortDate,
  StringOrDefault,
  NumberOrDefault,
  notEmpty,
  isNotNull,
  GetToday,
  groupBy,
  extract,
  OrderBy,
  checkValuesData,
  nameOf,
  getUniqueBy,
  useOnce,
  Login,
  LoadingButton,
  SimpleCard,
  PasswordInput,
  BackButton,
  ButtonLoadingSpinner,
};
