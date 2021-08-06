import { faBriefcase, faHome, faImage, faPaperPlane, faQuestion, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React from 'react'
import { Button, Nav } from 'react-bootstrap'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <div className={classNames("sidebar",{"is-open":isOpen})}>
            <div className="sidebar-header">
                <Button
                    variant="link"
                    onClick={toggle}
                    style={{ color: "#fff" }}
                    className="mt-4"
                >
                    <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
                </Button>
                <h3>react-bootstrap sidebar</h3>
            </div>

            <Nav className="flex-column pt-2">
                <p className="ml-3">Heading</p>

                <Nav.Item className="active">
                    <Nav.Link href="/">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Nav.Link>
                </Nav.Item>



                <Nav.Item>
                    <Nav.Link href="/">
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              About
            </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/">
                        <FontAwesomeIcon icon={faImage} className="mr-2" />
              Portfolio
            </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/">
                        <FontAwesomeIcon icon={faQuestion} className="mr-2" />
              FAQ
            </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/">
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Contact
            </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
export default Sidebar
