import styled from 'styled-components';
import { useContext } from 'react';

import { media } from '@/styles/media';

import { ThemeContext } from '@/contexts/theme/context';

const StyledUl = styled.ul`
    ${({ theme }) =>
        theme === 'light'
            ? `list-style-image: url('/assets/list-dot.png');`
            : `list-style-image: url('/assets/list-dot-dark.png');`}
    list-style-position: inside;
    padding-left: 0;

    & > li {
        margin: var(--basic-spacing) 0;
        padding-left: 0;

        p {
            margin: .2em 0;
        }

        @media ${media.md} {
            padding-left: calc(var(--basic-spacing) / 6);
        }
    }
`;

export const UnorderedList = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    return <StyledUl theme={theme}>{children}</StyledUl>;
};
