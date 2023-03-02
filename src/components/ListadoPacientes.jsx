import Mensaje from "./Mensaje"
import Paciente from "./Paciente"

const ListadoPacientes = (props) => {
  const { pacientes, setPaciente, eliminarPaciente } = props
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
      {
        pacientes && pacientes.length === 0 ?
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Comienza agregsando pacientes y <span className="text-indigo-600 font-bold">aparecerán en este lugar</span></p>
            <Mensaje
              mensaje="nada que mostrar"
            />
          </>
          :
          <>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
            {pacientes.map((paciente) => (
              <Paciente
                paciente={paciente}
                key={paciente.id}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </>
      }
    </div>
  )
}

export default ListadoPacientes