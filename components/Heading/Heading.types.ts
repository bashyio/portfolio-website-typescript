import { AosSupported } from '../../global/types';

export interface HeadingProps extends AosSupported {}

export interface SizedHeadingProps extends HeadingProps {
  size: number | string;
  color: string;
}
