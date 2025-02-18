import type { FileTree } from '~/constant/folders'
import { folders } from '~/constant/folders'

export function getTitle(id: number | string, local: 'ja' | 'en'): string | null {
  const search = (nodes: FileTree[]): string | null => {
    for (const node of nodes) {
      if (node.id === id) {
        return node.label[local]
      }
      if (node.files && node.files.length > 0) {
        const result = search(node.files)
        if (result !== null) {
          return result
        }
      }
    }
    return null
  }

  return search(folders)
}
