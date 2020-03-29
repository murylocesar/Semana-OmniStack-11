import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.png';

export default function NewIncident(){

    const [title, setTitle ] =useState('');
    const [description, setDescription ] =useState('');
    const [value, setValue] =useState('');

   

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncidente(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };
        try{
            await api.post('incidents', data , {
				headers: {
					Authorization: ongId,
				}
			})

             alert("Caso cadastrado com sucesso");

        }catch (err){
             alert("Erro ao cadastrar caso, tente novamente");
        }
    }

    return (
       <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be The Hero"/>
                    
                    <h1> Cadastrar novo caso </h1>

                    <p> Descreva o caso detalhadamente para encontrar um herói para resolver isso .</p>

                   <Link className="back-link" to="/profile"> 
                    
                        <FiArrowLeft size ={ 16 } color="#E02041" /> 
                        Listar casos

                    </Link>
                </section>
                <form onSubmit={handleNewIncidente}>
                    <input 
                        placeholder="Título do caso"
                        required 
                        value={ title } 
                        onChange ={ e => setTitle(e.target.value)}
                        />
                    <textarea 
                        type="descrição" 
                        placeholder="Descrição" 
                        required
                        onChange ={ e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        required
                        onChange ={ e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
