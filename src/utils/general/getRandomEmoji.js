export function getRandomEmoji () {
  const emoji = [
    '💩', '👾', '🤖', '🎃', '🐻', '👽',
    '🤡', '🧠', '🐮', '🐲', '🦉', '🐞',
    '🐸', '🦇', '🎅', '🧞‍️', '🧚', '🧜',
    '🖕', '🧐', '🤪', '🎩', '👨', '🐹'
  ]

  const randomIndex = Math.floor(Math.random() * emoji.length)

  return emoji[randomIndex]
}
