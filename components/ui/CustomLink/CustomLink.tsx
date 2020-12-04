import React from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import Router from 'next/router'

const CustomLink: React.FC<NextLinkProps> = ({
  href,
  children,
  ...otherProps
}) => {
  const isPage = () => {
    // if we're in a next.js route, then Router.router will be set
    return Boolean(Router.router)
  }

  return isPage() ? (
    <NextLink href={href}>
      <a {...otherProps}>{children}</a>
    </NextLink>
  ) : (
    <>{children}</>
  )
}

export default CustomLink
