import { BleManager } from 'react-native-ble-plx'
import { Buffer } from 'buffer'

const exampleUuid = '7E767CEE-8E08-47D6-AE31-FF42AB73C766'

export const manager = new BleManager({
  restoreStateIdentifier: 'test',
  restoreStateFunction: (restoredState) => {},
})

export const scanAndConnect = () => {
  manager.startDeviceScan([exampleUuid], null, async (error, device) => {
    if (error) {
      console.log(error)
      return
    }

    console.log(device?.name)
    try {
      await device?.connect()
      await device?.discoverAllServicesAndCharacteristics()

      const characteristics = await device?.characteristicsForService(
        exampleUuid
      )

      const data = Buffer.from('hello').toString('base64')

      const response = await characteristics?.[0].writeWithResponse(data)

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  })
}

export const stopDeviceScan = () => manager.stopDeviceScan()
