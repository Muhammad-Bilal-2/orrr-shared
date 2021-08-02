import { CenteredSpinner, ButtonSpinner } from "./Spinner";
import { IsPhoneProvider, useIsPhoneContext } from "./isPhoneContext/isPhoneContext";
import { ModalOverlay } from "./Overlays/ModalOverlay";
import { NativeOverlay } from "./Overlays/NativeOverlay";
import { AlertWrapped } from "./Alerts/AlertWrapped";
import { getApolloClient } from "./utilities/apollo.client";
import { NumberBoolToText, StringToShortDate, StringOrDefault, NumberOrDefault } from "./utilities/TextExtensions";
import { notEmpty, isNotNull, GetToday, groupBy, extract, OrderBy, checkValuesData, nameOf, getUniqueBy } from "./utilities/utilities";
export { CenteredSpinner, IsPhoneProvider, useIsPhoneContext, ButtonSpinner, AlertWrapped, ModalOverlay, NativeOverlay, getApolloClient, NumberBoolToText, StringToShortDate, StringOrDefault, NumberOrDefault, notEmpty, isNotNull, GetToday, groupBy, extract, OrderBy, checkValuesData, nameOf, getUniqueBy, };
