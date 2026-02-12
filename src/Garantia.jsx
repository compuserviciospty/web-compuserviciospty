import './App.css';

function Garantia() {
  return (
    <div className="page-content">
      <h1 className="main-title">
        CONDICIONES DE GARANTIA DE EQUIPOS VENDIDOS EN COMPUSERVICIOS PTY
      </h1>

      {/* Sección 1 */}
      <section>
        <h2 className="section-subtitle">RECOMENDACIONES ANTES DE USAR SU EQUIPO</h2>
        <h3 className="section-header">Lea cuidadosamente antes de operar su equipo</h3>
        <div className="section-text">
          <p><strong>ATENCION!</strong> Ud. debe asegurarse de conectar su equipo a una buena fuente de corriente o de poder en su ubicación. Los equipos no se admitirán en Garantía si sufren fallos por fluctuaciones o bajones de voltaje, o cualquier alteración al cable de poder. Todos los equipos deben usarse en tomacorrientes de 3 salidas polarizadas con conexión a tierra. Los daños por mala conexión a tierra o por fluctuaciones de voltaje causan daños específicos en los equipos los cuales son plenamente identificables al momento de revisarlos. ¡Tome sus precauciones!</p>
          <p><strong>REVISE BIEN EL AREA DONDE PROCEDERA A CONECTAR O INSTALAR SU EQUIPO.</strong> SI UD REALIZA UNA MALA CONEXIÓN DE SU EQUIPO, Y EL EQUIPO SUFRE DAÑO Y ES TRAIDO O ENVIADO A NUESTRA UBICACIÓN PARA UNA REVISION Y SE DETECTA DAÑO POR MALA CONEXIÓN, EL MISMO NO SE PODRA ADMITIR EN GARANTIA. REVISE BIEN SUS CONEXIONES ELECTRICAS.</p>
          <p>Si Ud. Percibe un corrientazo al tocar su equipo al momento de conectarlo a la corriente en su oficina o su residencia, <strong>PARE</strong> su uso inmediatamente y revise SU conexión eléctrica. Esto indica un fallo en la conexión a tierra que está utilizando. Esto NO es falla del equipo.</p>
          <p>Si Ud. esta anuente de la presencia de bajones o fluctuaciones de luz en su ubicación, Ud. <strong>DEBE</strong> conectar el equipo a un Regulador de Voltaje o a una batería de Respaldo para reducir la posibilidad de que el equipo sufra fallas o daños por estos eventos. Aunque no será 100% efectivo, Un regulador de voltaje o batería de respaldo puede Reducir Enormemente la posibilidad de un daño grave en su equipo en una fluctuación de voltaje. NO UTILICE LAS FAMOSAS REGLETAS BARATAS DE VARIAS SALIDAS O LOS ECONOMICOS PROTECTORES DE VOLTAJE DE UNA SALIDA.</p>
          <p>Siempre recomendamos utilizar reguladores de voltaje o batería de respaldo para proteger los equipos sin embargo esto NO asegura que si el equipo falla , se pueda admitir un reclamo por garantía ya que el equipo fallo ante una fluctuación de voltaje aun teniendo la protección sugerida. Como ya se menciono esto no es 100% efectivo pero si ayuda a minimizar grandemente la posibilidad de un fallo en el equipo.</p>
          <p><strong>Recuerde que también brindamos mantenimiento a los equipos. Un mantenimiento realizado cada 2 a 3 meses puede extender la vida útil de su equipo por mucho más tiempo y reducir la posibilidad de algún fallo. </strong> consulte sobre nuestros costos de mantenimiento!!</p>
        </div>
      </section>
      <hr />

      {/* Sección 2 */}
      <section>
        <h2 className="section-subtitle">GARANTIA DE LAPTOPS</h2>
        <h3 className="section-header">Cobertura y exclusiones</h3>
        <div className="section-text">
          <p><strong>La Garantía de LAPTOPS cubre las siguientes condiciones en LAPTOPS de Segunda Mano o POCO USO:</strong></p>
          <ul>
            <li>fallos de fábrica de la placa madre,</li>
            <li>fallos de memoria RAM (que no sea causado por fluctuación de voltaje),</li>
            <li>fallos en el SSD (que no sea causado por fluctuación de voltaje),</li>
            <li>líneas en pantalla, artifactos o parpadeos en pantalla,</li>
            <li>fallos electrónicos de la placa madre y otras partes del equipo como lo son, fallos en puertos USB, fallos en la conexión WiFi (siempre y cuando sean fallas físicas del adaptador Wifi interno en las laptops),</li>
            <li>fallos en la cámara web interna de la laptop.</li>
          </ul>
          <p><strong>TECLADO, BATERIA Y CARGADOR en las laptops de Segunda Mano tienen 30 DIAS DE GARANTIA</strong></p>
          <p><strong>las licencias de Office solo tienen garantía si fueron facturadas a su costo regular adicional al costo del equipo.</strong></p>
          <br />
          <p><strong>La garantía de LAPTOPS NO se podrá validar en las siguientes condiciones:</strong></p>
          <ul>
            <li>No se cubren Fallas de sistema operativo o cualquier tipo de falla en el software. La garantía es sobre fallas de fabrica del hardware del equipo, no sobre el sistema operativo. Cualquier reparación o corrupción del arranque que requiera reinstalación del sistema operativo tendrá su respectivo costo.</li>
            <li>Reclamos, devoluciones o revisiones relacionado a programas o Juegos que no corren o no se ejecutan. Aunque si estamos a la orden para asesorarle sobre si su equipo puede funcionarle para un juego o algún programa de trabajo específico, el cliente tiene la obligación de realizar todos las revisiones e investigaciones correspondientes para saber si el equipo que se va a comprar le funciona correctamente para el programa o Juego que vaya a utilizar.</li>
            <li>Fallas de software causadas por mal apagado del equipo o las causadas por actualizaciones o instalaciones fallidas del BIOS.</li>
            <li>Accesorios de Cortesía como fundas y Mouse inalámbricos y programas incluidos de Cortesía como el Office No Tienen Garantía. No se admiten reclamos por activación de Office o similares ya que el software normalmente tiene un costo y se esta incluyendo en su equipo de Cortesía sin costo.</li>
            <li>Cualquier reclamo de algún software instalado de Cortesia (ejemplo office de cortesía) que presente algún fallo después no se admite en garantía. Tiene su respectivo costo de revisión o reinstalación</li>
            <li>No se cubren garantías si hay presencia de Golpes o derrames de líquidos en los equipos.</li>
            <li>Equipos con Corto circuitos o daños causados por fluctuaciones de voltaje o mal uso del equipo.</li>
            <li>No se admitirán para garantía las Laptops con elementos extraños dentro, presencia de insectos o revisiones y modificaciones no autorizadas o realizadas por OTRO CENTRO DE SERVICIO.</li>
            <li>Daños en el teclado causados por mal uso o desgaste normal como teclas borradas o botones levantados. (AL MOMENTO DE LA ENTREGA DEL EQUIPO SE DEBE VERIFICAR EL BUEN ESTADO DEL TECLADO)</li>
            <li>Laptop entregada con el cable de alimentación alterado en el cargador, o utilizando convertidor de 3 a 2 en la corriente.</li>
          </ul>
        </div>
      </section>
      <hr />

      {/* Sección 3 */}
      <section>
        <h2 className="section-subtitle">GARANTIA DE CPUS</h2>
        <h3 className="section-header">Condiciones generales</h3>
        <div className="section-text">
          <p><strong>La Garantía SOLO CUBRE las siguientes condiciones en CPUS Y COMBOS DE ESCRITORIO de Segunda Mano o Poco Uso:</strong></p>
          <ul>
            <li>En los CPUS se cubren fallos de fabrica como lo pueden ser fallos de la placa madre, fallos de memoria RAM, fallos en el SSD, fallos en el encendido, fallos de imagen o encendido del monitor vendido en el Combo, reinicios inesperados del equipo, puertos USB defectuosos.</li>
            <li>Si alguno de estos componentes falla por un sobrevoltaje de una fluctuación de voltaje, NO será cubierto por Garantía. favor leer las recomendaciones al inicio del documento.</li>
          </ul>
          <p><strong>Accesorios de los combos de CPU como lo son el Teclado, mouse y Accesorios WiFi USB tienen 30 días de garantía</strong></p>
          <p><strong>las licencias de Office solo tienen garantía si fueron facturadas a su costo regular adicional al costo del equipo.</strong></p>
          <br />
          <p><strong>EXCEPCIONES DE GARANTIA EN CPUS Y COMBOS USADOS O DE POCO USO:</strong></p>
          <p>La garantía NO se podrá validar en las siguientes condiciones:</p>
          <ul>
            <li>No se cubren Fallas de sistema operativo o cualquier tipo de falla en el software. La garantía es sobre fallas de fabrica del equipo, no sobre el sistema operativo. Cualquier reparación o corrupción del arranque que requiera reinstalación del sistema operativo tendrá su respectivo costo. Apague su equipo de manera correcta. Un equipo mal apagado constantemente, causara especificas en el Windows las cuales se pueden identificar plenamente y estas fallas No se cubren en Garantía.</li>
            <li>Fallas de software causadas por mal apagado del equipo o las causadas por actualizaciones o instalaciones fallidas del BIOS. Si el equipo inicia una actualización de Firmware o BIOS al encenderlo, no lo interrumpa, aunque demore bastante, este proceso siempre finaliza. Si es interrumpido, el equipo sufrirá daño irreparable y no se admitirá para Garantía.</li>
            <li>Accesorios de Cortesía como fundas y Mouse inalámbricos y programas incluidos de Cortesía como el Office No Tienen Garantía. No se admiten reclamos por activación de Office o similares ya que el software normalmente tiene un costo y se está incluyendo en su equipo de Cortesía sin costo. El mismo se le podrá instalar nuevamente con su licencia la cual tiene su costo.</li>
            <li>Cualquier reclamo de algún software instalado de cortesía que presente algún fallo después no se admite en garantía. Tiene su respectivo costo de revisión o reinstalación.</li>
            <li>Golpes o derrames de líquidos en los equipos anulan inmediatamente la garantía.</li>
            <li>Corto circuitos o daños causados por fluctuaciones de voltaje o mal uso del equipo.</li>
            <li>CPUS con elementos extraños dentro, presencia de insectos o modificaciones no autorizadas o realizadas por otro centro de servicio.</li>
            <li>Monitores rayados o golpeados en la pantalla no se admiten en garantía. Monitores utilizados con cables diferentes a los entregados al momento de la venta no tienen garantía.</li>
            <li>Equipos conectados a tomacorrientes de 2 salidas o usados con convertidores de 3 salidas no tienen garantía.</li>
            <li>No se admitirán para garantía equipos con elementos extraños dentro, presencia de insectos o revisiones y modificaciones no autorizadas o realizadas por OTRO CENTRO DE SERVICIO.</li>
            <li>Equipos entregados con el cable de alimentación alterado en el cargador o utilizando convertidor de 3 a 2 en la corriente.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Garantia;
