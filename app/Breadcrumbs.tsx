/* oxlint-disable next/no-html-link-for-pages -- Static export. */
export default function Breadcrumbs({ title }: { title: string }) {
  return <nav className="breadcrumbs shell" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li aria-current="page">{title}</li></ol></nav>;
}
