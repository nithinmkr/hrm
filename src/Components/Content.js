import classNames from 'classnames';
import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './Header';

const Content = ({isOpen,toggle}) => {
    return (
        <Container fluid className={classNames("content",{"is-open":isOpen})}>
            <Header toggle={toggle}/>
        </Container>
    )
}

export default Content;
