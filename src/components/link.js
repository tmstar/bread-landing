/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A } from 'theme-ui';
import { Link as GatsbyLink } from 'gatsby';
export function NavLink({ path, label, children, ...rest }) {
  return (
    <MenuLink as={GatsbyLink} to={path} {...rest}>
      {children ? children : label}
    </MenuLink>
  );
}
export function Link({ path, label, children, ...rest }) {
  return (
    <A as={GatsbyLink} to={path} {...rest}>
      {children ? children : label}
    </A>
  );
}
export function ExternalLink({ path, label, children, ...rest }) {
  return (
    <a href={path} target="_blank" rel="noopener noreferrer" {...rest}>
      {children ? children : label}
    </a>
  );
}
