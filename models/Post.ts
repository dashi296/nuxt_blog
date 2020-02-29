export interface Post {
  fields: PostFields
  sys: PostSys
}

export interface PostFields {
  content: string
  slug: string
  title: string
}

export interface PostSys {
  id: string
  locale: string
  revision: number
  createdAt: string

  contentType: PostSysItem
  environment: PostSysItem
  space: PostSysItem
}

export interface PostSysItem {
  sys: {
    id: string
    linkType: string
    type: string
  }
}
