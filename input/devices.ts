import { TSRInput } from '../src'
import { DeviceType } from 'timeline-state-resolver'

export const input: TSRInput = {
	devices: {
		'vmix0': {
			type: DeviceType.VMIX,
			options: {
				host: '127.0.0.1',
				port: 8089
			}
		},
		// 'caspar0': {
		// 	type: DeviceType.CASPARCG,
		// 	options: {
		// 		host: '127.0.0.1',
		// 		port: 5250
		// 	}
		// },
		// 'atem0': {
		// 	type: DeviceType.ATEM,
		// 	options: {
		// 		host: '127.0.0.1',
		// 		port: 5250
		// 	}
		// }
	}
}
