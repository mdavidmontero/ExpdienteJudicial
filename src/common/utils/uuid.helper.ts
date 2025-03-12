import { v4 as uuidv4 } from 'uuid';

export const generateUID = (): string => {
  return uuidv4();
};

export const generateIdRandom = (): string => {
  return (
    Math.random().toString(36).substring(2, 7) +
    Math.random().toString(36).substring(2, 7).toString()
  );
};
