import Link from "./Link";

function Sidebar() {
  const links = [
    { name: "Dropdown", path: "/dropdown" },
    { name: "Accordion", path: "/accordion" },
    { name: "Buttons", path: "/buttons" },
    { name: "Modal", path: "/modal" },
    { name: "Table", path: "/table" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.name} to={link.path} className="mb-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2">
        {link.name}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
