import styled from 'styled-components';

import { media } from '@/styles/media';

export const AnchorButton = styled.a`
    width: fit-content;
    padding: var(--basic-spacing);
    background-color: var(--headline-primary);
    border-radius: calc(var(--basic-spacing) / 2);
    font-family: var(--font-headline);
    font-size: .5em;
    color: hsla(var(--base-white), 100%);
    text-decoration: none;

    @media ${media.md} {
        padding: calc(var(--basic-spacing) / 2);
        margin-left: auto;
    }
`;
