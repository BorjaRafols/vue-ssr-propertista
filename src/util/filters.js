export function host (url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}
