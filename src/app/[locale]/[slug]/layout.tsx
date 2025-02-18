// app/mdx-page/layout.tsx
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose px-3 mt-3">
      {children}
    </article>
  )
}
