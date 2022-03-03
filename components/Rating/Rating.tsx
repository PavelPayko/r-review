import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import { KeyboardEvent, useEffect, useState } from 'react';

const star = <svg width="20" height="20" viewBox="0 0 20 20" fill="#7653FC" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9477 7.55686C19.816 7.13427 19.4568 6.83508 19.0335 6.79511L13.2601 6.24816L10.9784 0.673859C10.81 0.264321 10.4267 0 10 0C9.57337 0 9.18991 0.264321 9.02252 0.673859L6.74084 6.24816L0.966519 6.79511C0.543233 6.83587 0.184799 7.13507 0.0523506 7.55686C-0.0793348 7.97946 0.0422796 8.44298 0.362414 8.73596L4.72665 12.7293L3.43985 18.6434C3.34571 19.0782 3.50745 19.5279 3.85322 19.7887C4.03908 19.9296 4.25743 20 4.47655 20C4.66485 20 4.8533 19.9478 5.0216 19.8427L10 16.7364L14.9775 19.8427C15.3427 20.0704 15.8018 20.0495 16.1468 19.7887C16.4926 19.5279 16.6543 19.0782 16.5602 18.6434L15.2734 12.7293L19.6376 8.73596C19.9576 8.44298 20.0794 7.98041 19.9477 7.55686Z" />
</svg>;

export const Rating = ({ rating, isEdittable = false, setRating, className, ...props }: RatingProps): JSX.Element => {
    const [ratingArr, setRatingArr] = useState(new Array(5).fill(<></>));

    useEffect(() => {
        contructRating(rating);
    }, [rating]);

    const changeDisplay = (i: number) => {
        if (!isEdittable) {
            return;
        }
        contructRating(i);

    };

    const ratingHandler = (i: number) => {
        if (!isEdittable || !setRating) {
            return;
        }
        setRating(i);

    };
    const handleSpace = (event: KeyboardEvent<HTMLDivElement>, i: number) => {
        if (event.code == 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };

    const contructRating = (currentRating: number) => {
        const updatedArray = ratingArr.map((el, i) => (
            <div className={cn(styles.icon, {
                [styles.filled]: i < currentRating
            })}
                key={i}
                onMouseEnter={() => changeDisplay(i + 1)}
                onMouseLeave={() => changeDisplay(rating)}
                onClick={() => ratingHandler(i + 1)}
                tabIndex={isEdittable ? 0 : -1}
                onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => isEdittable && handleSpace(e, i + 1)}
            >
                {star}
            </div>
        ));

        setRatingArr(updatedArray);
    };

    const textStyle = cn(styles.text, className, {

    });

    return (
        <div>
            {ratingArr.map((el, i) => (
                <div key={i}>{el}</div>
            )
            )}
        </div>
    )
};

export default Rating;
