import paths from '../../paths';
import storage from './storage';
import error from './error';
import files from './files';
import identifier from './identifier';
import math from './math';
import cache from './cache';

export const CacheHandler = cache;
export const Calculator = math;
export const ErrorHandler = error;
export const FileHandler = files;
export const Identifier = identifier;
export const StorageHandler = storage;
export const PathHandler = paths;
