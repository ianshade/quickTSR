import { DeviceType, TimelineContentTypeVMix } from 'timeline-state-resolver'
import { TSRInput } from '../src'

export const input: TSRInput = {
	timeline: [
		{
			id: 'preview',
			enable: {
				start: Date.now()+1000
			},
			layer: 'vmixLayer0',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.PREVIEW,
				input: 2
			}
		},
		{
			id: 'program',
			enable: {
				start: Date.now()+2000
			},
			layer: 'vmixLayer0',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.INPUT,
				input: 3
			}
		},
		{
			id: 'record',
			enable: {
				start: Date.now()+3000
			},
			layer: 'vmixLayer0',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.START_RECORDING,
			}
		},
		{
			id: 'program1',
			enable: {
				start: Date.now()+5000
			},
			layer: 'vmixLayer0',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.INPUT,
				input: 3
			}
		},
		// {
		// 	id: 'recordStop',
		// 	enable: {
		// 		start: Date.now()+8000
		// 	},
		// 	layer: 'vmixLayer0',
		// 	content: {
		// 		deviceType: DeviceType.VMIX,
		// 		type: TimelineContentTypeVMix.STOP_RECORDING,
		// 	}
		// },
	]
}
