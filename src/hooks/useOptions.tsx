import { GroupedOptionsType } from 'react-select'
import { Language } from '../interfaces/context/language'
import { lineOne, lineTwo, lineThree } from '../database/lines'

type GroupedOptions = GroupedOptionsType<{
  label: string
  value: string
}>

export default function useOptions(language: Language): GroupedOptions {
  const lineOneOptions = lineOne.stations.map((station) => ({
    value: station.name.english,
    label: language === 'ARABIC' ? station.name.arabic : station.name.english,
  }))

  const lineTwoOptions = lineTwo.stations.map((station) => ({
    value: station.name.english,
    label: language === 'ARABIC' ? station.name.arabic : station.name.english,
  }))

  const lineThreeOptions = lineThree.stations.map((station) => ({
    value: station.name.english,
    label: language === 'ARABIC' ? station.name.arabic : station.name.english,
  }))

  return [
    {
      label: language === 'ARABIC' ? 'الخط الأول' : 'Line One',
      options: lineOneOptions,
    },
    {
      label: language === 'ARABIC' ? 'الخط الثاني' : 'Line Two',
      options: lineTwoOptions,
    },
    {
      label: language === 'ARABIC' ? 'الخط الثالث' : 'Line Three',
      options: lineThreeOptions,
    },
  ]
}
