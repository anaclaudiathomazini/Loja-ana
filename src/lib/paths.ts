/** Prefix site paths with Astro `base` (GitHub Pages project path). */
export function withBase(path = '/'): string {
  const base = import.meta.env.BASE_URL || '/';
  if (!path || path === '/') return base;
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}

/** Strip base from pathname for active-nav checks. */
export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL || '/';
  if (base === '/') return pathname;
  const normalized = base.endsWith('/') ? base.slice(0, -1) : base;
  if (pathname === normalized || pathname === `${normalized}/`) return '/';
  if (pathname.startsWith(`${normalized}/`)) {
    return pathname.slice(normalized.length) || '/';
  }
  return pathname;
}
