import styled from 'styled-components';

export const Container = styled.main`
    max-width: 104.0rem;

    margin: 3.2rem auto;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

    border-radius: 3.0rem;
    padding: 4.0rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    -webkit-box-shadow: 2px 5px 24px -7px rgba(13, 13, 14, 0.48);
    -moz-box-shadow: 2px 5px 24px -7px rgba(13, 13, 14, 0.48);
    box-shadow: 2px 5px 24px -7px rgba(13, 13, 14, 0.48);

    @media (max-width: 425px) {
        padding: 3.4rem;
    }

    @media (max-width: 375px) {
        padding: 3.0rem;
        margin: 2.8rem auto;
    }

    @media (max-width: 320px) {
        padding: 2.0rem;
        margin: 2.2rem auto;
    }

    @media (max-width: 280px) {
        margin: 1.2rem auto;
    }

        img {
            border-radius: 1.0rem;
            object-fit: cover;
        }

        h1 {
            margin-top: 3.4rem;
            margin-bottom: 1.6rem;

            font-family: ${({ theme }) => theme.FONTS.ALTERNATIVE};
            font-size: 4.2rem;
            line-height: 6.2rem;
            font-weight: 500;

            color: ${({ theme }) => theme.COLORS.GRAY_800};

            @media (max-width: 430px) {
                font-size: 3.8rem;
                line-height: 5.2rem;
            }

            @media (max-width: 390px) {
                font-size: 3.2rem;
                line-height: 4.4rem;
            }

            @media (max-width: 320px) {
                font-size: 2.8rem;
                line-height: 3.8rem;
            }

            @media (max-width: 280px) {
                font-size: 2.4rem;
                line-height: 3.4rem;
            }

        }

        p {
            font-size: 1.8rem;
            line-height: 2.5rem;

            @media (max-width: 280px) {
                font-size: 1.6rem;
                line-height: 2.2rem;
            }
        }

        .time-preparation {
            margin-top: 5.0rem;

            h2 {
                font-size: 2.4rem;
                line-height: 3.2rem;
                font-weight: 600;

                color: ${({ theme }) => theme.COLORS.DARK_RED};
                margin-bottom: 1.6rem;

                @media (max-width: 280px) {
                    font-size: 2.2rem;
                    line-height: 3.0rem;
                }
            }

            ul {
                display: flex;
                flex-direction: column;
                gap: 1.6rem;
                margin-left: 1.8rem;

                li {
                    font-size: 1.6rem;
                    line-height: 2.2rem;

                    &::marker {
                        color: ${({ theme }) => theme.COLORS.DARK_RED};
                    }
                }
            }  
        }

        .ingredients {
            margin-top: 5.0rem;
            border-bottom: .1rem solid ${({ theme }) => theme.COLORS.GRAY_50};

            h2 {
                font-size: 3.0rem;
                font-family: ${({ theme }) => theme.FONTS.ALTERNATIVE};
                font-weight: 500;

                color: ${({ theme }) => theme.COLORS.ORANGE};

                margin-bottom: 1.6rem;

                @media (max-width: 280px) {
                    font-size: 2.2rem;
                    line-height: 3.0rem;
                }
            }
            
            ul {
                display: flex;
                flex-direction: column;
                gap: 1.6rem;
                margin-left: 1.8rem;
                padding-bottom: 4.0rem;

                li {
                    font-size: 1.6rem;
                    line-height: 2.2rem;

                    &::marker {
                        color: ${({ theme }) => theme.COLORS.ORANGE};
                    }
                }
            }
        }

        .instrucoes {
            margin-top: 5.0rem;

            h2 {
                font-size: 3.0rem;
                font-family: ${({ theme }) => theme.FONTS.ALTERNATIVE};
                font-weight: 500;

                color: ${({ theme }) => theme.COLORS.ORANGE};

                margin-bottom: 1.6rem;

                @media (max-width: 280px) {
                    font-size: 2.2rem;
                    line-height: 3.0rem;
                }
            }

            ol {
                display: flex;
                flex-direction: column;
                gap: 1.6rem;
                margin-left: 1.8rem;

                li {
                    font-size: 1.6rem;
                    line-height: 2.2rem;

                    &::marker {
                        color: ${({ theme }) => theme.COLORS.ORANGE};
                    }
                }
            }
        }  
`