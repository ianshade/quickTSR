import { DeviceType, TimelineContentTypeVMix } from 'timeline-state-resolver'
import { TSRInput } from '../src'
import { VMixTransitionType, VMixInputType } from 'timeline-state-resolver/dist/types/src'

export const input: TSRInput = {
	timeline: [

		{
			id: 'program00',
			enable: {
				start: Date.now()+3000,
			},
			layer: 'vmixLayer0',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.PROGRAM,
				input: 2,
				transition: { effect:VMixTransitionType.Fade, duration: 2000 }
			}
		},
		{
			id: 'program01',
			enable: {
				start: Date.now()+8000,
				duration: 5000
			},
			layer: 'vmixLayer0',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.PROGRAM,
				input: 4,
				mix: 2,
				transition: { effect:VMixTransitionType.CubeZoom, duration: 2000 }
			}
		},
		{
			id: 'media',
			enable: {
				start: Date.now()+6000,
				duration: 20000
			},
			layer: 'vmixLayer2',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.INPUT,
				inputType: VMixInputType.Video,
				input: 'C:/Users/krzyc/Downloads/Audio_Video Sync Test 1080P60.mp4',
				playing: false,
				loop: true,
				seek: 10000
			},
			keyframes: [
				{
					id: 'kf0',
					enable: {
						start: 1000,
						duration: 10000
					},
					content: {
						playing: true
					}
				},
			]
		},
		{
			id: 'image',
			enable: {
				start: Date.now()+6000,
				duration: 12000
			},
			layer: 'vmixLayer3',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.INPUT,
				inputType: VMixInputType.Image,
				input: 'G:/qt projects/LivemindSignalGenerator/SignalGenerator/images/patterns/ramp.png',
			}
		},
		{
			id: 'program03',
			enable: {
				start: Date.now()+7000,
				duration: 10000
			},
			layer: 'vmixLayer0',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.PROGRAM,
				input: 'C:/Users/krzyc/Downloads/Audio_Video Sync Test 1080P60.mp4'
			}
		},
		// {
		// 	id: 'program02',
		// 	enable: {
		// 		start: Date.now()+8000,
		// 		duration: 5000
		// 	},
		// 	layer: 'vmixLayer1',
		// 	content: {
		// 		deviceType: DeviceType.VMIX,
		// 		type: TimelineContentTypeVMix.PROGRAM,
		// 		input: 4
		// 	}
		// },

		//
		// RECORDING
		//

		/*
		{
			id: 'record1',
			enable: {
				start: Date.now()+3000,
				duration: 2000
			},
			layer: 'vmixLayer0',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.RECORDING,
				on: true
			}
		},
		*/

		//
		// EXTERNAL
		//

		/*
		{
			id: 'external',
			enable: {
				start: Date.now()+2000,
				duration: 10000
			},
			layer: 'vmixLayer1',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.EXTERNAL,
				on: true
			}
		},
		*/

		//
		// PREVIEW
		//

		/*
		{
			id: 'preview2',
			enable: {
				start: Date.now()+6000,
				duration: 2000
			},
			layer: 'vmixLayer2',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.PREVIEW,
				input: 3
			}
		},
		*/


		// {
		// 	id: 'audio',
		// 	enable: {
		// 		start: Date.now()+4000,
		// 		duration: 2000
		// 	},
		// 	layer: 'vmixLayer2',
		// 	content: {
		// 		deviceType: DeviceType.VMIX,
		// 		type: TimelineContentTypeVMix.AUDIO,
		// 		input: 2,
		// 		volume: 60,
		// 		balance: -0.5
		// 	}
		// },

		
		// {
		// 	id: 'ftb',
		// 	enable: {
		// 		start: Date.now()+4000,
		// 		duration: 3000
		// 	},
		// 	layer: 'vmixLayer2',
		// 	content: {
		// 		deviceType: DeviceType.VMIX,
		// 		type: TimelineContentTypeVMix.FADE_TO_BLACK,
		// 		on: true
		// 	}
		// },
		// {
		// 	id: 'fader',
		// 	enable: {
		// 		start: Date.now(),
		// 		duration: 3000
		// 	},
		// 	layer: 'vmixLayer3',
		// 	content: {
		// 		deviceType: DeviceType.VMIX,
		// 		type: TimelineContentTypeVMix.FADER,
		// 		position: 50
		// 	}
		// },
		// {
		// 	id: 'overlay',
		// 	enable: {
		// 		start: Date.now(),
		// 		duration: 12000
		// 	},
		// 	layer: 'vmixLayer3',
		// 	content: {
		// 		deviceType: DeviceType.VMIX,
		// 		type: TimelineContentTypeVMix.OVERLAY,
		// 		overlay: 3,
		// 		input: 5
		// 	}
		// },
		// {
		// 	id: 'output1',
		// 	enable: {
		// 		start: Date.now(),
		// 		duration: 12000
		// 	},
		// 	layer: 'vmixLayer3',
		// 	content: {
		// 		deviceType: DeviceType.VMIX,
		// 		type: TimelineContentTypeVMix.OUTPUT,
		// 		name: '2',
		// 		source: 'Input',
		// 		input: 3
		// 	}
		// },

	]
}
