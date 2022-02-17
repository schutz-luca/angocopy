/**
 * IMPORTS
 */
import { useEffect, useState } from "react";
import { MdStar, MdStarOutline } from "react-icons/md";
import { IRatingProps } from "./index.d";
import { $RatingContainer } from "./styles";

/**
 * I am only view rating component
 */
const Rating = (props: IRatingProps) => {

    const { rate } = props;
    const emptyStars=[MdStarOutline, MdStarOutline, MdStarOutline, MdStarOutline, MdStarOutline];
    const stars = emptyStars.fill(MdStar, 0, rate);

    return (
        <$RatingContainer>
            {stars.map((Star, index) => <Star key={index} />)}
        </$RatingContainer>
    )
}
export { Rating }