import { getLangDict } from '@/services/Global/Index'

const getLang = async () => {

  const res = await getLangDict({})
  const zhCN = {}
  const zhTW = {}
  const enUS = {}
  const viVN = {}
  if (res && res.data) {
    res.data.forEach((item: { langKey: string; wordKey: string | number; wordValue: any }) => {
      if (item.langKey === 'zh-CN') {
        zhCN[item.wordKey] = item.wordValue || item.wordKey
      }
      if (item.langKey === 'zh-TW') {
        zhTW[item.wordKey] = item.wordValue || item.wordKey
      }
      if (item.langKey === 'en-US') {
        enUS[item.wordKey] = item.wordValue || item.wordKey
      }
      if (item.langKey === 'vi-VN') {
        viVN[item.wordKey] = item.wordValue || item.wordKey
      }
    })
  }
  return {
    zhCN,
    zhTW,
    enUS,
    viVN
  }

}
export default getLang