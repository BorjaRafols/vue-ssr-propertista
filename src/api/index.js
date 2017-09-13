// this is aliased in webpack config based on server/client build
import axios from 'axios'

export function fetchTestimonials() {
  return new Promise((resolve, reject) => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(result => { resolve(result) ; })
      .catch(error => { reject(error) ; });
  });
}

export function watchList (type, cb) {
  let first = true
  const ref = api.child(`${type}stories`)
  const handler = snapshot => {
    if (first) {
      first = false
    } else {
      cb(snapshot.val())
    }
  }
  ref.on('value', handler)
  return () => {
    ref.off('value', handler)
  }
}
