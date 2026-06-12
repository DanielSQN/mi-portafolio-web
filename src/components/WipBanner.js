export default function WipBanner() {
  return (
    <aside className="wip-banner" role="status">
      <p className="wip-cmd">
        <span className="wip-prompt">~/proyectos $</span> npm run build:nuevos-casos
        <b className="wip-cursor" aria-hidden="true" />
      </p>
      <div className="wip-bar" aria-hidden="true">
        <span className="wip-bar-fill" />
      </div>
      <p className="wip-text">
        <span aria-hidden="true">👷</span> Zona de obra digital: aquí siempre hay
        andamios. Cada semana se documenta un caso nuevo — vuelve pronto para ver
        qué se está cocinando.
      </p>
    </aside>
  );
}
