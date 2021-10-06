import { useHistory } from 'react-router';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';

export function Home() {
  const history = useHistory();

  function navegateToNewRoom() {
    history.push('/rooms/new');
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas na sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={navegateToNewRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Cria sua sala com o Google
          </button>
          <div className="separator">Entre em uma sala</div>
          <form action="">
            <input
            type="text"
            placeholder="Digite o código da sala" 
            />
            <Button type="submit">
                Entrar na Sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}