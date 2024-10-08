import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './../DesktopNavbar/style.css'
import { BiSolidCategoryAlt } from "react-icons/bi";
<<<<<<< HEAD:src/components/Header/DesktopNavbar/Navbar.jsx
import { IoSearchSharp, IoAddSharp, IoFilter } from "react-icons/io5";
import { FaCar, FaHome, FaTshirt, FaCouch } from 'react-icons/fa';

export default function Navbar() {
    const [selectedCity, setSelectedCity] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
=======
import { IoSearchSharp,IoAddSharp,IoFilter  } from "react-icons/io5";
import HeaderFilterCard from '../headerFilterCard/HeaderFilterCard';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [selectedCity, setSelectedCity] = useState('');
    const [showFilter, setShowFilter] = useState(false);
    const navigate=useNavigate()
>>>>>>> cfc7abde801f94c2bf652da761f6b877509de2e9:src/layout/Header/DesktopNavbar/Navbar.jsx

    const cities = ['Bakı', 'Gəncə', 'Sumqayıt', 'Şəki', 'Lənkəran'];


    const categories = [
        { name: 'Nəqliyyat', products: ['Skuter', 'Avtomobil', 'Motosiklet'], icon: <FaCar /> },
        { name: 'Daşınmaz Əmlak', products: ['Mənzil', 'Ev', 'Ofis'], icon: <FaHome /> },
        { name: 'Dekor', products: ['Güzgü', 'Lampa', 'Divar bəzəkləri'], icon: <FaCouch /> },
        { name: 'Geyim', products: ['Köynək', 'Şalvar', 'Ayaqqabı'], icon: <FaTshirt /> }
    ];

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value); 
    };

<<<<<<< HEAD:src/components/Header/DesktopNavbar/Navbar.jsx
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
=======
    const toggleFilterCard = () => {
        setShowFilter(prev => !prev);
>>>>>>> cfc7abde801f94c2bf652da761f6b877509de2e9:src/layout/Header/DesktopNavbar/Navbar.jsx
    };

    return (
        <>
            <nav className="navbar navbar-expand-xl bg-light align-items-center">
                <div className="container">
                    <a className="navbar-brand" onClick={()=>navigate('/')}>EasySaleApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="category-box" onClick={openModal}>
                                <BiSolidCategoryAlt className='icon' /><span>Kategoriya</span>
                            </div>
                            <div className="input-group">
                                <select value={selectedCity} onChange={handleCityChange}>
                                    <option value="">--Şəhər seçin--</option>
                                    {cities.map((city, index) => (
                                        <option key={index} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                                <input placeholder="Əşya və ya xidmət axtarışı" type="text" className='search-input' />
                                <button className='search-btn'><IoSearchSharp className='icon' /></button>
                            </div>
                            <div className="adverts-box">
<<<<<<< HEAD:src/components/Header/DesktopNavbar/Navbar.jsx
                                <a href="#"><span><IoAddSharp className='icon' />Yeni Elan</span></a>
                                <a href="#"><span><IoFilter className='icon' /> Filter</span></a>
=======
                                <button href="#"><IoAddSharp className='icon'/>Yeni Elan</button>
                                <button href="#" onClick={toggleFilterCard}><IoFilter className='icon'/> Filter</button>
>>>>>>> cfc7abde801f94c2bf652da761f6b877509de2e9:src/layout/Header/DesktopNavbar/Navbar.jsx
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {isModalOpen && (
                <div className="modal category-modal">
                    <div className="modal-content">
                        <button onClick={closeModal}>X</button>
                        <div className="modal-body d-flex">
                            <div className="categories">
                                <div className="categories">
                                    {categories.map((category, index) => (
                                        <div
                                            key={index}
                                            onMouseEnter={() => setSelectedCategory(category)}
                                            className="category-item"
                                        >
                                            <span className="category-icon">{category.icon}</span> {/* Icon */}
                                            {category.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="products">
                                {selectedCategory ? (
                                    <ul>
                                        {selectedCategory.products.map((product, index) => (
                                            <li key={index}>{product}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>Məhsulları görmək üçün kateqoriya seçin</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
