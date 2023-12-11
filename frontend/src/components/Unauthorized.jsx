import { useNavigate } from 'react-router-dom';

export default function Unauthorized () {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section>
      <h1>Unauthorized</h1>
      <br />
      <p>No tiene los permisos para acceder a esta página.</p>
      <div>
        <button onClick={goBack}>Ir atrás</button>
      </div>
    </section>
  );
}