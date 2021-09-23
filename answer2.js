function tags(tag) {
  const openTags = ["(", "{", "["];
  const closeTags = [")", "}", "]"];
  if(tag.length % 2 !== 0){
    return false
  }
  let tags = []
  for(let i=0; i < tag.length; i++){
    let open = tag[i]  
    if(openTags.includes(open)) {
        tags.push(open)
    }
    if(closeTags.includes(open)) {
        let temt = tags.pop()
        if(openTags[closeTags.indexOf(open)] !== temt){
            return false
        }
    }
  }
//   console.log(tags)
  return tags.length === 0 
}

console.log(tags(`([][]{})`))
