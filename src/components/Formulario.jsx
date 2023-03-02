import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = (props) => {

  //props
  const { pacientes, setPacientes, paciente, setPaciente } = props

  //state
  const [nombre, setNombre] = useState('');
  const [propietario, setPropieatario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);
  const [mensajeSubmit, setMensajeSubmit] = useState('');

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropieatario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
      setMensajeSubmit('Editar Paciente');
    } else {
      setMensajeSubmit('Agregar Paciente');
    }
  }, [paciente])


  const handleSubmit = (e) => {
    e.preventDefault();
    //validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true);
      return;
    }
    setError(false);
    //objeto de paciente
    const objetoPaciente = {
      nombre, propietario, email, fecha, sintomas
    }

    if (paciente.id) {
      //editando registro
      objetoPaciente.id = paciente.id;
      setPacientes(pacientes.map(p => p.id === paciente.id ? objetoPaciente : p));
      setPaciente({})
    } else {
      //agregando registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    reiniciarFormulario();
  }

  const reiniciarFormulario = () => {
    setNombre('');
    setPropieatario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  const generarId = () => {
    const fecha = Date.now().toString(36).substring(2)
    const random = Math.random().toString(36).substring(2)
    return fecha + random
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5">
        {error &&
          <Error
            mensaje="Todos los campos son obligatorios"
          />
        }
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={e => setPropieatario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold">Alta</label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea
            name=""
            id="sintomas"
            cols="30"
            rows="10"
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
          />

        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={mensajeSubmit}
        />
      </form>
    </div>
  )
}

export default Formulario