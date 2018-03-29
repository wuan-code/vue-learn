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

/*
// 获取用户信息
export function getAuth () {
  return ax.get('/auth')
    .then(res => res.data)
}

// 获取网站配置项
export function getOpt () {
  return ax.get('/option')
    .then(res => res.data)
}

// 获取文章列表
export function getArts (params) {
  return ax.get('/article', { params })
    .then(res => res.data)
}

// 获取单个文章
export function getArt (data) {
  return ax.get(`/article/${data.id}`)
    .then(res => res.data)
}

// 获取评价
export function getComment (params) {
  return ax.get('/comment', { params })
    .then(res => res.data)
}

// 提交评价
export function postComment (data) {
  return ax.post('/comment', data)
    .then(res => res.data)
}

// 评论点赞
export function likeComment (data) {
  return ax.post(`/like`, data)
    .then(res => res.data)
}
*/
