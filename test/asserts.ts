// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

export const assertEqual = <T, U extends T = T>(_actual?: U): void => {}
export const assertReturnType = <T>(_fn: (...args: any[]) => T): void => {}
