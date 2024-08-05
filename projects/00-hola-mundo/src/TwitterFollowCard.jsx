export function TwiterFollowCard({formatUsername, userName, children, name=' Sin parametro enviado', isFollowing,}) {
  // Las props tiene que ser inmutables es decir no se las tiene que modificar al momento que entra
  // Se puede modificar pero no se debe hacer, lo que se podria hacer es crear una constante
  // ejemplo: userNameFormat=@{userName}
  // Forma de enviar nombre de imagen ndinamicamente
  //   const imageSrc = `https://sga.unemi.edu.ec/media/fotos/2022/09/30/${username}`;
  const imageSrc = `https://sga.unemi.edu.ec/media/fotos/2022/09/30/foto_2022930144111.jpg`;
  return (
    // Forma de colocar stilos directamente se envia un diccionario u objeto
    // <article style={{display:'flex', alignItems:'center'}}>
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt="Avatar de José"
        />
        <div className="tw-followCard-info">
          <strong>{children}{name}</strong>
          <span>{formatUsername(userName)}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
