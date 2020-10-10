const phrases = require('./data/phrases.json').phrase
const tasks = require('./data/tasks.json')



function trashTalkGenerator(role) {
if(!role) return "請點擊任一圖片"
let target = ''
let statement = ''
switch (role) {
    case 'engineer' :
        target = '工程師'
        statement = sample (tasks.engineer)
        break
    case 'designer' :
        target = '設計師'
        statement = sample (tasks.designer)
        break
    case 'founder' :
        target = '創業家'
        statement = sample (tasks.entrepreneur)
        break 
}
return `身為一個${target},${statement}${sample(phrases)}吧？`
}

function sample(collection) {
  const randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
  console.log(collection)
}


module.exports = trashTalkGenerator