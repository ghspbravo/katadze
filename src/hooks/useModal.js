import { useState } from 'react'
import usePortal from 'react-useportal'
import modal from '../components/modal/modal';

export default function useModal() {
	const { closePortal, openPortal, isOpen, Portal } = usePortal()

	const [content, setContent] = useState()
	const openModal = (content, e) => {
		setContent(content)
		openPortal(e)
	}

	return [modal(content, Portal, closePortal, isOpen), openModal]
}