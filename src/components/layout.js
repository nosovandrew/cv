import styled from 'styled-components';

// global container for all app
const Container = styled.div`
    padding: var(--basic-spacing);
    margin: 0 auto;
    width: 100%;
`;

export default function Layout({ children }) {
    return (
        <Container>
            {children}
        </Container>
    );
}
