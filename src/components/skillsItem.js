import styled from 'styled-components';

import { media } from '@/styles/media';

const SkillsItem = styled.div`
    width: 100%;
    padding: calc(var(--basic-spacing));
    margin: 0;
    margin-bottom: var(--basic-spacing);
    border-radius: calc(var(--basic-spacing) / 2);
    background-color: var(--color-secondary);

    h3 {
        margin-top: 0;
        color: var(--headline-secondary);
    }

    p {
        margin: .5em 0;
        color: var(--text-secondary);
        font-size: calc(var(--basic-font-size) * 0.8);
    }

    @media ${media.md} {
        width: fit-content;
        padding: calc(var(--basic-spacing) / 2);
        margin: 0 calc(var(--basic-spacing) / 2) calc(var(--basic-spacing) / 2) 0;
    }
`;

export default SkillsItem;
