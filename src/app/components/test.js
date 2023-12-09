'use client'
import { createContext } from 'react'
import React from 'react';
import {
	Alert,
	Box,
	Button,
	Card,
	Chip,
	Container,
	Input,
	Modal,
	ProgressBar,
	Text,
} from 'retro-react';

const Context = createContext()


const Test = () => {
	return (
		<div>
			<Button>Click me</Button>
			<Container>{/* Your content here */}</Container>
			<Input placeholder="Enter text" />
			<Box>Box content</Box>
			<Card header="Header" footer="Footer">
				{/* Card content */}
			</Card>
			<Text variant="h1">Hello, world!</Text>
			<Modal open={true}>{/* Modal content */}</Modal>
			<ProgressBar value={50} />
			<Chip color="primary">Chip</Chip>
			<Alert open={true} color="success">
				{/* Alert content */}
			</Alert>
		</div>
	);
};

export default Test;