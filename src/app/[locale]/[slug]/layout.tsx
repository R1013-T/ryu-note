// app/mdx-page/layout.tsx
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose mt-5 mx-auto">
      {children}
    </article>
  )
}
