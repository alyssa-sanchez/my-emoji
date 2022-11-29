let myEmojis = ["🚣🏼‍♀️", "🍜", "🍉"]
let emojiContainer = document.getElementById("emoji-container")
let inputEmoji = document.getElementById("input-emoji")

function renderEmojis() {
  emojiContainer.innerHTML = ""
  for (let i = 0; i < myEmojis.length; i++) {
    emojiContainer.innerHTML += `<span> ${myEmojis[i]} </span> `
  }
}
renderEmojis()

let pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", () => {
  myEmojis.push(inputEmoji.value)
  inputEmoji.value = ""
  renderEmojis()
})

let unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", () => {
  myEmojis.unshift(inputEmoji.value)
  inputEmoji.value = ""
  renderEmojis()
})

let popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", () => {
  myEmojis.pop()
  renderEmojis()
})

let shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", () => {
  myEmojis.shift()
  renderEmojis()
})
