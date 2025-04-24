import {useNavigation} from "./hooks";

function Link({ to, children, className }) {
  const { navigate } = useNavigation();

  const classes = `text-blue-500 hover:text-blue-700 ${className}`;

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
