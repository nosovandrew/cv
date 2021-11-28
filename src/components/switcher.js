import Image from 'next/image';
import styled from 'styled-components';
import { useContext } from 'react';

import { ThemeContext } from '@/contexts/theme/context';

const SwitcherContainer = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const Switcher = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
        <SwitcherContainer onClick={changeTheme}>
            {theme === 'light' ? (
                <Image
                    quality={100}
                    alt='Переключатель (вкл.)'
                    src='/assets/switcher-on.png'
                    layout='fixed'
                    width={64}
                    height={64}
                />
            ) : (
                <Image
                    quality={100}
                    alt='Переключатель (выкл.)'
                    src='/assets/switcher-off.png'
                    layout='fixed'
                    width={64}
                    height={64}
                />
            )}
        </SwitcherContainer>
    );
};

export default Switcher;
