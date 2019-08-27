function sample(array) {
  let randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function talkRubbishGenerator(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const jobInChinese = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家',
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  let firstPhrase = task[options.jobs] || []
  let sentence = ''

  sentence = `身為一個${jobInChinese[options.jobs]}，${sample(firstPhrase)}，${sample(phrase)}吧！！`

  if (firstPhrase.length === 0) {
    return '請至少選擇一種職業！！'
  }

  return sentence

}

module.exports = talkRubbishGenerator