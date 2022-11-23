//Ejercicio: Shopping cart

const menuItems = [
  { name: 'apple', instock: 2 },
  { name: 'pineapple', instock: 3 },
  { name: 'pear', instock: 0 },
  { name: 'peach', instock: 3 },
  { name: 'orange', instock: 1 },
];

function NavBar({ menuitems, minstock }) {
  const updatedList = menuitems.map((it, i) => {
    if (it.instock >= minstock) return <li key={i}>{it.name}</li>
  });
  return <ul style={{ listStyleType: 'none' }}>{updatedList}</ul>
}


ReactDOM.render(<NavBar menuitems={menuItems} minstock={2} />, document.getElementById('root'));