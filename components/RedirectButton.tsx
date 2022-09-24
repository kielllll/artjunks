interface RedirectButtonProps {
  label: string
  href?: string
  target?: string
}

const RedirectButton = ({
  label,
  href = '#',
  target = '_self',
}: RedirectButtonProps) => {
  return (
    <a href={href} target={target}>
      <button className="py-2 px-4 rounded-md border-2 border-white">
        {label}
      </button>
    </a>
  )
}

export default RedirectButton
