import type { FileTree } from '~/constant/folders'
import { folders } from '~/constant/folders'

export function getAllPosts(): { slug: string, locale: 'ja' | 'en' }[] {
  const posts: { slug: string, locale: 'ja' | 'en' }[] = []

  function traverse(nodes: FileTree[]) {
    for (const node of nodes) {
      // ファイル（子要素）が存在する場合は再帰的に探索
      if (node.files && node.files.length > 0) {
        traverse(node.files)
      }
      else {
        if (node.href) {
          continue
        }
        posts.push({ slug: String(node.id), locale: 'ja' })
        posts.push({ slug: String(node.id), locale: 'en' })
      }
    }
  }

  traverse(folders)
  return posts
}
