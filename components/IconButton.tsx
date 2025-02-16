import { styled } from 'stitches.config'

export const IconButton = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$slate4',
  padding: '10px 10px 10px 10px',
  width: 'max-content',
  height: 'max-content',
  borderRadius: '$full',
  cursor: 'pointer',
  transition: '$button',
  border: 'none',
  '& svg': {
    fill: '$slate12',
    width: '20px',
    height: '20px'
  },
  '&:hover': {
    backgroundColor: '$slate5'
  }
})
