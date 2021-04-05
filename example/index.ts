import avatar from '../src'

const createAvatar = (seed?: string) =>
  document.getElementById('avatar')!.innerHTML = avatar(seed || 'Your custom seed', { size: 500 })

createAvatar()

document.getElementById('seed')!.addEventListener('input', (event: any) => createAvatar(event.target.value))
