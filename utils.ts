export const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top;
      const headerHeight = 16; // Ajusta esto al tamaño de tu barra de navegación
      const totalOffset = offsetTop - headerHeight;

      window.scrollBy({
        top: totalOffset,
        behavior: "smooth",
      });
    }
  };

 const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (window.location.pathname === "/tracking") {
      // Redireccionar a la página de inicio
      window.location.href = "/";

      // Esperar un breve tiempo (por ejemplo, 500 ms) antes de realizar el desplazamiento suave
      setTimeout(() => {
        // Obtener la posición de la sección en la página de inicio
        const targetSection = document.getElementById(sectionId);
        const targetPosition = targetSection?.getBoundingClientRect().top ?? 0;

        // Realizar el desplazamiento suave a la posición de la sección en la página de inicio
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }, 1000);
    } else {
      // Si no estamos en la página de tracking, simplemente realizar el desplazamiento suave
      // utilizando la función handleSmoothScroll() que tenías implementada previamente
      handleSmoothScroll(e, sectionId);
    }
  };

  export default handleNavItemClick;


  export const tabs = [
    { label: "Reservar", href: "#reservar" },
    { label: "Disponibles", href: "/disponibles", onClick: "disponibles" },
    { label: "Experiencias", href: "#experiencias", onClick: "experiencias" },
    { label: "Contacto", href: "#contacto", onClick: "contacto" }
  ];