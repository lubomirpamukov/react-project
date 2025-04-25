import {useNavigation} from "./hooks";

function Link({ to, children, className, activeClassName="font-bold" }) {
  const { navigate, currentPath } = useNavigation();

  let classes = `text-blue-500 hover:text-blue-700 ${className} `;
  if(to === currentPath){
    classes += activeClassName
    
  }

  const handleClick = (event) => {
    if(event.ctrlKey || event.metaKey || event.button !== 0){
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return <a className={classes} href={to} onClick={handleClick}>{children}</a>;
}

export default Link;
