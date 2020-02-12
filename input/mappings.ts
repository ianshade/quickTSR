import { DeviceType, MappingVMixType, MappingCasparCG, MappingAtem, MappingAtemType } from 'timeline-state-resolver'
import { TSRInput } from '../src'
import { literal } from 'timeline-state-resolver/dist/devices/device'
import { MappingVMixAny } from 'timeline-state-resolver/dist/types/src'

export const input: TSRInput = {
	mappings: {
		// 'vmixLayer0': literal<MappingVMix>({
		// 	device: DeviceType.VMIX,
		// 	deviceId: 'vmix0',
		// }),
		// 'vmixLayer1': literal<MappingVMix>({
		// 	device: DeviceType.VMIX,
		// 	deviceId: 'vmix0',
		// }),
		// 'vmixLayer2': literal<MappingVMix>({
		// 	device: DeviceType.VMIX,
		// 	deviceId: 'vmix0',
		// }),
		'vmix_overlay0': literal<MappingVMixAny>({
			device: DeviceType.VMIX,
			mappingType: MappingVMixType.Overlay,
			index: 1,
			deviceId: 'vmix0',
		}),
		'vmix_program0': literal<MappingVMixAny>({
			device: DeviceType.VMIX,
			mappingType: MappingVMixType.Program,
			deviceId: 'vmix0',
		}),
		'vmix_program1': literal<MappingVMixAny>({
			device: DeviceType.VMIX,
			mappingType: MappingVMixType.Program,
			index: 2,
			deviceId: 'vmix0',
		}),
		'avmix_media0_audio': literal<MappingVMixAny>({
			device: DeviceType.VMIX,
			mappingType: MappingVMixType.AudioChannel,
			inputLayer: 'vmix_media0',
			deviceId: 'vmix0',
		}),
		'vmix_media1_audio': literal<MappingVMixAny>({
			device: DeviceType.VMIX,
			mappingType: MappingVMixType.AudioChannel,
			inputLayer: 'vmix_media1',
			deviceId: 'vmix0',
		}),
		'vmix_media0': literal<MappingVMixAny>({
			device: DeviceType.VMIX,
			mappingType: MappingVMixType.Input,
			deviceId: 'vmix0',
		}),
		'vmix_media1': literal<MappingVMixAny>({
			device: DeviceType.VMIX,
			mappingType: MappingVMixType.Input,
			deviceId: 'vmix0',
		}),
		// 'casparLayer0': literal<MappingCasparCG>({
		// 	device: DeviceType.CASPARCG,
		// 	deviceId: 'caspar0',
		// 	channel: 1,
		// 	layer: 10
		// }),
		// 'atemLayer0': literal<MappingAtem>({
		// 	device: DeviceType.ATEM,
		// 	deviceId: 'atem0',
		// 	mappingType: MappingAtemType.MixEffect
		// })
	}
}
