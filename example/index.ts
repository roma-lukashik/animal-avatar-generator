import avatar from '../src'

const createAvatar = (seed = '') =>
  document.getElementById('avatar')!.innerHTML = avatar(seed, { size: 500 })

createAvatar()

document.getElementById('seed')!.addEventListener('input', (event: any) => createAvatar(event.target.value))
