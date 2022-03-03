import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEdittable?: boolean;
    rating: number;
    setRating?: (rating: number) => void

}