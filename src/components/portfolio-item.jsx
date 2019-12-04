import React from "react";
import { styled } from "linaria/react";

import ForwardsArrow from "../assets/forwards-arrow";

const PortfolioPreview = ({ name, image, oneLiner, hasArrows = false }) => {
    const PortfolioPreviewLink = styled.a`
        height: max-content;

        p.name {
            margin-bottom: 2px;
            width: 100%;
            font-size: 1.08em;
            font-weight: 800;
            line-height: 1.7;
            color: var(--piglet);
            text-align: right;
            text-transform: uppercase;
            transition: transform 0.09s;
        }

        div.image-container {
            position: relative;

            img.image {
                display: block;
                width: 100%;
                height: calc(200px + 6.5vw);
                max-height: 287px;
                object-fit: cover;

                filter: contrast(92%);

                transition: transform 0.09s, box-shadow 0.09s, filter 0.09s;
            }

            svg {
                position: absolute;
                bottom: 15px;
                left: 15px;
                width: 22px;

                transition: transform 0.09s;
            }
        }

        p.copy {
            width: 100%;

            margin-top: 5px;
            line-height: 1.6;
        }

        &:hover,
        &.active {
            p.name {
                font-style: italic;
                transform: translate(0px, -5px);
            }

            div.image-container {
                img.image {
                    box-shadow: -0px 6px 0px -2px var(--piglet);
                    transform: translate(0px, -5px);
                    filter: contrast(92%) brightness(104%);
                }

                svg {
                    transform: translate(2px, -5px);

                    &:hover {
                        transform: translate(5px, -5px);
                    }
                }
            }
        }

        @media (max-width: 710px) {
            div.image-container img.image {
                height: calc(200px + 9.5vw);
            }
        }

        @media (--for-up-to-small-tablet) {
            div.image-container img.image {
                height: calc(200px + 7.5vw);
            }
        }

        @media (--for-up-to-mobile) {
            div.image-container img.image {
                height: calc(200px + 5vw);
            }
        }

        @media (max-width: 410px) {
            div.image-container img.image {
                height: calc(190px + 2vw);
            }
        }

        /* TODO: Offset on mobile */
    `;

    return (
        <PortfolioPreviewLink>
            <p className="name">{name}</p>
            <div className="image-container">
                {/* TODO: get lzy working */}
                <img className="image" src={image} alt={name} />
                {hasArrows && <ForwardsArrow />}
            </div>
            <p className="copy">{oneLiner}</p>
        </PortfolioPreviewLink>
    );
};

export default PortfolioPreview;
