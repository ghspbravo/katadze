import { useState } from 'react'
import usePortal from 'react-useportal'
import modal from '../components/modal/modal';

export default function useModal() {
	const { closePortal, openPortal, isOpen, Portal } = usePortal()

	const fakeEventObject = {
		target: {
			getBoundingClientRect: function() {
				return {left: 0, top: 0, height: 0}
			}
		}
	}

	const [content, setContent] = useState()
	const openModal = (content, e = null) => {
		if (e === null) {
			e = fakeEventObject
		}
		setContent(content)
		openPortal(e)
	}

	return [modal(content, Portal, closePortal, isOpen), openModal, closePortal]
}