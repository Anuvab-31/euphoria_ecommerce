import React from 'react'
import { Container } from '@mui/material'
import { PageLayoutProps } from '../../../utils/AllProps'

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <Container maxWidth={'sm'} sx={{ mt: 10 }}>
            {children}
        </Container>
    )
}

export default PageLayout