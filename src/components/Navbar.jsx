import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Menu inverted>
            <Container>
                <Link to='/'>
                    <Menu.Item name='home' />
                </Link>

                <Link to='/planets'>
                    <Menu.Item name='planets' />
                </Link>

                <Link to='/people'>
                    <Menu.Item name='people' />
                </Link>

            </Container>

        </Menu>
    )
}

export default Navbar