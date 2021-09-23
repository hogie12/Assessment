function anagram(words1, words2){
if(words1.length !== words2.length){
    return false
}
let sortedWords1 = ''
let sortedWords2 = ''
let arrwords1 = []
let arrwords2 = []

for(let i =0; i < words1.length; i++){
  arrwords1.push(words1[i])
  arrwords2.push(words2[i])
}

for(let i=0; i<words1.length; i++){
 for(let j = 0; j < words1.length; j++){
    if(arrwords1[i] < arrwords1[j]){
        let x = arrwords1[i]
        arrwords1[i] = arrwords1[j]
        arrwords1[j] = x
    }
    if(arrwords2[i] < arrwords2[j]){
        let x = arrwords2[i]
        arrwords2[i] = arrwords2[j]
        arrwords2[j] = x
    }
 }
}
for(let i=0; i<words1.length;i++){
    sortedWords1 += arrwords1[i] 
    sortedWords2 += arrwords2[i] 
}

if(sortedWords1 === sortedWords2){
    return true
} else {
    return false
}
}

console.log(anagram('vice', 'vice'))