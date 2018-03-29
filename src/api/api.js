import ax from './axios'

// 获取用户信息
export function getAuthor () {
  return ax.get('/author')
    .then(res => res.data)
}

// 获取slogan
export function getSlogan () {
  return ax.get('/slogan')
    .then(res => res.data)
}