import { DeviceType, MappingVMix, MappingCasparCG, MappingAtem, MappingAtemType } from 'timeline-state-resolver'
import { TSRInput } from '../src'
import { literal } from 'timeline-state-resolver/dist/devices/device'

export const input: TSRInput = {
	mappings: {
		'vmixLayer0': literal<MappingVMix>({
			device: DeviceType.VMIX,
			deviceId: 'vmix0',
		}),
		'vmixLayer1': literal<MappingVMix>({
			device: DeviceType.VMIX,
			deviceId: 'vmix0',
		}),
		'vmixLayer2': literal<MappingVMix>({
			device: DeviceType.VMIX,
			deviceId: 'vmix0',
		}),
		'vmixLayer3': literal<MappingVMix>({
			device: DeviceType.VMIX,
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
