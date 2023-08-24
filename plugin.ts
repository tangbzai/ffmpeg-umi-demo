import type { IApi } from 'umi'

export default (api: IApi) => {
  api.addMiddlewares(() => (_req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin')
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp')
    next()
  })
}
