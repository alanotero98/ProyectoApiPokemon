import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CreatePokemonForm.css'


const CreatePokemonForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        life: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        handleErrorMoment();
       
    };

    const handleErrorMoment = () => {


        const validationErrors = {};

        if (!formData.name) {
            validationErrors.name = 'El nombre es obligatorio';
        } else if (typeof formData.name !== 'string') {
            validationErrors.name = 'El nombre debe ser un número';
        }
        if (!formData.image) {
            validationErrors.image = 'La imagen es obligatoria';
        } else if (typeof formData.image !== 'string') {
            validationErrors.image = 'La imagen debe ser un texto';
        }
        
        if (!formData.life) {
            validationErrors.life = 'La vida es obligatoria';
        } else if (typeof formData.life !== 'number') {
            validationErrors.life = 'La vida debe ser un número';
        } else if (formData.life < 0 || formData.life > 100) {
            validationErrors.life = 'La vida debe ser un número entre 0 y 100';
        }
        
        if (!formData.attack) {
            validationErrors.attack = 'El ataque es obligatorio';
        } else if (typeof formData.attack !== 'number') {
            validationErrors.attack = 'El ataque debe ser un número';
        } else if (formData.attack < 0 || formData.attack > 100) {
            validationErrors.attack = 'El ataque debe ser un número entre 0 y 100';
        }
        
        if (!formData.defense) {
            validationErrors.defense = 'La defensa es obligatoria';
        } else if (typeof formData.defense !== 'number') {
            validationErrors.defense = 'La defensa debe ser un número';
        } else if (formData.defense < 0 || formData.defense > 100) {
            validationErrors.defense = 'La defensa debe ser un número entre 0 y 100';
        }
        
        
        if (!formData.speed) {
            validationErrors.speed = 'La velocidad es obligatoria';
        } else if (typeof formData.speed !== 'number') {
            validationErrors.speed = 'La velocidad debe ser un número';
        } else if (formData.speed < 0 || formData.speed > 100) {
            validationErrors.speed = 'La velocidad debe ser un número entre 0 y 100';
        }
        
        if (!formData.height) {
            validationErrors.height = 'La altura es obligatoria';
        } else if (typeof formData.height !== 'number') {
            validationErrors.height = 'La altura debe ser un número';
        } else if (formData.height <= 0) {
            validationErrors.height = 'La altura debe ser un número mayor a 0';
        }
        
        if (!formData.weight) {
            validationErrors.weight = 'El peso es obligatorio';
        } else if (typeof formData.weight !== 'number') {
            validationErrors.weight = 'El peso debe ser un número';
        } else if (formData.weight === 0) {
            validationErrors.weight = 'El peso no puede ser 0';
        }
        
        if (formData.types.length === 0 || formData.types.length > 2) {
            validationErrors.types = 'Tiene que haber al menos un tipo y no puede ser mayor a 2';
        }
        
        setErrors(validationErrors);

        
    }
    console.log(formData.types)

    const handleTypeChange = (event) => {

        const selectedTypes = Array.from(event.target.selectedOptions, option => option.value);
        
        setFormData
            ({
                ...formData,
                types: selectedTypes // Reemplazar los valores anteriores con los nuevos valores seleccionados
            
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Realiza validaciones aquí antes de enviar el formulario
        const validationErrors = {};

        if (!formData.name) {
            validationErrors.name = 'El nombre es obligatorio';
        } else if (typeof formData.name !== 'string') {
            validationErrors.name = 'El nombre debe ser un número';
        }
        if (!formData.image) {
            validationErrors.image = 'La imagen es obligatoria';
        } else if (typeof formData.image !== 'string') {
            validationErrors.image = 'La imagen debe ser un texto';
        }
        
        if (!formData.life) {
            validationErrors.life = 'La vida es obligatoria';
        } else if (typeof formData.life !== 'number') {
            validationErrors.life = 'La vida debe ser un número';
        } else if (formData.life < 0 || formData.life > 100) {
            validationErrors.life = 'La vida debe ser un número entre 0 y 100';
        }
        
        if (!formData.attack) {
            validationErrors.attack = 'El ataque es obligatorio';
        } else if (typeof formData.attack !== 'number') {
            validationErrors.attack = 'El ataque debe ser un número';
        } else if (formData.attack < 0 || formData.attack > 100) {
            validationErrors.attack = 'El ataque debe ser un número entre 0 y 100';
        }
        
        if (!formData.defense) {
            validationErrors.defense = 'La defensa es obligatoria';
        } else if (typeof formData.defense !== 'number') {
            validationErrors.defense = 'La defensa debe ser un número';
        } else if (formData.defense < 0 || formData.defense > 100) {
            validationErrors.defense = 'La defensa debe ser un número entre 0 y 100';
        }
        
        
        if (!formData.speed) {
            validationErrors.speed = 'La velocidad es obligatoria';
        } else if (typeof formData.speed !== 'number') {
            validationErrors.speed = 'La velocidad debe ser un número';
        } else if (formData.speed < 0 || formData.speed > 100) {
            validationErrors.speed = 'La velocidad debe ser un número entre 0 y 100';
        }
        
        if (!formData.height) {
            validationErrors.height = 'La altura es obligatoria';
        } else if (typeof formData.height !== 'number') {
            validationErrors.height = 'La altura debe ser un número';
        } else if (formData.height <= 0) {
            validationErrors.height = 'La altura debe ser un número mayor a 0';
        }
        
        if (!formData.weight) {
            validationErrors.weight = 'El peso es obligatorio';
        } else if (typeof formData.weight !== 'number') {
            validationErrors.weight = 'El peso debe ser un número';
        } else if (formData.weight === 0) {
            validationErrors.weight = 'El peso no puede ser 0';
        }
        
        if (formData.types.length === 0 || formData.types.length > 2) {
            validationErrors.types = 'Tiene que haber al menos un tipo y no puede ser mayor a 2';
        }
        // Agrega más validaciones según tus necesidades

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:3001/pokemons', formData);
            if (response.status === 201) {
                alert('Pokémon creado exitosamente');
                setFormData({
                    name: '',
                    image: '',
                    life: '',
                    attack: '',
                    defense: '',
                    speed: '',
                    height: '',
                    weight: '',
                    types: []
                });
                setErrors({});
            }
        } catch (error) {
            console.error(error);
            alert('Error al crear el Pokémon');
        }
    };


    return (
        <div className='formulario'>
        <div className="form-container">
            <h1>Crear Nuevo Pokémon</h1>
            <form onSubmit={handleSubmit} className="pokemon-form">
            {errors.name && <p className="error-message">{errors.name}</p>} 
                <label>Nombre:</label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    
                />
                {errors.image && <p className="error-message">{errors.image}</p>} 
                <label>Imagen:</label>
                <input
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    
                />
                {errors.life && <p className="error-message">{errors.life}</p>} 
                <label>Vida:</label>
                <input
                    
                    name="life"
                    value={formData.life}
                    onChange={handleInputChange}
                    
                />
                {errors.attack && <p className="error-message">{errors.attack}</p>} 
                <label>Attack (cm):</label>
                <input
                    type='number'
                    name="attack"
                    value={formData.attack}
                    onChange={handleInputChange}
                    
                />
                
                {errors.defense && <p className="error-message">{errors.defense}</p>} 
                <label>Defensa:</label>
                <input
                    
                    name="defense"
                    value={formData.defense}
                    onChange={handleInputChange}
                   
                />
                
                {errors.speed && <p className="error-message">{errors.speed}</p>} 
                <label>Velocidad:</label>
                <input
                    
                    name="speed"
                    value={formData.speed}
                    onChange={handleInputChange}
                />
                
                {errors.height && <p className="error-message">{errors.height}</p>} 
                <label>Altura:</label>
                <input
                placeholder='La altura tiene que ser representada en cm'
                    
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                />
                {errors.weight && <p className="error-message">{errors.weight}</p>} 
                <label>Peso:</label>
                <input
                    
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                />
                {errors.types && <p className="error-message">{errors.types}</p>} 
                <label>Tipos:</label>
                <select name="types" value={formData.types} multiple onChange={handleTypeChange}>
                    <option value="grass">Grass</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="normal">Normal</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">Flying</option>
                    <option value="poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="rock">Rock</option>
                    <option value="bug">Bug</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                    <option value="electric">Electric</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="dragon">Dragon</option>
                    <option value="fairy">Fairy</option>
                    <option value="unknow">Unknow</option>
                    <option value="shadow">Shadow</option>
                </select><br />

                <div className="form-actions">
                
                    <Link to="/home">
                        <button className="back-button">Volver al Home</button>
                    </Link>
                    <button type="submit">Crear Pokémon</button>

                </div>
            </form>
        </div>
        </div>
    );
};

export default CreatePokemonForm;



