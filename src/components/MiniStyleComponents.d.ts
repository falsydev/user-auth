import * as React from "react";
import { LucideProps } from "lucide-react";

export interface SpinnerProps extends LucideProps {
  $color?: string;
}

export const Spinner: React.FC<SpinnerProps>;
export const IconWrapper: any;
export const Overlay: any;
export const Prompt: any;
export const Alert: any;
export const Error: any;
