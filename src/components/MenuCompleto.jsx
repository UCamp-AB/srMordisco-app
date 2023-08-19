import React, { useState } from 'react';

const menuItems = [
    { id: 1, name: 'Arroz con Pollo', type: 'Arroces', price: 30000 },
    { id: 2, name: 'Arroz con Camarones', type: 'Arroces', price: 32500 },
    { id: 3, name: 'Arroz de la casa', type: 'Arroces', price: 30000 },
    { id: 4, name: 'Arroz Vegetariano', type: 'Arroces', price: 40000 },
    { id: 5, name: 'Arroz Valluno', type: 'Arroces', price: 35000 },
    { id: 6, name: 'Arroz Campestre', type: 'Arroces', price: 32000 },
    { id: 7, name: 'Paella', type: 'Paella', price: 30000 },
    { id: 8, name: 'Mordisco Familiar', type: 'Picadas', price: 55000 },
    { id: 9, name: 'Mordisco de Res', type: 'Picadas', price: 19000 },
    { id: 10, name: 'Mordisco de Pollo', type: 'Picadas', price: 19000 },
    { id: 11, name: 'Mordisco de Cerdo', type: 'Picadas', price: 29000 },
    { id: 12, name: 'Salchinachos', type: 'Salchipapas x2', price: 39500 },
    { id: 13, name: 'Mordisco Callejero', type: 'Salchipapas x2', price: 415000},
    { id: 14, name: 'Mordisco Maduro', type: 'Salchipapas x2', price: 37500 },
    { id: 15, name: 'Mordisco Pork', type: 'Salchipapas x2', price: 38500 },
    { id: 16, name: 'Salchimonster', type: 'Salchipapas x2', price: 42000 },
    { id: 17, name: 'Perros Calientes', type: 'Otros', price: 14000 },
    { id: 18, name: 'Tomahawk', type: 'Otros', price: 40000 },
    { id: 19, name: 'T-Bone Steak', type: 'Otros', price: 46500 },
    { id: 20, name: 'Churros', type: 'Otros', price: 12000 },
    { id: 21, name: 'Empanadas x5', type: 'Otros', price: 10000 },
    { id: 22, name: 'Chorizos x2', type: 'Otros', price: 14000 },
    { id: 23, name: 'Canasto de Plátano x4', type: 'Otros', price: 14000 },
    { id: 24, name: 'Panceta', type: 'Otros', price: 15000 },
    { id: 25, name: 'Ceviche de Chicharron', type: 'Otros', price: 15000 },
    { id: 26, name: 'Jugo Natural en agua', type: 'Bebidas', price: 5000 },
    { id: 27, name: 'Jugo Natural en leche', type: 'Bebidas', price: 6000 },
    { id: 28, name: 'Limonada Natural', type: 'Bebidas', price: 5000 },
    { id: 29, name: 'Limonada Cerezada', type: 'Bebidas', price: 7000 },
    { id: 30, name: 'Té', type: 'Bebidas', price: 4000 },
    { id: 31, name: 'Agua en Botella 400 ml', type: 'Bebidas', price: 4000 },
    { id: 32, name: 'Gaseosa 1.5 L', type: 'Bebidas', price: 7000 },
    { id: 33, name: 'Cerveza Nacional', type: 'Bebidas', price: 4500 },
    { id: 34, name: 'Cerveza Importada', type: 'Bebidas', price: 10000 },
    // Agrega más elementos al menú
];

const MenuItem = ({ item }) => (
    <div className="menu-item">
        <h3>{item.name}</h3>
        <p>Tipo: {item.type}</p>
        <p>Precio: ${item.price.toLocaleString()}</p>
    </div>
);

const MenuCategory = ({ category, items }) => (
    <div className="menu-category">
        <h2>{category}</h2>
        <div className="menu">
            {items.map(item => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    </div>
);

const NavBar = ({ categories, activeCategory, onSelectCategory }) => (
    <div className="navbar">
        {categories.map(category => (
            <button
                key={category}
                className={category === activeCategory ? 'active' : ''}
                onClick={() => onSelectCategory(category)}
            >
                {category}
            </button>
        ))}
    </div>
);


function MenuCompleto() {const uniqueCategories = [...new Set(menuItems.map(item => item.type))];
    const [activeCategory, setActiveCategory] = useState(uniqueCategories[0]);

    const filteredItems = menuItems.filter(item => item.type === activeCategory);
    return (
        <div className="app">
            <NavBar
                categories={uniqueCategories}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
            />
            <MenuCategory category={activeCategory} items={filteredItems} />
        </div>
    );
}

export default MenuCompleto;