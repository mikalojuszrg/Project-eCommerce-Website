import { useMutation } from "react-query";
import { createUser, loginUser } from "../api/user";

export const useCreateUser = () => {
  return useMutation(createUser);
};

export const useLoginUser = () => {
  return useMutation(loginUser);
};
