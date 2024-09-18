function clsx(...classNames): string {
  return classNames.filter(Boolean).join(" ");
}

export default clsx;
