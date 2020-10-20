/**
 * Created by brugnara on 20/10/20,
 * @ daniele@brugnara.me
 */

function encode (str) {
  return (str || '')
    .split('')
    .reduce((acc, char) => {
      const last = acc.length && acc[acc.length - 1]
      if (last && last.char === char) {
        last.count++
      } else {
        acc.push({
          char,
          count: 1
        })
      }
      return acc
    }, [])
    .map(item => `${item.count}${item.char}`)
    .join('')
}

function decode (str) {
  let ret = ''
  const reArray = str
    .split(/(\d+)(\D+)/)
    // removing empty items from split()
    .filter(item => !!item)
  let i = 0
  const len = reArray.length
  while (i < len) {
    let count = +reArray[i]
    while (count--) {
      ret += reArray[i + 1]
    }
    i += 2
  }
  return ret
}
