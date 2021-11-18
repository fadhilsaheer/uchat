import { createState } from '@hookstate/core';
import { Socket } from 'socket.io-client';

export const socketState = createState<null | Socket>(null);