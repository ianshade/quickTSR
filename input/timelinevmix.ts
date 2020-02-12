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
			layer: 'vmix_program0',
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
			layer: 'vmix_program1',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.PROGRAM,
				input: 2,
				transition: { effect:VMixTransitionType.CubeZoom, duration: 2000 }
			}
		},
		{
			id: 'media',
			enable: {
				start: Date.now()+6000,
				duration: 20000
			},
			layer: 'vmix_media0',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.INPUT,
				inputType: VMixInputType.Video,
				filePath: 'C:/Users/krzyc/Downloads/Audio_Video Sync Test 1080P60.mp4',
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
						playing: true,
						overlays: {
							1: 'G:/qt projects/LivemindSignalGenerator/SignalGenerator/images/patterns/ramp.png'
						}
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
			layer: 'vmix_media1',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.INPUT,
				inputType: VMixInputType.Image,
				filePath: 'G:/qt projects/LivemindSignalGenerator/SignalGenerator/images/patterns/ramp.png',
				transform: {
					zoom: 0.5,
					panX: 0.3,
					panY: 0.2,
					alpha: 128
				}
			}
		},
		{
			id: 'program03',
			enable: {
				start: Date.now()+7000,
				duration: 10000
			},
			layer: 'vmix_program0',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.PROGRAM,
				inputLayer: 'vmix_media0'
			}
		},
		{
			id: 'audio',
			enable: {
				start: Date.now()+6000,
				duration: 8000
			},
			layer: 'avmix_media0_audio',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.AUDIO,
				volume: 60,
				balance: -0.5,
				audioAuto: false,
				muted: false,
				audioBuses: 'M,A',
				fade: 1000
			}
		},
		{
			id: 'program04',
			enable: {
				start: Date.now()+15000,
				duration: 10000
			},
			layer: 'vmix_program0',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.PROGRAM,
				input: 1
			}
		},
		{
			id: 'overlay',
			enable: {
				start: Date.now()+1000,
				duration: 2000
			},
			layer: 'vmix_overlay0',
			content: {
				deviceType: DeviceType.VMIX,
				type: TimelineContentTypeVMix.OVERLAY,
				input: 5
			}
		},
		// {
		// 	id: 'inputOverlayOverwrite',
		// 	enable: {
		// 		start: Date.now()+6000,
		// 		duration: 20000
		// 	},
		// 	layer: 'vmixLayer5',
		// 	content: {
		// 		deviceType: DeviceType.VMIX,
		// 		type: TimelineContentTypeVMix.INPUT,
		// 		inputType: VMixInputType.Video,
		// 		input: 'C:/Users/krzyc/Downloads/Audio_Video Sync Test 1080P60.mp4',
		// 		overlays: {
		// 			2: 1
		// 		}
		// 	}
		// },
		// {
		// 	id: 'imageTrOverwrite',
		// 	enable: {
		// 		start: Date.now()+12000,
		// 		duration: 3000
		// 	},
		// 	layer: 'vmixLayer4',
		// 	content: {
		// 		deviceType: DeviceType.VMIX,
		// 		type: TimelineContentTypeVMix.INPUT,
		// 		input: 'G:/qt projects/LivemindSignalGenerator/SignalGenerator/images/patterns/ramp.png',
		// 		transform: {
		// 			zoom: 2,
		// 			panX: -0.3,
		// 			panY: -0.2,
		// 			alpha: 128
		// 		}
		// 	}
		// },

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
