import React from 'react';
import { Page, NavigationProps } from '../types';

export const MessagesPage: React.FC<NavigationProps> = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex w-full md:w-1/3 flex-col border-r border-gray-200 bg-card-light dark:border-gray-700 dark:bg-card-dark">
        <div className="p-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted-light dark:text-text-muted-dark">
              search
            </span>
            <input
              className="h-10 w-full rounded-lg border-none bg-background-light pl-10 pr-4 text-sm text-text-light placeholder:text-text-muted-light focus:ring-2 focus:ring-primary dark:bg-background-dark dark:text-text-dark dark:placeholder:text-text-muted-dark"
              placeholder="Buscar mensajes..."
              type="search"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="flex cursor-pointer items-start gap-3 bg-active-light dark:bg-active-dark p-4 border-l-4 border-primary">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApLHY6bLg3VONPyu4qGLYBmBzYu9qT29zC58eoy3-ZAI9MlSXel0E4XUdocZFWypbnzbssYtu5xSzuHiIM54iDL-AHwCFcK_SPhLyAiPsez19yfCcoQC4DA-o4PULeqNvvUSe5gOnG1oosTYdeytaENW9MXSqzy_YAOYrvIx7n_bkuGyaGLQsnFyWeHYUbbyiGC3EuJefCYePAqyF_Gu1M7KoUNyDNk7_l0BaViqF47DO8bpflDkTwhGBdlFDSseeQs4P22psBiYxN')" }}
              ></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card-light bg-green-500 dark:border-card-dark"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-bold text-text-light dark:text-text-dark">Carlos V.</p>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">11:30 AM</p>
              </div>
              <p className="mt-1 text-sm text-text-muted-light dark:text-text-muted-dark truncate">
                Genial! Te parece bien si...
              </p>
            </div>
          </div>
          <div className="flex cursor-pointer items-start gap-3 p-4 hover:bg-active-light/50 dark:hover:bg-active-dark/50 transition-colors">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-pjdGoojwwNEk8XtgAdeha45cZa74lzf_RMUm43McFQ5Rnt4U5ka2NJmwjtp7k1E80XNIPMaSCYJLaA1hyMEUuCWhAaujK03y_Ej8mBMqqWy2vkI5uoDIilLq6JxDU5LyN7jDp0nhB72cX8PqyGYn3g2w0q9x0TfHcyU3Pfi2k9m7-0OOxOm1X-J8PIO6pbG6Vzf6ctfRWB8517racy1GhMHTYv8LYdV04LQojLwMKAtnJqXwiwBwFjv8sUeSQByrYP2OdLpPPzBX')" }}
              ></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-bold text-text-light dark:text-text-dark">Ana G.</p>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Ayer</p>
              </div>
              <p className="mt-1 text-sm text-text-muted-light dark:text-text-muted-dark truncate">
                Sí, todavía está disponible.
              </p>
            </div>
          </div>
          <div className="flex cursor-pointer items-start gap-3 p-4 hover:bg-active-light/50 dark:hover:bg-active-dark/50 transition-colors">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqqo7HWFlEJZjjUXhtDQzm6VLLwm_rfWQoeoCYtK9lzx4yDBTKoRG0zVTa6SWEby-oDN38-ouzqG79u0Ww1CRpqckwNRTZP3LfMFoUZn9-U4dJFK97Gyd52SuvEb9Fwh6U9itbLmSCZD4ymYcOuOM1wwxxmSBDp0yuHhCuvQfIcwJzmWTBrtSBSjs2_bysjzGrV-3kJnIrGp1E3MNovuHEIcpDo3S5YTyjRwv0CSQDNGRSxf6uiMFllezsRi5uHPaFWj8whXJz-1m7')" }}
              ></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card-light bg-green-500 dark:border-card-dark"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-bold text-text-light dark:text-text-dark">Pedro M.</p>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Ayer</p>
              </div>
              <p className="mt-1 text-sm font-semibold text-text-light dark:text-text-dark truncate">
                Tienes una nueva propuesta de trueque.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-1 flex-col bg-background-light dark:bg-background-dark">
        <div className="flex items-center gap-4 border-b border-gray-200 p-4 dark:border-gray-700 bg-card-light dark:bg-card-dark">
          <div className="relative">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApLHY6bLg3VONPyu4qGLYBmBzYu9qT29zC58eoy3-ZAI9MlSXel0E4XUdocZFWypbnzbssYtu5xSzuHiIM54iDL-AHwCFcK_SPhLyAiPsez19yfCcoQC4DA-o4PULeqNvvUSe5gOnG1oosTYdeytaENW9MXSqzy_YAOYrvIx7n_bkuGyaGLQsnFyWeHYUbbyiGC3EuJefCYePAqyF_Gu1M7KoUNyDNk7_l0BaViqF47DO8bpflDkTwhGBdlFDSseeQs4P22psBiYxN')" }}
            ></div>
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card-light bg-green-500 dark:border-card-dark"></div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Carlos V.</h3>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">En línea</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto p-6">
          <div className="flex flex-col gap-4">
            <div className="flex justify-start">
              <div className="max-w-md rounded-lg rounded-bl-none bg-card-light dark:bg-card-dark p-3 shadow-sm">
                <p className="text-sm text-text-light dark:text-text-dark">
                  Hola! Me interesa mucho tu sillón de madera. Aún lo tienes?
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-md rounded-lg rounded-br-none bg-peach dark:bg-primary/30 p-3 shadow-sm">
                <p className="text-sm text-brown dark:text-text-dark">
                  Hola Carlos! Sí, todavía lo tengo. Vi que tienes una cámara vintage, te interesaría un trueque?
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-md rounded-lg rounded-bl-none bg-card-light dark:bg-card-dark p-3 shadow-sm">
                <p className="text-sm text-text-light dark:text-text-dark">
                  Sí, claro! Me parece una excelente idea. La cámara está en perfecto estado.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-6 w-full max-w-lg rounded-xl border border-gray-200 bg-card-light p-4 shadow-md dark:border-gray-700 dark:bg-card-dark">
            <p className="text-center font-bold text-text-light dark:text-text-dark">Propuesta de Trueque</p>
            <div className="mt-4 flex items-center justify-around">
              <div className="flex flex-col items-center gap-2 text-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-24"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDtdI_sz8DiF9NDjz9oRUjM9gkOtw36hBFxwOMUqWSEzYkx6Q_0iz5JKkU0Bz-EmzVTzyl7mhiI3cgToa7kqmxAD_FTMdAKSPX6ed6247IfCh7_BB5CpubYiRxpVwK479uC-kJ5UW5S5wCEQM8IGH-gwJ5io10ju3C7bDeB4G6w1E7bu3ueDSoFuu_aOc20YnZPnAZjTwpwhlHfC2IpLgs1JyxZMrJfJG6xT6bOxM2XDlBxGkhe2AWhZmXKgyImdDZqpX0TuVkclb6')" }}
                ></div>
                <p className="text-sm font-medium text-text-light dark:text-text-dark">Sillón de Madera</p>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Tú</p>
              </div>
              <span className="material-symbols-outlined text-4xl text-primary">swap_horiz</span>
              <div className="flex flex-col items-center gap-2 text-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-24"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7yh8TzUnktdviI3ywCkrAYfYDxQdr78zYs3PqmksP_0wFyXfRpzj69E26-EPkRi7Ku75U9Qc8fIsNtGZNM5WLjQIKv9nVLGV0Crgyk3DbxbAOYiXfMyYvg1Ek11VYZ1DzrQ_domkKhEwoxl3WzELqa-ZGtmiw3peWtD-fqDmE_KfPiWVBCot_8ki8wAjvtgTB6QV1jbizgpnaXPUV1wY2s0pOeCO0RxcEQ52fwf2k0pH7LRJDln3uVj_evYTunSo-xpAJU2uxuIJC')" }}
                ></div>
                <p className="text-sm font-medium text-text-light dark:text-text-dark">Cámara de Film</p>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Carlos V.</p>
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <button className="flex h-10 flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primary text-sm font-bold leading-normal tracking-[0.015em] text-primary hover:bg-primary/10 transition-colors">
                <span className="truncate">Rechazar</span>
              </button>
              <button className="flex h-10 flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary text-sm font-bold leading-normal tracking-[0.015em] text-white hover:bg-opacity-90 transition-colors">
                <span className="truncate">Aceptar</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-auto border-t border-gray-200 p-4 dark:border-gray-700 bg-card-light dark:bg-card-dark">
          <div className="relative">
            <textarea
              className="w-full resize-none rounded-lg border border-gray-200 bg-card-light p-3 pr-28 text-sm text-text-light placeholder-text-muted-light focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-card-dark dark:text-text-dark dark:placeholder-text-muted-dark"
              placeholder="Escribe tu mensaje..."
              rows={1}
            ></textarea>
            <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
              <button className="flex h-8 w-8 items-center justify-center rounded-full text-text-muted-light hover:bg-active-light dark:text-text-muted-dark dark:hover:bg-active-dark transition-colors">
                <span className="material-symbols-outlined text-xl">swap_horiz</span>
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white hover:bg-opacity-90 transition-colors">
                <span className="material-symbols-outlined text-xl">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SettingsPage: React.FC<NavigationProps> = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto pb-32">
      <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-8">Configuración</h1>
      <div className="space-y-6">
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm">
          <details className="group p-6" open>
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <h2 className="text-xl font-bold text-text-light dark:text-text-dark">Cuenta</h2>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-muted-light dark:text-text-muted-dark mb-1" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className="w-full rounded-lg border-peach dark:border-brown bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:ring-primary focus:border-primary p-3"
                  id="nombre"
                  type="text"
                  defaultValue="Sofia R."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted-light dark:text-text-muted-dark mb-1" htmlFor="email">
                  Correo Electrónico
                </label>
                <input
                  className="w-full rounded-lg border-peach dark:border-brown bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:ring-primary focus:border-primary p-3"
                  id="email"
                  type="email"
                  defaultValue="sofia.r@email.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-text-muted-light dark:text-text-muted-dark mb-1" htmlFor="ubicacion">
                  Ubicación
                </label>
                <input
                  className="w-full rounded-lg border-peach dark:border-brown bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:ring-primary focus:border-primary p-3"
                  id="ubicacion"
                  type="text"
                  defaultValue="Buenos Aires, Argentina"
                />
              </div>
            </div>
          </details>
        </div>
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm">
          <details className="group p-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <h2 className="text-xl font-bold text-text-light dark:text-text-dark">Notificaciones</h2>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-text-light dark:text-text-dark">Nuevos mensajes</h3>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    Recibir notificaciones cuando alguien te envía un mensaje.
                  </p>
                </div>
                <div className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer toggle-checkbox" id="toggle-messages" type="checkbox" />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary toggle-label"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-text-light dark:text-text-dark">Ofertas en tus ítems</h3>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    Recibir notificaciones sobre nuevas ofertas.
                  </p>
                </div>
                <div className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer toggle-checkbox" id="toggle-offers" type="checkbox" />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary toggle-label"></div>
                </div>
              </div>
            </div>
          </details>
        </div>
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm">
          <details className="group p-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <h2 className="text-xl font-bold text-text-light dark:text-text-dark">Seguridad</h2>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="mt-6 space-y-4">
              <a className="font-medium text-primary hover:underline" href="#">
                Cambiar contraseña
              </a>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-text-light dark:text-text-dark">Autenticación de dos factores</h3>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    Añade una capa extra de seguridad a tu cuenta.
                  </p>
                </div>
                <button className="rounded-lg bg-peach dark:bg-brown px-4 py-2 text-sm font-bold text-primary dark:text-peach">
                  Activar
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-[0_4px_14px_rgba(232,76,48,0.3)] hover:shadow-[0_6px_20px_rgba(232,76,48,0.4)] transition-shadow">
          <span className="truncate">Guardar Cambios</span>
        </button>
      </div>
    </div>
  );
};

export const UploadItemPage: React.FC<NavigationProps> = ({ setPage }) => {
  return (
    <div className="p-8 max-w-4xl mx-auto pb-32">
      <h1 className="text-3xl font-bold text-text-light mb-8">Publicar Nuevo Trueque</h1>
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-primary/50 rounded-xl bg-peach text-center cursor-pointer hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-primary text-5xl mb-4">photo_camera</span>
          <p className="text-lg font-semibold text-primary">Arrastra tus fotos aquí</p>
          <p className="text-sm text-text-muted-light">o haz click para seleccionar archivos</p>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-muted-light mb-1" htmlFor="titulo">
              Título del artículo
            </label>
            <input
              className="w-full rounded-lg border-peach bg-card-light text-text-light placeholder:text-text-muted-light/70 focus:ring-primary focus:border-primary p-3"
              id="titulo"
              placeholder="Ej: Guitarra acústica en buen estado"
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-muted-light mb-1" htmlFor="descripcion">
              Descripción
            </label>
            <textarea
              className="w-full rounded-lg border-peach bg-card-light text-text-light placeholder:text-text-muted-light/70 focus:ring-primary focus:border-primary p-3"
              id="descripcion"
              placeholder="Describe tu artículo en detalle..."
              rows={4}
            ></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-muted-light mb-1" htmlFor="categoria">
                Categoría
              </label>
              <select className="w-full rounded-lg border-peach bg-card-light text-text-light focus:ring-primary focus:border-primary p-3" id="categoria">
                <option>Electrónica</option>
                <option>Hogar y Jardín</option>
                <option>Moda y Accesorios</option>
                <option>Deportes y Ocio</option>
                <option>Libros, Música y Películas</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted-light mb-1" htmlFor="estado">
                Estado del producto
              </label>
              <select className="w-full rounded-lg border-peach bg-card-light text-text-light focus:ring-primary focus:border-primary p-3" id="estado">
                <option>Nuevo</option>
                <option>Como nuevo</option>
                <option>Buen estado</option>
                <option>Usado</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-muted-light mb-1" htmlFor="busqueda">
              ¿Qué buscas a cambio?
            </label>
            <input
              className="w-full rounded-lg border-peach bg-card-light text-text-light placeholder:text-text-muted-light/70 focus:ring-primary focus:border-primary p-3"
              id="busqueda"
              placeholder="Ej: Busco un teclado musical o artículos de jardinería"
              type="text"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-4">
          <button 
            onClick={() => setPage(Page.Dashboard)}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-transparent text-primary text-sm font-bold leading-normal tracking-[0.015em] border-2 border-primary hover:bg-peach transition-colors"
          >
            <span className="truncate">Cancelar</span>
          </button>
          <button 
            onClick={() => setPage(Page.MyItems)}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-[0_4px_14px_rgba(232,76,48,0.2)] hover:shadow-[0_6px_20px_rgba(232,76,48,0.3)] transition-shadow"
          >
            <span className="truncate">Publicar Ahora</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const MakeOfferPage: React.FC<NavigationProps> = ({ setPage }) => {
  return (
    <div className="mx-auto max-w-7xl p-8 pb-32">
      <header className="mb-8">
        <h2 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">
          Realizar Propuesta de Intercambio
        </h2>
      </header>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6 rounded-xl bg-card-light dark:bg-card-dark p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">Lo que quieres</h3>
          <div className="relative w-full overflow-hidden rounded-xl">
            <div
              className="aspect-[4/3] w-full bg-cover bg-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7yh8TzUnktdviI3ywCkrAYfYDxQdr78zYs3PqmksP_0wFyXfRpzj69E26-EPkRi7Ku75U9Qc8fIsNtGZNM5WLjQIKv9nVLGV0Crgyk3DbxbAOYiXfMyYvg1Ek11VYZ1DzrQ_domkKhEwoxl3WzELqa-ZGtmiw3peWtD-fqDmE_KfPiWVBCot_8ki8wAjvtgTB6QV1jbizgpnaXPUV1wY2s0pOeCO0RxcEQ52fwf2k0pH7LRJDln3uVj_evYTunSo-xpAJU2uxuIJC')" }}
            ></div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shrink-0"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-pjdGoojwwNEk8XtgAdeha45cZa74lzf_RMUm43McFQ5Rnt4U5ka2NJmwjtp7k1E80XNIPMaSCYJLaA1hyMEUuCWhAaujK03y_Ej8mBMqqWy2vkI5uoDIilLq6JxDU5LyN7jDp0nhB72cX8PqyGYn3g2w0q9x0TfHcyU3Pfi2k9m7-0OOxOm1X-J8PIO6pbG6Vzf6ctfRWB8517racy1GhMHTYv8LYdV04LQojLwMKAtnJqXwiwBwFjv8sUeSQByrYP2OdLpPPzBX')" }}
              ></div>
              <div>
                <p className="text-lg font-bold text-text-light dark:text-text-dark">
                  Cámara de Film Vintage
                </p>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                  De @fotografo_retro
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Valor Estimado</p>
              <p className="text-lg font-bold text-text-light dark:text-text-dark">$75.00</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-xl bg-card-light dark:bg-card-dark p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">Tu Oferta</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="relative cursor-pointer rounded-lg border-2 border-primary ring-2 ring-primary/20">
              <div
                className="aspect-square w-full rounded-md bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBp5LjDm_bpBRauyc3C1fFXnaRqPL0_MXlohjYMTHJmz2l4bUnYQwjj7uMrFzUvWmbyFa2Iyqc6UCu_3bStAYB6gPKowTL0PvX2G-ncxz57ICVTbAGZB0q1wtvXUEK2Na3twPvZ0p7dOkBf4sNbhj128cSIPzGu-0vvx5RJH6nf86MBPVEzY4ttztphlR1nDekCP7hOMWzkI81aWS_2ZoAen8a1XN9UjAZXebciZG21UYtS44nMridacTh4OEwnADnkog_TRAaUX--M')" }}
              ></div>
              <div className="absolute right-2 top-2 rounded-full border border-primary bg-card-light dark:bg-card-dark">
                <span className="material-symbols-outlined text-primary filled">
                  check_circle
                </span>
              </div>
            </div>
            <div className="relative cursor-pointer rounded-lg border-2 border-transparent hover:border-primary/50">
              <div
                className="aspect-square w-full rounded-md bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6NuesndynYPqypyPSQHTCIH9CgJ82aT2aX4uJKpxYIT4ianT4_MUxvm_NdOIFrOzt8B_6AIXET0mFoBDZhwoO6Q-njjhoQYzGEjGyiEPcn1LoixkYt6lQcUUkUYdLfsXpy7mrqIF8xx5YIUJOhjlTmv-0RW3CUDkXPnxjp9oCixxNrlJetXr_KOAOQi7S3kysBM9kzuBILemViFrf_AleWNULrf5pV5UTtB3OcpsyleRmUrN6X0_PQ0JXccZDVP7u3Ftf0QmLB0JN')" }}
              ></div>
            </div>
             <div className="relative cursor-pointer rounded-lg border-2 border-transparent hover:border-primary/50">
              <div
                className="aspect-square w-full rounded-md bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1VGLnotEvh4uk6HDAzaOJ9ias7fQRcZeJ_AW_H-BcBt7JnDFQZ72TtrJes0ZwRvY-FkRM1PjAefCN5Y9fTriuLy3mhrHMFfytD3bwlS-LfCZG1D0FRPHVbbU3e33VZx_L_bO7zyhCXmU5VeOPHrKrnFhaMHK3pnSIGnVpBqI5qJh7EI-D44UUAd1hxK0CraTOXuXLNm0cqIDG2PR_YDam_GQHaw_m9qzqgRkRVlfiyKmiDLIs7xJUxUGQdFBgscJoz6qEMgHLDvgM')" }}
              ></div>
            </div>
            <div className="relative cursor-pointer rounded-lg border-2 border-transparent hover:border-primary/50">
              <div
                className="aspect-square w-full rounded-md bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChuHx4wdXTG_2xsOTUYlVb9CFVp6aGqtdFJfDp02Av4wezxI4bNGXh6B4P8SSgjUELzkioEQBOR4YI4FpSBsF0Lp8eT6mKY5yczW7BtI_OMETDxHyEx6pHSYiuOTjhxAz6PWUS8G0ZW0Ot1Gu3ZlpbzdJtDeg6yyF81N7jvfFUH4DPIzRsIMmyxzCGhPs4ZLarrOYOybcrQtMhDhoQiJZGM5okDNUFUMLuDuUCs7wllPuiVVXMuYqDs0VLPmMDGO4zlDlff8GMS1wR')" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 md:left-64 right-0 z-10 border-t border-gray-200 bg-card-light/80 backdrop-blur-sm dark:border-gray-700 dark:bg-card-dark/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div>
            <p className="text-lg font-bold text-text-light dark:text-text-dark">1 artículo seleccionado</p>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Valor estimado de tu oferta: $40.00</p>
          </div>
          <button 
            onClick={() => setPage(Page.Messages)}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity"
          >
            <span className="truncate">Enviar Propuesta</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
