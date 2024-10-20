import Home from '../pages/Home';
import Lab1 from '../pages/Lab1';
import Lab2 from '../pages/Lab2';

const menuItems = [
    {
      id: 1,
      label: "Strona Główna",
      url: "/",
      urlPattern: "/",
      element: <Home/>,
    },
    {
      id: 2,
      label: "Laboratorium 1",
      url: "/lab1",
      urlPattern: "/lab1",
      element: <Lab1/>,
    },
    {
      id: 3,
      label: "Laboratorium 2",
      url: "/lab2/1",  // Przykładowa domyślna ścieżka
      urlPattern: "/lab2/:id",  // Obsługa parametru id
      element: <Lab2/>,
    },
  ];
  
  export default menuItems;
  