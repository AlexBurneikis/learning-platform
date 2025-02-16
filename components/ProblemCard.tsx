import {  styled } from "../stitches.config";


export const ProblemCard = styled('div', {
    margin: '0.6rem 0',
    padding: '1.2rem 1.6rem',
    display: 'flex',
    flexFlow: 'column nowrap',
    backgroundColor: '#dae9f7',
    boxShadow: '0px 0px 35px -22px rgba(0,0,0,0.33)',
    borderRadius: '1.2rem',
    length: '100%',

    '&:hover': {
        backgroundColor: '#e1ecf7',
        cursor: 'pointer'
    }

})