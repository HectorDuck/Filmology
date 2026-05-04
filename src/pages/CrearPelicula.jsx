import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../constants/env";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

function FormularioCrearPelicula() {
    const { id } = useParams();
    const isEdit = !!id;

    const [formData, setFormData] = useState({
        titulo: "",
        descripcion: "",
        imagen_url: ""
    });

    useEffect(() => {
        if (isEdit) {
            axios.get(`${API_BASE_URL}peliculas/${id}`).then(res => {
                console.log("respuesta pelicula individual", res);
                setFormData({
                    titulo: res.data.titulo,
                    descripcion: res.data.descripcion,
                    imagen_url: res.data.imagen_url
                });
            })
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEdit) {
                await axios.put(`${API_BASE_URL}peliculas/${id}`, formData);
            }
            else {
                await axios.post(`${API_BASE_URL}peliculas`, formData);
            }
            Swal.fire({
                icon: "success",
                title: "Éxito",
                text: `¡Contenido ${isEdit ? 'actualizado' : 'agregado'} exitosamente!`,
                timer: 1500,
                showConfirmButton: false
            })
            if (!isEdit) {
                setFormData({
                    titulo: "",
                    descripcion: "",
                    imagen_url: ""
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `Hubo un error al querer ${isEdit ? 'actualizar' : 'agregar'} el contenido`,
                timer: 1500,
                showConfirmButton: false
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Crear contenido
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Título */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Título
                        </label>
                        <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ej: Mi película favorita" required />
                    </div>

                    {/* Descripción */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Descripción
                        </label>
                        <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} rows="4" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Escribe una descripción..." required />
                    </div>

                    {/* Imagen */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            URL de Imagen
                        </label>
                        <input type="url" name="imagen_url" value={formData.imagen_url} onChange={handleChange} className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://ejemplo.com/imagen.jpg" required />
                    </div>

                    {/* Botón */}
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition duration-200">
                        Guardar
                    </button>
                </form>

                {/* Preview de imagen */}
                {formData.imagen_url && (
                    <div className="mt-6">
                        <p className="text-sm text-gray-600 mb-2">Vista previa:</p>
                        <img src={formData.imagen_url} alt="preview" className="w-full h-48 object-cover rounded-xl border" />
                    </div>
                )}
            </div>
        </div>
    )
}
export default FormularioCrearPelicula;