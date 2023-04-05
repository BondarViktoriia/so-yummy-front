import css from './Welcome.module.css';

const Welcome = () => {
  return (
    <>
      <div className={css.backgroundImg}>
        <div className={css.welcomeContent}>
          <div className={css.welcomeIcon}>
            <div width={'100%'} height={'100%'} />
          </div>

          <div className={css.welcomeTextFormat}>
            <h1 className={css.welcomeTitle}>Welcome to the app!</h1>
            <p className={css.welcomeText}>
              Is not only a recipe app, it is, in fact, your cookbook. You can
              add your own recipes to save them for the future.
            </p>
          </div>
          <div className={css.btnGroup}>
            <div
              className={css.registrationBtn}
              style={{
                fontSize: 'inherit',
                lineHeight: '1.5',
              }}
            >
              <btn lnk title="Registration" to="/register"></btn>
            </div>
            <div className={css.signinBtn}>
              <btn lnk to="/signin" otlnInv welcome title="Sign in"></btn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
