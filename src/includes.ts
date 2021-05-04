// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
const includes = <T>(val: any, list: T[]): boolean => list.indexOf(val, 0) >= 0;

export { includes };
