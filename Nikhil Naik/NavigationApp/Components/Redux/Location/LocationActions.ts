import { editLocationType } from "../../Types/Types";
import { EDIT_LOCATION } from "./LocationTypes";

export const editLocation = (val: editLocationType) => {
  return {
    type: EDIT_LOCATION,
    payload: val,
  };
};
