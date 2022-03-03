import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode,
    size?: 's' | 'm' | 'l',
}