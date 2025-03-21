import { Alert } from 'antd'

export default function AlertWarningMessage() {
	const onClose = (e) => {
		console.log(e, 'I was closed.')
	}
	return (
		<Alert
			message='Error Text'
			description='Error Description Error Description Error Description Error Description Error Description Error Description'
			type='error'
			closable
			onClose={onClose}
		/>
	)
}
