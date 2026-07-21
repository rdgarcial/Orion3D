import {useContext} from 'react';
import {OrionContext} from '../providers/OrionProvider';
export const useOrion=()=>useContext(OrionContext);