import React, { useState, useContext } from 'react'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { useNavigate } from 'react-router-dom'

import { Box } from '@mui/material'
import { Input } from '@mui/material'
import { useBasket } from '../contexts/BasketContextProvider'
import '../styles/orderForm.css'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
}

function ChildModal() {
	const { getBasket } = useBasket()

	let navigate = useNavigate()

	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [addres, setAddres] = useState('')

	const [open, setOpen] = React.useState(false)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	function basketCleaner() {
		if (!email || !phone || !addres) {
			alert('Some inputs are empty')
			return
		}

		setAddres('')
		setPhone('')
		setEmail('')

		navigate('/')
		localStorage.removeItem('basket')
		getBasket()
		handleClose()
	}

	return (
		<div>
			<Button
				onClick={handleOpen}
				color='success'
				variant='contained'
				style={{ marginLeft: '1vw', marginRight: '2.6vw' }}
			>
				Buy now
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='parent-modal-title'
				aria-describedby='parent-modal-description'
			>
				<Box
					style={{
						width: '30%',
						margin: '15vw auto',
						padding: '3vw',
						background: 'rgb(0,0,0,.8)',
						borderRadius: '1vw',
					}}
				>
					<div
						style={{
							width: '90%',
							margin: 'auto',
							display: 'flex',
							flexDirection: 'column',
							marginTop: '3vw',
						}}
					>
						<Input
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
							className='orderInput'
							color='secondary'
							type='text'
							placeholder='Enter your EMail'
							style={{
								marginBottom: '2vw',
								backgroundColor: 'rgb(255,255,255, .2)',
								borderRadius: '.3vw .3vw 0 0',
								color: 'white',
								paddingLeft: '2vw',
							}}
						/>
						<Input
							value={phone}
							onChange={e => setPhone(e.target.value)}
							required
							className='orderInput'
							color='secondary'
							type='text'
							placeholder='Enter your phone'
							style={{
								marginBottom: '2vw',
								backgroundColor: 'rgb(255,255,255, .2)',
								borderRadius: '.3vw .3vw 0 0',
								color: 'white',
								paddingLeft: '2vw',
							}}
						/>
						<Input
							value={addres}
							onChange={e => setAddres(e.target.value)}
							required
							className='orderInput'
							color='secondary'
							type='text'
							placeholder='Enter your addres'
							style={{
								marginBottom: '2vw',
								backgroundColor: 'rgb(255,255,255, .2)',
								borderRadius: '.3vw .3vw 0 0',
								color: 'white',
								paddingLeft: '2vw',
							}}
						/>
						<button
							tybe='submit'
							style={{
								background: 'white',
								color: 'black',
								width: '300px',
								margin: 'auto',
							}}
							onClick={basketCleaner}
						>
							Buy
						</button>
					</div>
				</Box>
			</Modal>
		</div>
	)
}

export default ChildModal
