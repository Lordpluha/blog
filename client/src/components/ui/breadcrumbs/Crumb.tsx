import { Link } from 'react-router-dom'

/**
 * The Crumb component is a TypeScript React component that renders a link with a modified title.
 * @param  - `path`: a string representing the path for the link
 * @param  - `title`: a string representing the path for the link
 * @returns The `Crumb` component is returning a JSX element. Specifically, it is returning a `Link`
 * component from a React Router library, with the `to` prop set to the `path` variable and the content
 * of the link being the `titleUpp` variable.
 */
const Crumb = ({path, title}:{path:string, title:string}) => {
  title = title.replace('_', ' ')
  const titleUpp = title[0].toUpperCase() + title.slice(1)

  return (
    <Link to={path}>{titleUpp}</Link>
  )
}

export default Crumb